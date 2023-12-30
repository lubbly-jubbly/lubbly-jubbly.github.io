'use client'
import SkillItem from '@/app/components/skillItem'
import Link from 'next/link'
import 'react-slideshow-image/dist/styles.css'
import SwitchScreenshotSlideshow from './switchScreenshotSlideshow'
import styles from './switch.module.css'

function SwitchPage() {
  const technologies = [
    'React Native',
    'JavaScript',
    'Firebase Realtime DB',
    'Firebase Auth',
    'Figma',
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
        app for hospitality workplaces.{' '}
        <span>
          Watch a video demo{' '}
          <Link href="" className="inline-link">
            here.
          </Link>{' '}
          View it on{' '}
          <Link
            href="https://github.com/lubbly-jubbly/CalendarProject3"
            className="inline-link"
            target="_blank"
          >
            Github
          </Link>
          .
        </span>
      </div>
      <SwitchScreenshotSlideshow />
    </div>
  )
}

export default SwitchPage
