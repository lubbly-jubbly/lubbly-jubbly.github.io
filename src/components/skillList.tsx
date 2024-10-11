import { Technology } from '../../content/technologies'
import SkillItem from './skillItem'

type SkillListProps = {
  technologies: Technology[]
}
function SkillList(props: SkillListProps) {
  return (
    <div className="flex flew-row gap-x-4 gap-y-2 flex-wrap">
      {props.technologies.map((tech, index) => (
        <>
          <SkillItem tech={tech} key={index} small displayName />
        </>
      ))}
    </div>
  )
}

export default SkillList
