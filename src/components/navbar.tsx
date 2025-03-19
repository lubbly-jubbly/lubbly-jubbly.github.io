'use client'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null)
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const pathname = usePathname()

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
  }

  useEffect(() => {
    const pageName = pathname?.split('/').pop()
    console.log(pageName)
    setActiveNavItem(pageName ?? '')
  }, [pathname])

  return (
    <div>
      <div className={'d-flex justify-content-center'}>
        <Link href={'/'} onClick={() => setActiveNavItem('home')}>
          <Image
            src="/images/navbar/libby-rear-logo-3.png"
            alt="libby rear"
            width={0}
            height={0}
            className="w-auto h-44"
          />
        </Link>
      </div>
      <nav>
        <ul className="list-none flex justify-between p-0">
          <li>
            <Link href="/work">
              <div
                className={styles.navItemContainer}
                onMouseEnter={() =>
                  handleStartNavItemHover('work', briefcaseAudioUrl)
                }
                onMouseLeave={() =>
                  handleStopNavItemHover('work', briefcaseAudioUrl)
                }
                onClick={() => {
                  handleClickNavItem('work', briefcaseAudioUrl)
                }}
              >
                <div className={styles.briefcaseContainer}>
                  <Image
                    src={
                      hoveredNavItem === 'work' || activeNavItem === 'work'
                        ? '/images/navbar/briefcase-open.png'
                        : '/images/navbar/briefcase-closed.png'
                    }
                    alt="briefcase"
                    className={`${
                      hoveredNavItem === 'work' || activeNavItem === 'work'
                        ? styles.workLinkActive
                        : styles.workLink
                    } w-24 h-auto`}
                    width={0}
                    height={0}
                  />
                </div>
                <div className="mt-2">
                  <Image
                    src={
                      activeNavItem === 'work'
                        ? '/images/navbar/my-work-text-active.png'
                        : '/images/navbar/my-work-text.png'
                    }
                    alt="my work text"
                    width={0}
                    height={0}
                    className="w-auto h-10"
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
                  handleStartNavItemHover('skills', plantAudioUrl)
                }}
                onMouseLeave={() =>
                  handleStopNavItemHover('skills', plantAudioUrl)
                }
                onClick={() => handleClickNavItem('skills', plantAudioUrl)}
              >
                <div className={styles.plantContainer}>
                  <Image
                    src={
                      hoveredNavItem === 'skills' || activeNavItem === 'skills'
                        ? '/images/navbar/plant-flowered.png'
                        : '/images/navbar/plant-baby.png'
                    }
                    alt="a potted plant"
                    className={`${
                      hoveredNavItem === 'skills' || activeNavItem === 'skills'
                        ? styles.skillsLinkActive
                        : styles.skillsLink
                    } w-24 h-auto`}
                    width={0}
                    height={0}
                  />
                </div>
                <div className="mt-2">
                  <Image
                    src={
                      activeNavItem === 'skills'
                        ? '/images/navbar/skills-text-active.png'
                        : '/images/navbar/skills-text.png'
                    }
                    alt="skills text"
                    width={0}
                    height={0}
                    className="w-auto h-10"
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
                  handleStartNavItemHover('cv', paperAudioUrl)
                }}
                onMouseLeave={() => handleStopNavItemHover('cv', paperAudioUrl)}
                onClick={() => handleStopNavItemHover('cv', paperAudioUrl)}
              >
                <div className={styles.paperContainer}>
                  <Image
                    src={
                      hoveredNavItem === 'cv'
                        ? '/images/navbar/crumpled-paper.png'
                        : '/images/navbar/paper.png'
                    }
                    alt="bit of paper"
                    className={`${
                      hoveredNavItem === 'cv'
                        ? styles.cvLinkActive
                        : styles.cvLink
                    } w-24 h-auto`}
                    width={0}
                    height={0}
                  />
                </div>
                <div className="mt-2">
                  <Image
                    src={'/images/navbar/cv-text.png'}
                    alt="cv text"
                    width={0}
                    height={0}
                    className="w-auto h-8"
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
                  handleStartNavItemHover('contact', telephoneAudioUrl)
                }
                onMouseLeave={() =>
                  handleStopNavItemHover('contact', telephoneAudioUrl)
                }
                onClick={() => handleClickNavItem('contact', telephoneAudioUrl)}
              >
                <div className={styles.telephoneContainer}>
                  <Image
                    src={
                      hoveredNavItem === 'contact' ||
                      activeNavItem === 'contact'
                        ? '/images/navbar/telephone-ringing.png'
                        : '/images/navbar/telephone.png'
                    }
                    alt="a red old-fashioned telephone"
                    className={`${
                      hoveredNavItem === 'contact' ||
                      activeNavItem === 'contact'
                        ? styles.contactLinkActive
                        : styles.contactLink
                    }`}
                    width={0}
                    height={0}
                  />
                </div>
                <div className="mt-2">
                  <Image
                    src={
                      activeNavItem === 'contact'
                        ? '/images/navbar/contact-me-text-active.png'
                        : '/images/navbar/contact-me-text.png'
                    }
                    alt="contact me text"
                    width={0}
                    height={0}
                    className="w-auto h-10"
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
