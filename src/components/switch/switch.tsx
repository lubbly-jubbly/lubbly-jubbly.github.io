'use client'
import SkillList from '@/components/skillList'
import Link from 'next/link'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'
import 'react-slideshow-image/dist/styles.css'
import { PROJECTS } from '../../../content/projects'
import styles from './switch.module.css'
import SwitchScreenshotSlideshow from './switchScreenshotSlideshow'

function Switch() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const [modal, setModal] = useState(false)

  const { date, logo, name, projectType, shortDescription, technologies, url } =
    PROJECTS.switch

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
            <h1 className={styles.switchTitle}>Switch</h1>
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
          <div>
            {projectType}
            <span className="dateText">{date}</span>
          </div>
        </div>
        <div className="my-3">
          <SkillList technologies={technologies} />
        </div>
        <div className="mb-4">
          A rota management app aimed at hospitality businesses that creates a
          rota based on the availability and preferences of employees. The app
          allows employees to request time off,
          {/* This involved solving a constraint satisfaction problem, for which I
          created a modified greedy algorithm using JavaScript. Googleʼs
          Firebase Realtime Database and Authentication were used for the
          projectʼs database and authentication. */}
        </div>
        <SwitchScreenshotSlideshow />
      </div>
      <div>
        <h3>Front-end design</h3>
        <p>Every employee is assigned a colour.</p>
        <br />
        <h3>Scheduling Algorithm</h3>
        <p>A modified greedy algorithm was used to generate the rota.</p>
      </div>
    </div>
  )
}

export default Switch
