"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useRef, ReactNode } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [activeNavItem, setActiveNavItem] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const paperAudioUrl = "/sounds/crumpling-paper.mp3";
  const briefcaseAudioUrl = "/sounds/briefcase-opening.mp3";
  const plantAudioUrl = "/sounds/plant-growing.mp3";
  const telephoneAudioUrl = "/sounds/telephone-ringing.mp3";

  const playAudio = (audioPath: string) => {
    if (audioRef.current !== null) {
      audioRef.current.src = audioPath;
      audioRef.current.play();
    }
  };
  const stopAudio = (audioPath: string) => {
    if (audioRef.current !== null) {
    audioRef.current.src = audioPath;
    audioRef.current.pause();
    }
  };

  const handleStartNavItemHover = (navItem: string, audioPath: string) => {
    playAudio(audioPath);
    setActiveNavItem(navItem);
  };
  const handleStopNavItemHover = (navItem: string, audioPath: string) => {
    stopAudio(audioPath);
    setActiveNavItem(null);
  };

  return (
        <nav>
          <ul className={styles.navList}>
            <li>
              <Link href="/work">
                <div
                  className={styles.navItemContainer}
                  onMouseEnter={() =>
                    handleStartNavItemHover("briefcase", briefcaseAudioUrl)
                  }
                  onMouseLeave={() =>
                    handleStopNavItemHover("briefcase", briefcaseAudioUrl)
                  }
                  onClick={() =>
                    handleStopNavItemHover("briefcase", briefcaseAudioUrl)
                  }
                >
                  <div className={styles.briefcaseContainer}>
                  <img
                    src={
                      activeNavItem === "briefcase"
                        ? "/images/briefcase-open.png"
                        : "/images/briefcase-closed.png"
                    }
                    alt='briefcase'
                    className={
                      activeNavItem === "briefcase"
                        ? styles.workLinkActive
                        : styles.workLink
                    }
                  /></div>
                  <div className={styles.navText}>My Work</div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/skills">
                <div
                  className={styles.navItemContainer}
                  onMouseEnter={() =>
                   {
                    handleStartNavItemHover("plant", plantAudioUrl)}
                  }
                  onMouseLeave={() =>
                    handleStopNavItemHover("plant", plantAudioUrl)
                  }
                  onClick={() => handleStopNavItemHover("plant", plantAudioUrl)}
                > <div className={styles.plantContainer}>
                  <img
                    src={
                      activeNavItem === "plant"
                        ? "/images/plant-flowered.png"
                        : "/images/plant-baby.png"
                    }
                    alt='a potted plant'
                    className={
                      activeNavItem === "plant"
                        ? styles.skillsLinkActive
                        : styles.skillsLink
                    }
                  /></div>
                  <div className={styles.navText}>Skills</div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/pdfs/CV.pdf" target="_blank">
                <div
                  className={styles.navItemContainer}
                  onMouseEnter={() =>
                   {
                    handleStartNavItemHover("paper", paperAudioUrl)}
                  }
                  onMouseLeave={() =>
                    handleStopNavItemHover("paper", paperAudioUrl)
                  }
                  onClick={() => handleStopNavItemHover("paper", paperAudioUrl)}
                >
                  <div className={styles.paperContainer}>
                  <img
                    src={
                      activeNavItem === "paper"
                        ? "/images/crumpled-paper.png"
                        : "/images/paper.png"
                    }
                    alt='bit of paper'
                    className={
                      activeNavItem === "paper"
                        ? styles.cvLinkActive
                        : styles.cvLink
                    }
                  /></div>
                  <div className={styles.navText}>CV</div>
                </div>
              </Link>
            </li>
            <li>
              <Link href="../contact">
                <div
                  className={styles.navItemContainer}
                  onMouseEnter={() =>
                    handleStartNavItemHover("telephone", telephoneAudioUrl)
                  }
                  onMouseLeave={() =>
                    handleStopNavItemHover("telephone", telephoneAudioUrl)
                  }
                  onClick={() =>
                    handleStopNavItemHover("telephone", telephoneAudioUrl)
                  }
                >
                  <div className={styles.telephoneContainer}>
                  <img
                    src={
                      activeNavItem === "telephone"
                        ? "/images/telephone-ringing.png"
                        : "/images/telephone.png"
                    }
                    alt='a red old-fashioned telephone'
                    className={
                      activeNavItem === "telephone"
                        ? styles.contactLinkActive
                        : styles.contactLink
                    }
                  /></div>
                  <div className={styles.navText}>Contact Me</div>
                </div>
              </Link>
            </li>
          </ul>
          <audio loop ref={audioRef}>
            Your browser does not support the
            <code>audio</code> element.
          </audio>
        </nav>
  );
};

export default Navbar;
