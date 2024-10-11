'use client'
import SkillItem from '@/components/skillItem'
import { TechCategory, TECHNOLOGIES } from '../../../content/technologies'
import SkillRow from './skillRow'
import styles from './skills.module.css'
import { useEffect, useRef, useState } from 'react'

function SkillsPage() {
  const [linedUp, setLinedUp] = useState<boolean>(false)

  const getRandomBetween = (min: number, max: number) => {
    const random = Math.random()
    return random * (max - min) + min
  }

  const [randomSpeeds, setRandomSpeeds] = useState<number[]>(
    Object.keys(TECHNOLOGIES).map((tech, i) => getRandomBetween(3, 10))
  )

  const [isPaused, setIsPaused] = useState(false)
  const elementRef = useRef<HTMLDivElement | null>(null)

  // const stopAnimation = () => {
  //   const element = elementRef.current
  //   if (element) {
  //     // Get the computed style of the element to capture the current transform value
  //     const computedStyle = window.getComputedStyle(element)
  //     const matrix = computedStyle.transform
  //     console.log(computedStyle)
  //     console.log(computedStyle.animation)

  //     console.log(matrix)
  //     // Apply the transform as inline style to freeze the current position
  //     element.style.transform = matrix

  //     // Set paused state to true
  //     setIsPaused(true)
  //   }
  // }

  // const [randomTestSpeeds, setRandomTestSpeeds] = useState<number[][]>(
  //   Object.keys(TECHNOLOGIES).map((tech, i) => [
  //     getRandomBetween(1, 3),
  //     getRandomBetween(1, 3),
  //   ])
  // )

  const [positions, setPositions] = useState(
    Object.keys(TECHNOLOGIES).map(() => ({ x: 0, y: 0 }))
  )
  const [directions, setDirections] = useState(
    Object.keys(TECHNOLOGIES).map(() => ({
      dirX: getRandomBetween(1, 3),
      dirY: getRandomBetween(1, 3),
    }))
  )

  const speed = 3

  const dvdRef = useRef<HTMLDivElement[]>([])
  let animationRequests: number[] = []

  useEffect(() => {
    Object.keys(TECHNOLOGIES).forEach((element, i) => {
      const dvd = dvdRef.current[i]
      if (dvd) {
        const dvdWidth = dvd.clientWidth
        const dvdHeight = dvd.clientHeight

        const animate = () => {
          const screenHeight = window.innerHeight
          const screenWidth = window.innerWidth

          let { x, y } = positions[i]

          let { dirX, dirY } = directions[i]

          if (y + dvdHeight >= screenHeight || y < 0) {
            dirY *= -1
          }
          if (x + dvdWidth >= screenWidth || x < 0) {
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

          animationRequests[i] = requestAnimationFrame(animate)
        }

        animationRequests[i] = requestAnimationFrame(animate)
      }
    })
    console.log(animationRequests)

    return () => {
      // Clean up all animations when component unmounts
      animationRequests.forEach((request) => cancelAnimationFrame(request))
    }
  }, [positions, directions])
  // console.log(directions)
  // console.log(positions)

  const stopDvdAnimations = () => {
    // const element = dvdRef.current
    // if (element) {
    //   // Get the computed style of the element to capture the current transform value
    //   const computedStyle = window.getComputedStyle(element)
    //   const matrix = computedStyle.transform
    //   console.log(computedStyle)
    //   console.log(computedStyle.animation)

    //   console.log(matrix)
    //   // Apply the transform as inline style to freeze the current position
    //   element.style.transform = matrix

    // Set paused state to true
    animationRequests.forEach((animationRequest) =>
      window.cancelAnimationFrame(animationRequest)
    )
    //setIsPaused(true)
    //}
  }

  return (
    <div className="w-100 h-80">
      {/* <button onClick={handleClickLineUpButton}>Line Up!</button> */}
      {/* {Object.keys(TECHNOLOGIES).map((tech, i) => ( */}
      {/* <div
        key={1}
        className={`${styles.item} ${
          isPaused ? styles.paused : styles.animateMoveX
        }`}
        style={
          {
            '--x-speed': `${getRandomBetween(3, 10)}s`,
          } as React.CSSProperties
        }
      >
        <div
          className={`${styles.animatedElement} ${
            isPaused ? styles.paused : styles.animateMoveY
          }`}
          style={
            {
              '--y-speed': `${getRandomBetween(3, 10)}s`,
            } as React.CSSProperties
          }
          ref={elementRef}
        >
          <SkillItem tech={TECHNOLOGIES.javascript} />
        </div>
      </div> */}

      {/* ))} */}
      {/* 
      <div className="grid grid-cols-7 gap-10">
        {Object.keys(TECHNOLOGIES).map((tech, i) => (
          <SkillItem tech={TECHNOLOGIES[tech]} displayName key={i} />
        ))}
      </div> */}
      <button onClick={stopDvdAnimations}>Stop Animation</button>

      {/* {Object.keys(TECHNOLOGIES).map((tech, i) => (
        <div
          //ref={elementRef}
          className={`${styles.testanimatedelement} ${
            isPaused ? styles.testpaused : ''
          }`}
          style={
            {
              '--y-speed': `${randomSpeeds[i]}s`,
            } as React.CSSProperties
          }
        >
          Moving Element
        </div>
      ))} */}

      {Object.keys(TECHNOLOGIES).map((tech, i) => (
        <div
          key={i}
          ref={(element) => element && dvdRef?.current?.push(element)}
          style={{
            position: 'absolute',
            left: positions[i].x,
            top: positions[i].y,
            height: '50px',
            width: '100px',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '75px',
            backgroundPosition: 'center',
          }}
        >
          <SkillItem tech={TECHNOLOGIES[tech]} />
        </div>
      ))}
    </div>
  )
}

export default SkillsPage
