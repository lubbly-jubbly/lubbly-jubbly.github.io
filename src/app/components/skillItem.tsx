import styles from './skillItem.module.css'

type SkillItemProps = {
  text: string
}

function SkillItem(props: SkillItemProps) {
  return <span className={styles.skillItem}>{props.text}</span>
}

export default SkillItem
