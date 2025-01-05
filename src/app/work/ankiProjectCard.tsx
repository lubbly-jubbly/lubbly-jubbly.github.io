import SkillItem from '@/components/skillItem'
import { useState } from 'react'
import { Project, PROJECTS } from '../../../content/projects'

type AnkiProjectCardProps = {
  project: Project
  onClick?: () => void
}

function AnkiProjectCard(props: AnkiProjectCardProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const subprojectCard = (subproject: Project, i: number) => (
    <div
      key={i}
      className={`disco-item disco-item-blue-${i + 1} disco-item-shadow`}
    >
      <div className="flex flex-col justify-between w-72 px-4 py-3 bg-white">
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
                  hoveredIcon === 'github'
                    ? 'github-icon-active'
                    : 'github-icon'
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
    </div>
  )

  return (
    <div>
      <p className="relative text-3xl md:mb-5 z-20">{props.project.name}</p>

      <div className="relative z-20 mb-8">{props.project.shortDescription}</div>

      <div className="flex flex-row justify-between gap-4">
        <div className="rotate-[2deg]">
          {subprojectCard(PROJECTS.germanVocabDeck, 0)}
        </div>
        <div className="rotate-[-5deg]">
          {subprojectCard(PROJECTS.reorderWanikaniDeck, 1)}
        </div>
        <div className="rotate-[4deg]">
          {subprojectCard(PROJECTS.moekani, 2)}
        </div>
      </div>
    </div>
  )
}

export default AnkiProjectCard
