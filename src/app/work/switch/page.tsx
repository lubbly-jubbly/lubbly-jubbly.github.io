'use client'
import SkillItem from '@/app/components/skillItem'
import Link from 'next/link'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import SwitchScreenshotSlideshow from './switchScreenshotSlideshow'

function SwitchPage() {
  const technologies = [
    'React Native',
    'JS',
    'Firebase Realtime DB',
    'Firebase Auth',
    'Jira',
    'Agile',
    'Figma',
    'Git',
    'Jest',
  ]

  return (
    <div>
      <div>Switch</div>
      <div>
        {technologies.map((language, index) => (
          <SkillItem text={language} key={index} />
        ))}
      </div>
      <div>
        My final project for my Software Development MSc was a rota management
        app for hospitality workplaces.
      </div>
      <SwitchScreenshotSlideshow />
      <div>
        Watch a video demo <Link href="">here.</Link> View it on Github.
      </div>
    </div>
  )
}

export default SwitchPage
