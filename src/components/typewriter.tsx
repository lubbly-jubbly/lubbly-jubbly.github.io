import React, { useState, useEffect } from 'react'
import styles from './typewriter.module.css'

type TypewriterProps = {
  textStrings: string[]
  classNames: string[]
  onFinish?: () => void
}

export const Typewriter = (props: TypewriterProps) => {
  const { textStrings, classNames, onFinish } = props

  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [animationClass, setAnimationClass] = useState(styles.typing)
  const [isFinished, setIsFinished] = useState(false)

  const speed = 20

  const currentString = textStrings[currentStringIndex]
  const currentStringAnimationDuration = currentString.length / speed
  const currentStringAnimationDurationInMilliseconds =
    currentStringAnimationDuration * 1000

  const timeToAllowEachAnimation =
    currentStringAnimationDurationInMilliseconds + 1000

  useEffect(() => {
    if (isFinished && onFinish) {
      onFinish()
      return
    }

    if (isFinished) return

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      // Typing forward
      setAnimationClass(styles.typing)
      timeout = setTimeout(() => {
        if (currentStringIndex === textStrings.length - 1) {
          // If its the last string of the bunch, leave it showing
          setIsFinished(true)
        } else {
          setIsDeleting(true)
        }
      }, timeToAllowEachAnimation)
    } else {
      // Backspacing
      setAnimationClass(styles.backspace)
      timeout = setTimeout(() => {
        if (currentStringIndex === textStrings.length - 1) {
          setIsFinished(true)
        } else {
          setIsDeleting(false)
          setTimeout(() => {
            // Small delay before showing next string to prevent string flashing up
            setCurrentStringIndex((prevIndex) => prevIndex + 1)
          }, 50)
        }
      }, timeToAllowEachAnimation)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [
    isDeleting,
    currentStringIndex,
    textStrings.length,
    isFinished,
    onFinish,
    timeToAllowEachAnimation,
  ])

  return (
    <div className="flex justify-center">
      <div>
        <h1
          key={currentStringIndex}
          className={`${styles.typing} ${classNames[currentStringIndex]}`}
          style={{
            animation: `${animationClass} ${currentStringAnimationDuration}s steps(${currentString.length}, end) 1 forwards`,
          }}
        >
          {currentString}
        </h1>
      </div>
    </div>
  )
}
