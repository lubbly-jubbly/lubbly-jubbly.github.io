'use client'
import SkillItem from '@/components/skillItem'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  getNamesOfTechnologiesInCategory,
  getTechnologiesInCategory,
  TechCategory,
  TECHNOLOGIES,
  Technology,
} from '../../../content/technologies'
import styles from './skills.module.css'
import { Typewriter } from '@/components/typewriter'

function SkillsPage() {
  const technlogiesLength = Object.keys(TECHNOLOGIES).length
  const [linedUp, setLinedUp] = useState<boolean>(false)
  const [caughtIcons, setCaughtIcons] = useState<boolean[]>(
    Array(technlogiesLength).fill(0)
  )
  const [cursor, setCursor] = useState('auto')
  const [selectedCategory, setSelectedCategory] = useState<
    TechCategory | 'All'
  >('All')
  const [gameIsOver, setGameIsOver] = useState(false)
  const [gameToolsShowing, setGameToolsShowing] = useState(false)

  const getRandomBetween = (min: number, max: number) => {
    const random = Math.random()
    return random * (max - min) + min
  }

  const windowIsDefined = typeof window !== 'undefined'
  const getRandomXPosition = () =>
    windowIsDefined ? 20 + Math.random() * (window.innerWidth - 40) : 0
  const getRandomYPosition = () =>
    windowIsDefined ? 20 + Math.random() * (window.innerHeight - 40) : 0

  const [gridPositions, setGridPositions] = useState(
    Object.keys(TECHNOLOGIES).map(() => ({ x: 0, y: 0 }))
  )

  const [positions, setPositions] = useState(
    Object.keys(TECHNOLOGIES).map(() => ({
      x: getRandomXPosition(),
      y: getRandomYPosition(),
    }))
  )
  const [directions, setDirections] = useState(
    Object.keys(TECHNOLOGIES).map(() => ({
      dirX: getRandomBetween(0.3, 2),
      dirY: getRandomBetween(0.3, 2),
    }))
  )

  const speed = 3

  const iconRef = useRef<HTMLDivElement[]>([])
  const gridRef = useRef<HTMLDivElement[]>([])

  let animationRequests: number[] = []

  const lineUp = () => {
    const renderedGridPositions = gridRef.current.map((ref) => {
      if (ref) {
        const rect = ref.getBoundingClientRect()
        return {
          x: rect.left,
          y: rect.top + (windowIsDefined ? window.scrollY : 0),
        }
      }
      return { x: 0, y: 0 }
    })

    let difference = []

    for (var i = 0; i <= positions.length - 1; i++) {
      difference.push({
        x: renderedGridPositions[i].x - positions[i].x,
        y: renderedGridPositions[i].y - positions[i].y,
      })
    }
    setGridPositions(renderedGridPositions)
    setLinedUp(true)
    setTimeout(() => {
      setGameIsOver(true)
    }, 2000)
  }

  const stopAnimations = () => {
    animationRequests.forEach(
      (animationRequest) =>
        windowIsDefined && window.cancelAnimationFrame(animationRequest)
    )

    lineUp()
  }

  const catchIcon = (index: number) => {
    windowIsDefined && window.cancelAnimationFrame(animationRequests[index])

    setCaughtIcons((prevCaughtIcons) =>
      prevCaughtIcons.map((status, j) => (index === j ? true : status))
    )
  }

  const netRef = useRef<HTMLImageElement | null>(null)

  const [netMoved, setNetMoved] = useState(false)
  const [netMode, setNetMode] = useState(false)
  const [activeImage, setActiveImage] = useState<HTMLImageElement | null>(null)

  const move = useCallback(
    (e: MouseEvent) => {
      if (activeImage) {
        const newX = e.clientX - 60
        const newY = e.clientY - 20 + (windowIsDefined ? window.scrollY : 0)

        activeImage.style.left = `${newX}px`
        activeImage.style.top = `${newY}px`
      }
    },
    [activeImage, windowIsDefined]
  )

  const pickUpNet =
    (netRef: React.RefObject<HTMLImageElement>) => (e: React.MouseEvent) => {
      if (netMode) {
        document.removeEventListener('mousemove', move)
        setNetMode(false)
        setActiveImage(null)
        setCursor('auto')
      } else {
        setNetMode(true)
        setNetMoved(true)
        setActiveImage(netRef.current)
        document.addEventListener('mousemove', move)
        setCursor('none')
      }
    }

  const putDownNet = () => {
    if (netMode) {
      document.removeEventListener('mousemove', move)
      setNetMode(false)
      setActiveImage(null)
      setCursor('auto')
      console.log('putting down net')
    }
  }
  console.log(getNamesOfTechnologiesInCategory(selectedCategory))
  const postGameAnimations = () => {
    // phew! thanks. Anyway...
    // fade away
    // Here's what I can do
    // add filters (frontend, backend, data, ...)
  }

  const gridIconOpacity = (i: number, tech: Technology) => {
    const itemIsCaught = linedUp || caughtIcons[i]
    const technologyIsInSelectedCategory =
      selectedCategory === 'All' ||
      getTechnologiesInCategory(selectedCategory).includes(tech)

    if (itemIsCaught && technologyIsInSelectedCategory) return 1
    else if (itemIsCaught) return 0.1
    else return 0
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setGameToolsShowing(true) // Set to true after 5 seconds
    }, 50)

    Object.keys(TECHNOLOGIES).forEach((element, i) => {
      const icon = iconRef.current[i]
      if (icon) {
        const iconWidth = icon.clientWidth
        const iconHeight = icon.clientHeight
        const animate = () => {
          const screenHeight = window.innerHeight
          const screenWidth = window.innerWidth
          let { x, y } = positions[i]
          let { dirX, dirY } = directions[i]
          if (y + iconHeight >= screenHeight || y < 0) {
            dirY *= -1
          }
          if (x + iconWidth >= screenWidth || x < 0) {
            dirX *= -1
          }
          x += dirX * speed
          y += dirY * speed
          setPositions((prevPositions) =>
            prevPositions.map((pos, j) => (i === j ? { x, y } : pos))
          )
          setDirections((prevDirections) =>
            prevDirections.map((dir, j) => (i === j ? { dirX, dirY } : dir))
          )
          if (!caughtIcons[i]) {
            animationRequests[i] = requestAnimationFrame(animate)
          }
        }
        if (!caughtIcons[i]) {
          animationRequests[i] = requestAnimationFrame(animate)
        }
      }
    })

    if (netMode) {
      document.addEventListener('mousemove', move)
    } else {
      document.removeEventListener('mousemove', move)
    }

    return () => {
      animationRequests.forEach((request) => cancelAnimationFrame(request))
      document.removeEventListener('mousemove', move)
      clearTimeout(timer)
    }
  }, [positions, directions, netMode, move, animationRequests, caughtIcons])

  useEffect(() => {
    const timer = setTimeout(() => {
      setGameToolsShowing(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  console.log(gameToolsShowing)
  return (
    <div className={`w-100`} style={{ cursor: cursor }}>
      <div className="h-10">
        {!linedUp && (
          <Typewriter
            text="Oh no! Who let the skills escape! Give me a hand, would you?"
            className="text-xl text-center"
          />
        )}
        {gameIsOver && (
          <Typewriter text="Phew! Thanks." className="text-xl text-center" />
        )}
      </div>
      <div className="flex justify-center items-center gap-8 py-8 z-10">
        <button>
          <img
            onClick={stopAnimations}
            src={'images/whistle.webp'}
            alt={'a silver whistle'}
            width={100}
            className={`${styles.tool} ${
              gameToolsShowing ? styles['fade-in'] : ''
            } ${gameIsOver ? styles['fade-out'] : ''}
            }`}
          />
        </button>
        <img
          src={'images/net.png'}
          alt={''}
          width={130}
          className={netMoved ? 'invisible' : 'hidden'}
        />
        <button>
          <img
            ref={netRef}
            onMouseDown={pickUpNet(netRef)}
            src={'images/net.png'}
            alt={'a net'}
            width={130}
            className={`-rotate-[60deg] ${netMoved ? 'absolute' : ''} ${
              styles.tool
            }  ${gameToolsShowing ? styles['fade-in'] : ''} ${
              gameIsOver ? styles['fade-out'] : ''
            }`}
          />
        </button>
      </div>
      <div className="flex flex-row text-xs justify-between pb-4">
        {(
          ['All', ...Object.values(TechCategory)] as (TechCategory | 'All')[]
        ).map((category) => (
          <button
            key={category}
            className={`
              py-1 px-1.5 rounded-xl 
              ${styles.category} 
              ${selectedCategory === category ? styles.selected : ''}
            `}
            onClick={() => setSelectedCategory(category)}
          >
            <span>{category}</span>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-10">
        {Object.values(TECHNOLOGIES).map((tech, i) => (
          <div
            key={tech.name}
            ref={(element) =>
              element &&
              !gridRef?.current.includes(element) &&
              gridRef?.current?.push(element)
            }
            className={`
              ${styles.grid}
            `}
            style={{
              opacity: gridIconOpacity(i, tech),
              transition: gameIsOver
                ? 'opacity 0.5s ease'
                : 'opacity 0.5s ease 0.7s',
            }}
          >
            <SkillItem tech={tech} displayName key={i} />
          </div>
        ))}
      </div>
      {Object.keys(TECHNOLOGIES).map((tech, i) => (
        <div
          key={i}
          ref={(element) =>
            element &&
            !iconRef?.current.includes(element) &&
            iconRef?.current?.push(element)
          }
          style={
            {
              left: positions[i].x,
              top: positions[i].y,
              '--x-diff': `${gridPositions[i].x}px`,
              '--y-diff': `${gridPositions[i].y}px`,
            } as React.CSSProperties
          }
          className={`absolute bg-no-repeat bg-[length:75px] bg-center ${
            linedUp ? styles.testanimatedelement : ''
          } ${caughtIcons[i] ? styles.iconFadeOut : ''}`}
          onMouseOver={() => netMode && catchIcon(i)}
        >
          <SkillItem tech={TECHNOLOGIES[tech]} />
        </div>
      ))}
    </div>
  )
}

export default SkillsPage
