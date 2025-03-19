import React, { useEffect } from 'react'
import './sineWave.css'
import Image from 'next/image'

type SineWaveProps = {}

const SineWave: React.FC<SineWaveProps> = ({}) => {
  const amplitude = 20
  const frequency = 0.1
  const width = 500
  const height = 100

  const points = Array.from({ length: width }, (_, x) => {
    const y = amplitude * Math.sin(frequency * x)
    return `${x},${height / 2 - y}`
  }).join(' ')

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement)
    const x = rootStyles.getPropertyValue('--alpha-reference-angle')
  }, [])
  return (
    <div>
      <div className="shape-container shape-container--with-indicators">
        <div className="shape">
          <Image src="images/gce-logo.png" alt="GCE logo" />
        </div>
      </div>

      <svg width={width} height={height}>
        <polyline points={points} fill="none" stroke="gray" strokeWidth="1" />
      </svg>
    </div>
  )
}

export default SineWave
