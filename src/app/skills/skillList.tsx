import SkillItem from '../components/skillItem'
import styles from './skills.module.css'

type SkillListProps = {
  category: string
  items: string[]
}
function SkillList(props: SkillListProps) {
  return (
    <div className={styles.skillList}>
      <div className={styles.category}>{props.category + ' >'}</div>
      <div className={styles.skillItemsContainer}>
        {props.items.map((language, index) => (
          <SkillItem text={language} key={index} />
        ))}
      </div>
    </div>
  )
}

export default SkillList
