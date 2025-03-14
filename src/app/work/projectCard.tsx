import SkillItem from '@/components/skillItem'
import { useState } from 'react'
import { Project } from '../../../content/projects'
import { Fade } from 'react-slideshow-image'
import ProjectSlideshow from './projectSlideshow'
import GithubButton from '@/components/githubButton'
import Link from 'next/link'

type ProjectCardProps = {
  project: Project
  alignment: 'right' | 'left'
  onClick?: () => void
  openModal?: (videoId: string) => void
}

function ProjectCard(props: ProjectCardProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)
  const rightAligned = props.alignment === 'right'
  const leftAligned = props.alignment === 'left'

  const {
    name,
    technologies,
    shortDescription,
    projectType,
    url,
    logo,
    date,
    githubUrl,
    imageUrls,
    videoId,
    liveUrl,
  } = props.project

  let i = 1
  return (
    <div key={i} className="relative grid grid-cols-12 items-center mb-24">
      <div
        className={
          'self-end row-start-1 row-span-1 col-span-6 max-md:flex max-md:flex-col max-md:justify-center max-md:h-full max-md:col-span-full relative ' +
          (leftAligned ? 'md:col-start-1 md:col-span-6 ' : '') +
          (rightAligned
            ? 'md:text-right md:col-start-5 md:col-span-full lg:col-start-7'
            : '')
        }
      >
        <div>
          <div
            className={
              'flex flex-row gap-2 items-center relative md:mb-3 z-20 ' +
              (rightAligned && 'md:justify-end')
            }
          >
            <p className="md:text-right text-3xl">{name}</p>

            {githubUrl && <GithubButton githubUrl={githubUrl} size={10} />}

            {videoId && (
              <div
                onClick={() =>
                  props.openModal ? props.openModal(videoId) : null
                }
                onMouseEnter={() => setHoveredIcon('play')}
                onMouseLeave={() => setHoveredIcon(null)}
                className="cursor-pointer"
              >
                <img
                  src={`/images/${
                    hoveredIcon === 'play' ? 'play-icon-active' : 'play-icon'
                  }.png`}
                  alt="play video icon"
                  className={'w-10'}
                />
              </div>
            )}
          </div>
          <div className="relative z-20 p-6 md:bg-[white] shadow-md rounded-xl">
            {shortDescription}
          </div>
        </div>
      </div>
      <div
        className={
          'self-start row-start-2 row-span-1 col-span-5 max-md:flex max-md:flex-col max-md:justify-center max-md:h-full max-md:col-span-full relative md:mt-4 ' +
          (leftAligned ? 'md:col-start-1 md:col-span-6 ' : '') +
          (rightAligned
            ? 'md:text-right md:col-start-8 md:col-span-full lg:col-start-8'
            : '')
        }
      >
        <div>
          {technologies.length && (
            <ul
              className={
                'flex flex-wrap relative z-20 mb-2 gap-4 ' +
                (rightAligned && 'md:justify-end')
              }
            >
              {technologies.map((tech, i) => (
                <SkillItem tech={tech} displayName small key={i} />
              ))}
            </ul>
          )}
        </div>
      </div>
      <div
        className={
          'max-md:col-span-full max-md:h-full max-md:opacity-25 relative row-start-1 row-span-2 z-0 ' +
          (leftAligned ? 'col-start-6 col-span-full ' : '') +
          (rightAligned ? 'col-start-1 col-span-7' : '')
        }
      >
        {liveUrl ? (
          <Link href={liveUrl} target="_blank">
            <ProjectSlideshow imageUrls={imageUrls} projectName={name} />
          </Link>
        ) : (
          <ProjectSlideshow imageUrls={imageUrls} projectName={name} />
        )}
      </div>
    </div>
  )
}

export default ProjectCard
