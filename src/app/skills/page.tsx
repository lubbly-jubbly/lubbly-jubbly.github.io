'use client'
import SkillItem from '@/components/skillItem'
import { useEffect, useRef, useState } from 'react'
import { TECHNOLOGIES } from '../../../content/technologies'
import styles from './skills.module.css'
import { Typewriter } from '@/components/typewriter'

function SkillsPage() {
  const technlogiesLength = Object.keys(TECHNOLOGIES).length
  const [linedUp, setLinedUp] = useState<boolean>(false)
  const [caughtIcons, setCaughtIcons] = useState<boolean[]>(
    Array(technlogiesLength).fill(0)
  )
  const [cursor, setCursor] = useState('auto')

  const getRandomBetween = (min: number, max: number) => {
    const random = Math.random()
    return random * (max - min) + min
  }

  const getRandomXPosition = () => 20 + Math.random() * (window.innerWidth - 40)
  const getRandomYPosition = () =>
    20 + Math.random() * (window.innerHeight - 40)

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
        return { x: rect.left, y: rect.top + window.scrollY }
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
  }

  const stopAnimations = () => {
    animationRequests.forEach((animationRequest) =>
      window.cancelAnimationFrame(animationRequest)
    )

    lineUp()
  }

  const catchIcon = (index: number) => {
    window.cancelAnimationFrame(animationRequests[index])

    setCaughtIcons((prevCaughtIcons) =>
      prevCaughtIcons.map((status, j) => (index === j ? true : status))
    )
  }

  const netRef = useRef<HTMLImageElement | null>(null)

  const [netMoved, setNetMoved] = useState(false)
  const [netMode, setNetMode] = useState(false)
  const [activeImage, setActiveImage] = useState<HTMLImageElement | null>(null)

  const move = (e: MouseEvent) => {
    if (activeImage) {
      const newX = e.clientX - 60
      const newY = e.clientY - 20 + window.scrollY

      activeImage.style.left = `${newX}px`
      activeImage.style.top = `${newY}px`
    }
  }

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

  useEffect(() => {
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
    }
  }, [positions, directions, netMode, move])

  return (
    <div className={`w-100`} style={{ cursor: cursor }}>
      <Typewriter
        text="Oh no! Who let the skills escape! Give me a hand, would you?"
        className="text-xl text-center"
      />
      <div className="flex justify-center items-center gap-8 py-8 z-10">
        <img
          onClick={stopAnimations}
          src={'images/whistle.webp'}
          width={100}
          className="hover:rotate-6 transition-transform duration-300"
        />
        <img
          src={'images/net.png'}
          width={130}
          className={netMoved ? 'invisible' : 'hidden'}
        />
        <button>
          <img
            ref={netRef}
            onMouseDown={pickUpNet(netRef)}
            src={'images/net.png'}
            width={130}
            className={`-rotate-[60deg] hover:-rotate-90 transition-transform duration-300 ${
              netMoved ? 'absolute' : ''
            }`}
            //className={`${netMoved ? 'absolute' : ''}`}
          />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-10">
        {Object.keys(TECHNOLOGIES).map((tech, i) => (
          <div
            ref={(element) =>
              element &&
              !gridRef?.current.includes(element) &&
              gridRef?.current?.push(element)
            }
            className={`${linedUp || caughtIcons[i] ? styles.gridFadeIn : ''} ${
              styles.grid
            }`}
          >
            <SkillItem tech={TECHNOLOGIES[tech]} displayName key={i} />
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
              position: 'absolute',
              left: positions[i].x,
              top: positions[i].y,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '75px',
              backgroundPosition: 'center',
              '--x-diff': `${gridPositions[i].x}px`,
              '--y-diff': `${gridPositions[i].y}px`,
            } as React.CSSProperties
          }
          className={`${linedUp ? styles.testanimatedelement : ''} ${
            caughtIcons[i] ? styles.iconFadeOut : ''
          }`}
          onMouseOver={() => netMode && catchIcon(i)}
        >
          <SkillItem tech={TECHNOLOGIES[tech]} />
        </div>
      ))}
    </div>
  )
}

export default SkillsPage
