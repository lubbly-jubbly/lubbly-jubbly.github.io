import SkillList from './skillList'
import { skills } from './skills'
import styles from './skills.module.css'

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
