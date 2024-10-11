import SkillItem from '@/components/skillItem'
import React from 'react'
import styles from './vor.module.css'
import SkillList from '@/components/skillList'

function VorPage() {
  const technologies = [
    'C#',
    'React',
    'TypeScript',
    'Bootstrap',
    'Redux',
    'Redis',
    'SQL',
    'Cosmos DB',
  ]

  return (
    <div>
      <div className={styles.vorTitleContainer}>
        <h1 className={styles.vorTitle}>VOR</h1>
        <div>
          Full stack developer
          <span className="dateText">Nov 2022 - Present</span>
        </div>
      </div>
      <div className="my-3">
        <SkillList items={technologies} />
      </div>
      <p>
        My current work is for an operations management and emissions reduction
        platform for the oil and gas industry.
      </p>
      <h3>Front-end development</h3>
      <p>
        Front-end work is in React with TypeScript, with the use of Bootstrap
        and Redux.
      </p>
    </div>
  )
}

export default VorPage
