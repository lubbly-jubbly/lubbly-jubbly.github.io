import SkillList from '@/components/skillList'
import { Project } from '../../../content/projects'

type WorkItemProps = {
  project: Project
  onClick?: () => void
}

function WorkItem(props: WorkItemProps) {
  const { name, technologies, shortDescription, projectType, url, logo, date } =
    props.project

  return (
    <section
      key={name}
      className="relative h-[300px] w-[320px] min-w-[320px] snap-start rounded-xl bg-clip-padding p-4 transition-[min-width,width,margin-left,opacity] duration-300 spacing-0 d:border-white/20 bg-[#f7fafa]"
    >
      <div
        onClick={props.onClick ? props.onClick : () => {}}
        className="flex flex-col justify-between h-100"
      >
        <div className="flex flex-col gap-y-3">
          <div className="flex flex-row items-center gap-x-4">
            <div className="w-11">{logo}</div>
            {name}
          </div>
          <div>
            <SkillList technologies={technologies} />
          </div>
          <div className="text-sm">{shortDescription}</div>
        </div>
        <div className="flex flex-row justify-between text-sm">
          <div>{projectType}</div>
          <div>{date}</div>
        </div>
      </div>
    </section>
  )
}

export default WorkItem
