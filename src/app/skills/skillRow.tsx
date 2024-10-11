import {
  getTechnologiesInCategory,
  TechCategory,
} from '../../../content/technologies'
import SkillItem from '../../components/skillItem'
import styles from './skills.module.css'

type SkillRowProps = {
  category: TechCategory
}

function SkillRow(props: SkillRowProps) {
  const technologies = getTechnologiesInCategory(props.category)

  return (
    <div className={styles.skillRow}>
      <div className={styles.category}>{props.category + ' >'}</div>
      <div className="skillItemsContainer ms-3">
        {technologies.map((tech, index) => (
          <>
            <SkillItem tech={tech} key={index} />
            {index !== technologies.length - 1 && <div>·</div>}
          </>
        ))}
      </div>
    </div>
  )
}

export default SkillRow
