import { skills } from '../skills/skills'
import styles from './skillItem.module.css'

type SkillItemProps = {
  text: string
}

function SkillItem(props: SkillItemProps) {
  const getSkillTypeClassName = (skill: string) => {
    if (skills.languages.includes(skill)) {
      return styles.languages
    } else if (skills.librariesAndFrameworks.includes(skill)) {
      return styles.librariesAndFrameworks
    } else if (
      skills.data.includes(skill) ||
      skills.nonVisibleData.includes(skill)
    ) {
      return styles.data
    } else if (
      skills.other.includes(skill) ||
      skills.nonVisibleOther.includes(skill)
    ) {
      return styles.other
    } else {
      return ''
    }
  }

  return (
    <span
      className={`${styles.skillItem} ${getSkillTypeClassName(props.text)}`}
    >
      {props.text}
    </span>
  )
}

export default SkillItem
