'use client'
import React, { useState } from 'react'

type GithubButtonProps = {
  githubUrl: string
  size?: number
}

const GithubButton = ({ githubUrl, size }: GithubButtonProps) => {
  const [hovered, setHovered] = useState(false)
  const handleMouseEnter = () => setHovered(true)
  const handleMouseLeave = () => setHovered(false)
  return (
    <a
      href={githubUrl}
      target="_blank"
      aria-label="GitHub Link"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`/images/${hovered ? 'github-icon-active' : 'github-icon'}.png`}
        alt="github logo"
        className={size ? `w-${size}` : 'w-10'}
      />
    </a>
  )
}

export default GithubButton
