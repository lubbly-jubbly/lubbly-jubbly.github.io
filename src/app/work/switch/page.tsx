'use client'
import SkillItem from '@/app/components/skillItem'
import Link from 'next/link'
import 'react-slideshow-image/dist/styles.css'
import SwitchScreenshotSlideshow from './switchScreenshotSlideshow'
import styles from './switch.module.css'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'

function SwitchPage() {
  const technologies = [
    'React Native',
    'JavaScript',
    'Firebase Realtime DB',
    'Firebase Auth',
    'Figma',
    'Jest',
  ]

  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [modal, setModal] = useState(false)

  return (
    <div>
      <ModalVideo
        channel="youtube"
        isOpen={modal}
        videoId="hkhQliBpbDE?si=XBIHWeluysoaj2HS"
        onClose={() => setModal(!modal)}
      />
      <div>
        <div className={styles.switchTitleContainer}>
          <div className={styles.switchTitleAndIcons}>
            <div className={styles.switchTitle}>Switch</div>
            <div className={styles.iconsContainer}>
              <Link
                href="https://github.com/lubbly-jubbly"
                target="_blank"
                onMouseEnter={() => setHoveredIcon('github')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <img
                  src={`/images/${
                    hoveredIcon === 'github'
                      ? 'github-icon-active'
                      : 'github-icon'
                  }.png`}
                  alt="github logo"
                  className={styles.icon}
                />
              </Link>
              <div
                onClick={() => setModal(!modal)}
                onMouseEnter={() => setHoveredIcon('play')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <img
                  src={`/images/${
                    hoveredIcon === 'play' ? 'play-icon-active' : 'play-icon'
                  }.png`}
                  alt="play video icon"
                  className={styles.icon}
                />
              </div>
            </div>
          </div>
          <div className="skillItemsContainer">
            {technologies.map((language, index) => (
              <SkillItem text={language} key={index} />
            ))}
          </div>
        </div>
        <div className="mb-4">
          My final project for my Software Development MSc was a rota management
          app for hospitality workplaces.{' '}
        </div>
        <SwitchScreenshotSlideshow />
      </div>
      <div>
        <h2>Scheduling Algorithm</h2>
        <p>A modified greedy algorithm was used to generate the rota.</p>
      </div>
    </div>
  )
}

export default SwitchPage
