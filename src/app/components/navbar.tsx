'use client'
import Link from 'next/link'
import React, { useState, useRef } from 'react'
import styles from './navbar.module.css'

const Navbar = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const paperAudioUrl = '/sounds/crumpling-paper.mp3'
  const briefcaseAudioUrl = '/sounds/briefcase-opening.mp3'
  const plantAudioUrl = '/sounds/plant-growing.mp3'
  const telephoneAudioUrl = '/sounds/telephone-ringing.mp3'

  const playAudio = (audioPath: string) => {
    if (audioRef.current !== null) {
      audioRef.current.src = audioPath
      audioRef.current.play()
    }
  }
  const stopAudio = (audioPath: string) => {
    if (audioRef.current !== null) {
      audioRef.current.src = audioPath
      audioRef.current.pause()
    }
  }

  const handleStartNavItemHover = (navItem: string, audioPath: string) => {
    if (activeNavItem != navItem) {
      playAudio(audioPath)
      setHoveredNavItem(navItem)
    }
  }
  const handleStopNavItemHover = (navItem: string, audioPath: string) => {
    stopAudio(audioPath)
    setHoveredNavItem(null)
  }
  const handleClickNavItem = (navItem: string, audioPath: string) => {
    stopAudio(audioPath)
    setActiveNavItem(navItem)
  }

  return (
    <div>
      <Link
        className={'d-flex justify-content-center'}
        href={'/'}
        onClick={() => setActiveNavItem('home')}
      >
        <img src="/images/libby-rear-text.png" alt="libby rear" width={300} />
      </Link>
      <nav>
        <ul className={styles.navList}>
          <li>
            <Link href="/work">
              <div
                className={styles.navItemContainer}
                onMouseEnter={() =>
                  handleStartNavItemHover('briefcase', briefcaseAudioUrl)
                }
                onMouseLeave={() =>
                  handleStopNavItemHover('briefcase', briefcaseAudioUrl)
                }
                onClick={() => {
                  handleClickNavItem('briefcase', briefcaseAudioUrl)
                }}
              >
                <div className={styles.briefcaseContainer}>
                  <img
                    src={
                      hoveredNavItem === 'briefcase' ||
                      activeNavItem === 'briefcase'
                        ? '/images/briefcase-open.png'
                        : '/images/briefcase-closed.png'
                    }
                    alt="briefcase"
                    className={
                      hoveredNavItem === 'briefcase' ||
                      activeNavItem === 'briefcase'
                        ? styles.workLinkActive
                        : styles.workLink
                    }
                  />
                </div>
                <div className="mt-2">
                  <img
                    src={
                      activeNavItem === 'briefcase'
                        ? '/images/my-work-text-active.png'
                        : '/images/my-work-text.png'
                    }
                    alt="my work text"
                    height="40px"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/skills">
              <div
                className={styles.navItemContainer}
                onMouseEnter={() => {
                  handleStartNavItemHover('plant', plantAudioUrl)
                }}
                onMouseLeave={() =>
                  handleStopNavItemHover('plant', plantAudioUrl)
                }
                onClick={() => handleClickNavItem('plant', plantAudioUrl)}
              >
                <div className={styles.plantContainer}>
                  <img
                    src={
                      hoveredNavItem === 'plant' || activeNavItem === 'plant'
                        ? '/images/plant-flowered.png'
                        : '/images/plant-baby.png'
                    }
                    alt="a potted plant"
                    className={
                      hoveredNavItem === 'plant' || activeNavItem === 'plant'
                        ? styles.skillsLinkActive
                        : styles.skillsLink
                    }
                  />
                </div>
                <div className="mt-2">
                  <img
                    src={
                      activeNavItem === 'plant'
                        ? '/images/skills-text-active.png'
                        : '/images/skills-text.png'
                    }
                    alt="my work text"
                    height="40px"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/pdfs/CV.pdf" target="_blank">
              <div
                className={styles.navItemContainer}
                onMouseEnter={() => {
                  handleStartNavItemHover('paper', paperAudioUrl)
                }}
                onMouseLeave={() =>
                  handleStopNavItemHover('paper', paperAudioUrl)
                }
                onClick={() => handleStopNavItemHover('paper', paperAudioUrl)}
              >
                <div className={styles.paperContainer}>
                  <img
                    src={
                      hoveredNavItem === 'paper'
                        ? '/images/crumpled-paper.png'
                        : '/images/paper.png'
                    }
                    alt="bit of paper"
                    className={
                      hoveredNavItem === 'paper'
                        ? styles.cvLinkActive
                        : styles.cvLink
                    }
                  />
                </div>
                <div className="mt-2">
                  <img
                    src={'/images/cv-text.png'}
                    alt="cv text"
                    height="32px"
                  />
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <div
                className={styles.navItemContainer}
                onMouseEnter={() =>
                  handleStartNavItemHover('telephone', telephoneAudioUrl)
                }
                onMouseLeave={() =>
                  handleStopNavItemHover('telephone', telephoneAudioUrl)
                }
                onClick={() =>
                  handleClickNavItem('telephone', telephoneAudioUrl)
                }
              >
                <div className={styles.telephoneContainer}>
                  <img
                    src={
                      hoveredNavItem === 'telephone' ||
                      activeNavItem === 'telephone'
                        ? '/images/telephone-ringing.png'
                        : '/images/telephone.png'
                    }
                    alt="a red old-fashioned telephone"
                    className={
                      hoveredNavItem === 'telephone' ||
                      activeNavItem === 'telephone'
                        ? styles.contactLinkActive
                        : styles.contactLink
                    }
                  />
                </div>
                <div className="mt-2">
                  <img
                    src={
                      activeNavItem === 'telephone'
                        ? '/images/contact-me-text-active.png'
                        : '/images/contact-me-text.png'
                    }
                    alt="contact me text"
                    height="40px"
                  />
                </div>
              </div>
            </Link>
          </li>
        </ul>
        <audio ref={audioRef}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </nav>
    </div>
  )
}

export default Navbar
