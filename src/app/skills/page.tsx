import SkillList from './skillList'
import styles from './skills.module.css'

export const skills = {
  languages: [
    'C#',
    'Python',
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'MATLAB',
  ],
  librariesAndFrameworks: [
    'React',
    'React Native',
    'Redux',
    'Bootstrap',
    'Next.js',
  ],
  data: ['SQL', 'Cosmos DB', 'Firebase DBs', 'Redis'],
  nonVisibleData: ['Firebase Realtime DB'],
  other: [
    'Git',
    'Latex',
    'Figma',
    'Android Studio',
    'Docker',
    'Node.js',
    'Linux',
  ],
  nonVisibleOther: ['Firebase Auth', 'Jest'],
}

function SkillsPage() {
  return (
    <div>
      <div className={styles.skillListsContainer}>
        <SkillList category="LANGUAGES" items={skills.languages} />
        <SkillList
          category="LIBRARIES AND FRAMEWORKS"
          items={skills.librariesAndFrameworks}
        />
        <SkillList category="DATA" items={skills.data} />
        <SkillList category="OTHER" items={skills.other} />
      </div>
    </div>
  )
}

export default SkillsPage
