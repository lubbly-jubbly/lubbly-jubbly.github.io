import React, { useState, useEffect } from 'react'
import styles from './typewriter.module.css'

type TypewriterProps = {
  text: string
  className?: string
}

export const Typewriter = (props: TypewriterProps) => {
  return (
    <div className="flex justify-center">
      <div>
        <h1
          className={
            `overflow-hidden whitespace-nowrap m-0 ml-0 tracking-[.15em] animate-typing ` +
            props.className
          }
        >
          {props.text}
        </h1>
      </div>
    </div>
  )
}
