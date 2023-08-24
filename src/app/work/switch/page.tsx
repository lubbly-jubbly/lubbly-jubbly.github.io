'use client'
import SkillItem from '@/app/components/skillItem'
import Link from 'next/link'
import 'react-slideshow-image/dist/styles.css'
import SwitchScreenshotSlideshow from './switchScreenshotSlideshow'
import styles from './switch.module.css'

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
      <div className={styles.switchTitleContainer}>
        <div className={styles.switchTitle}>Switch</div>
        <div className="skillItemsContainer">
          {technologies.map((language, index) => (
            <SkillItem text={language} key={index} />
          ))}
        </div>
      </div>
      <div className="mb-4">
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
