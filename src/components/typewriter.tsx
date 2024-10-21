import React, { useState, useEffect } from 'react'
import styles from './typewriter.module.css'

type TypewriterProps = {
  textStrings: string[]
  classNames: string[]
  onFinish: () => void
}

export const Typewriter = (props: TypewriterProps) => {
  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [animationClass, setAnimationClass] = useState(styles.typing)
  const [isFinished, setIsFinished] = useState(false)

  const currentString = props.textStrings[currentStringIndex]
  const currentStringAnimationDuration = currentString.length / 20

  useEffect(() => {
    if (isFinished) {
      props.onFinish()
      return
    }

    if (isFinished) return

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      // Typing forward
      setAnimationClass(styles.typing)
      timeout = setTimeout(() => {
        if (currentStringIndex !== props.textStrings.length - 1) {
          setIsDeleting(true)
        } else {
          setIsFinished(true)
        }
      }, 1500)
    } else {
      // Backspacing
      setAnimationClass(styles.backspace)
      timeout = setTimeout(() => {
        if (currentStringIndex === props.textStrings.length - 1) {
          setIsFinished(true)
        } else {
          setIsDeleting(false)
          setCurrentStringIndex((prevIndex) => prevIndex + 1)
        }
      }, 1500)
    }

    return () => clearTimeout(timeout)
  }, [isDeleting, currentStringIndex, props.textStrings.length, isFinished])

  return (
    <div className="flex justify-center">
      <div>
        <h1
          key={currentStringIndex}
          className={`${styles.typing} ${props.classNames[currentStringIndex]}`}
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
