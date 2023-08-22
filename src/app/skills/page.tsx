import SkillItem from '../components/skillItem'
import SkillList from './skillList'
import styles from './skills.module.css'

function SkillsPage() {
  const languages = [
    'C#',
    'Python',
    'Java',
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'MATLAB',
  ]
  const librariesAndFrameworks = [
    'React',
    'React Native',
    'Redux',
    'Bootstrap',
    'Next.js',
  ]
  const data = ['SQL', 'Cosmos DB', 'Firebase DBs', 'Redis']
  const other = [
    'Git',
    'Latex',
    'Figma',
    'Android Studio',
    'Docker',
    'Node.js',
    'Linux',
  ]

  return (
    <div>
      <div className={styles.skillListsContainer}>
        <SkillList category="LANGUAGES" items={languages} />
        <SkillList
          category="LIBRARIES AND FRAMEWORKS"
          items={librariesAndFrameworks}
        />
        <SkillList category="DATA" items={data} />
        <SkillList category="OTHER" items={other} />
      </div>
    </div>
  )
}

export default SkillsPage
