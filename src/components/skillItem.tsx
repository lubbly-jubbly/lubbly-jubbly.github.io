import { Technology } from '../../content/technologies'

type SkillItemProps = {
  tech: Technology
  displayName?: boolean
  small?: boolean
}

function SkillItem(props: SkillItemProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      <div
        className={`${
          props.small ? 'text-l w-4 h-4' : 'text-2xl w-7 h-7'
        } flex flex-col justify-center`}
      >
        {props.tech.icon}
      </div>
      {props.displayName ? (
        <div className="text-xs">{props.tech.name}</div>
      ) : null}
    </div>
  )
}

export default SkillItem
