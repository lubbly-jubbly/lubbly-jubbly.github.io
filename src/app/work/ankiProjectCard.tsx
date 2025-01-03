import SkillItem from '@/components/skillItem'
import { useState } from 'react'
import { Project, PROJECTS } from '../../../content/projects'

type AnkiProjectCardProps = {
  project: Project
  onClick?: () => void
}

function AnkiProjectCard(props: AnkiProjectCardProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const subprojectCard = (subproject: Project) => (
    <div className="flex flex-col justify-between bg-[#f2faf3] w-72 px-4 py-3">
      <div>
        <p className="text-xl mb-2">{subproject.name}</p>

        <div className="mb-2">{subproject.shortDescription}</div>
      </div>

      <div className="flex flex-row justify-between items-center">
        {subproject.technologies.length && (
          <ul className={'flex flex-wrap gap-4'}>
            {subproject.technologies.map((tech, i) => (
              <SkillItem tech={tech} displayName small key={i} />
            ))}
          </ul>
        )}

        {subproject.githubUrl ? (
          <a
            href={subproject.githubUrl}
            aria-label="GitHub Link"
            className="w-8"
            target="_blank"
          >
            <img
              src={`/images/${
                hoveredIcon === 'github' ? 'github-icon-active' : 'github-icon'
              }.png`}
              alt="github logo"
              className={'w-10'}
            />
          </a>
        ) : (
          ''
        )}
      </div>
    </div>
  )

  return (
    <div>
      <p className="relative text-3xl md:mb-5 z-20">{props.project.name}</p>

      <div className="relative z-20 p-6 mb-4 bg-[#f2faf3]">
        {props.project.shortDescription}
      </div>

      <div className="flex flex-row justify-between gap-4">
        {subprojectCard(PROJECTS.germanVocabDeck)}
        {subprojectCard(PROJECTS.reorderWanikaniDeck)}
        {subprojectCard(PROJECTS.moekani)}
      </div>
    </div>
  )
}

export default AnkiProjectCard
