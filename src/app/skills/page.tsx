'use client'
import SkillItem from '@/components/skillItem'
import { Typewriter } from '@/components/typewriter'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  getTechnologiesInCategory,
  TechCategory,
  TECHNOLOGIES,
  Technology,
} from '../../../content/technologies'
import styles from './skills.module.css'
import Image from 'next/image'

function SkillsPage() {
  const visibleTechnologies = TECHNOLOGIES
  const technlogiesLength = Object.keys(visibleTechnologies).length

  const [linedUp, setLinedUp] = useState<boolean>(false)
  const [caughtIcons, setCaughtIcons] = useState<boolean[]>(
    Array(technlogiesLength).fill(0)
  )
  const [cursor, setCursor] = useState('auto')
  const [selectedCategory, setSelectedCategory] = useState<
    TechCategory | 'All'
  >('All')
  const [gameToolsRendered, setGameToolsRendered] = useState(true)
  const [gameToolsVisible, setGameToolsVisible] = useState(false)
  const [gameToolsFadingOut, setGameToolsFadingOut] = useState(false)
  const [allGridIconsVisible, setAllGridIconsVisible] = useState(false)
  const [playEndOfGameTypewriter, setPlayEndOfGameTypewriter] = useState(false)

  const [typewriterAnimationIsFinished, setTypewriterAnimationIsFinished] =
    useState(false)

  const handleFinishTypewriterAnimation = useCallback(() => {
    setTypewriterAnimationIsFinished(true)
  }, [])

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
    Object.keys(visibleTechnologies).map(() => ({ x: 0, y: 0 }))
  )

  const [positions, setPositions] = useState(
    Object.keys(visibleTechnologies).map(() => ({
      x: getRandomXPosition(),
      y: getRandomYPosition(),
    }))
  )
  const [directions, setDirections] = useState(
    Object.keys(visibleTechnologies).map(() => ({
      dirX: getRandomBetween(0.3, 2),
      dirY: getRandomBetween(0.3, 2),
    }))
  )

  const speed = 3

  const iconRef = useRef<HTMLDivElement[]>([])
  const gridRef = useRef<HTMLDivElement[]>([])

  const animationRequests = useMemo<number[]>(() => [], [])

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
    endGame()
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

    const newCaughtIcons = caughtIcons.map((status, j) =>
      index === j ? true : status
    )

    setCaughtIcons(newCaughtIcons)

    if (newCaughtIcons.every((b) => b === true)) {
      putDownNet()
      endGame()
    }
  }

  const endGame = () => {
    setLinedUp(true)

    setTimeout(() => {
      setAllGridIconsVisible(true)
      setGameToolsFadingOut(true)
      setPlayEndOfGameTypewriter(true)
    }, 2000)
    setTimeout(() => {
      setGameToolsRendered(false)
    }, 3000)
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

  const interactWithNet =
    (netRef: React.RefObject<HTMLImageElement>) => (e: React.MouseEvent) => {
      if (netMode) {
        putDownNet()
      } else {
        pickUpNet(netRef)
      }
    }

  const pickUpNet = (netRef: React.RefObject<HTMLImageElement>) => {
    setNetMode(true)
    setNetMoved(true)
    setActiveImage(netRef.current)
    document.addEventListener('mousemove', move)
    setCursor('none')
  }

  const putDownNet = () => {
    document.removeEventListener('mousemove', move)
    setNetMode(false)
    setActiveImage(null)
    setCursor('auto')
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
    Object.keys(visibleTechnologies).forEach((element, i) => {
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
    }
  }, [
    positions,
    directions,
    netMode,
    move,
    animationRequests,
    caughtIcons,
    visibleTechnologies,
  ])

  useEffect(() => {
    const timer = setTimeout(() => {
      setGameToolsVisible(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={`w-100`} style={{ cursor: cursor }}>
      <div className="h-8">
        {!linedUp && (
          <Typewriter
            textStrings={[
              'Oh no! Who let the skills escape! Give me a hand, would you?',
            ]}
            classNames={['text-xl text-center']}
          />
        )}
        {playEndOfGameTypewriter && (
          <Typewriter
            textStrings={[
              'Phew! Thanks.',
              'Anyway...',
              'Here are the technologies I know how to use.',
            ]}
            classNames={[
              'text-xl text-center',
              'text-xl text-center',
              'text-xl text-center',
            ]}
            onFinish={handleFinishTypewriterAnimation}
          />
        )}
      </div>
      <div className="h-24 flex flex-col justify-end">
        {gameToolsRendered ? (
          <div className="flex justify-center items-center gap-8 py-2  ">
            <button disabled={!gameToolsVisible}>
              <Image
                onClick={stopAnimations}
                src={'images/whistle.webp'}
                alt={'a silver whistle'}
                width={0}
                height={0}
                className={`${styles.tool} ${
                  gameToolsVisible ? styles.fadeIn : ''
                } ${gameToolsFadingOut ? styles.fadeOut : ''}
            w-16 h-auto`}
              />
            </button>
            <Image
              src={'images/net.png'}
              alt={''}
              width={0}
              height={0}
              className={`${netMoved ? 'invisible' : 'hidden'} w-24 h-auto`}
            />
            <button disabled={!gameToolsVisible}>
              <Image
                ref={netRef}
                onMouseDown={interactWithNet(netRef)}
                src={'images/net.png'}
                alt={'a net'}
                width={0}
                height={0}
                className={`-rotate-[60deg] ${netMoved ? 'absolute' : ''} ${
                  styles.tool
                }  ${gameToolsVisible ? styles.fadeIn : ''} ${
                  gameToolsFadingOut ? styles.fadeOut : ''
                } w-24 h-auto`}
              />
            </button>
          </div>
        ) : (
          <div
            className={`flex flex-row text-xs justify-between pb-4 ${
              styles.categories
            } ${typewriterAnimationIsFinished ? styles.fadeIn : ''}`}
          >
            {(
              ['All', ...Object.values(TechCategory)] as (
                | TechCategory
                | 'All'
              )[]
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
        )}
      </div>
      <div className="grid grid-cols-7 gap-10">
        {Object.values(visibleTechnologies).map((tech, i) => (
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
              transition: allGridIconsVisible
                ? 'opacity 0.5s ease'
                : 'opacity 0.5s ease 0.7s',
            }}
          >
            <SkillItem tech={tech} displayName key={i} />
          </div>
        ))}
      </div>
      {Object.keys(visibleTechnologies).map((tech, i) => (
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
          <SkillItem tech={visibleTechnologies[tech]} />
        </div>
      ))}
    </div>
  )
}

export default SkillsPage
