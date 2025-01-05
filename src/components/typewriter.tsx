import React, { useState, useEffect } from 'react'
import styles from './typewriter.module.css'

type TypewriterProps = {
  textStrings: string[]
  classNames: string[]
  onFinish: () => void
}

export const Typewriter = (props: TypewriterProps) => {
  const { textStrings, classNames, onFinish } = props

  const [currentStringIndex, setCurrentStringIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [animationClass, setAnimationClass] = useState(styles.typing)
  const [isFinished, setIsFinished] = useState(false)

  const currentString = textStrings[currentStringIndex]
  const currentStringAnimationDuration = currentString.length / 20

  useEffect(() => {
    if (isFinished) {
      onFinish()
      return
    }

    if (isFinished) return

    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting) {
      // Typing forward
      setAnimationClass(styles.typing)
      timeout = setTimeout(() => {
        if (currentStringIndex !== textStrings.length - 1) {
          setIsDeleting(true)
        } else {
          setIsFinished(true)
        }
      }, 1500)
    } else {
      // Backspacing
      setAnimationClass(styles.backspace)
      timeout = setTimeout(() => {
        if (currentStringIndex === textStrings.length - 1) {
          setIsFinished(true)
        } else {
          setIsDeleting(false)
          setCurrentStringIndex((prevIndex) => prevIndex + 1)
        }
      }, 1500)
    }

    return () => clearTimeout(timeout)
  }, [isDeleting, currentStringIndex, textStrings, isFinished, onFinish])

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
