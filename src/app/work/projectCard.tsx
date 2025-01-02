import SkillList from '@/components/skillList'
import { Project } from '../../../content/projects'
import Link from 'next/link'
import { useState } from 'react'
import './projectCard.css'
import { TECHNOLOGIES } from '../../../content/technologies'
import SkillItem from '@/components/skillItem'

type ProjectCardProps = {
  project: Project
  onClick?: () => void
}

function ProjectCard(props: ProjectCardProps) {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null)

  const {
    name,
    technologies,
    shortDescription,
    projectType,
    url,
    logo,
    date,
    githubUrl,
    image,
  } = props.project

  let i = 1
  return (
    // <div className="block">
    //   <div className="relative overflow-hidden">
    //     <div className="w-4/5 shadow-md absolute">
    //       <img src="images/gce-screenshot-1.png" alt="" />
    //     </div>
    //     <div className="w-80 bg-white p-4 rounded-md absolute right-0 top-20">
    //       <div className="flex flex-row items-center gap-x-4">
    //         <div className="w-11">{logo}</div>
    //         {name}
    //       </div>
    //       <SkillList technologies={technologies} />
    //       <div className="text-sm">{shortDescription}</div>
    //       <div className="flex flex-row justify-between text-sm">
    //         <div>{projectType}</div>
    //         <div>{date}</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div key={i} className="project-card">
      <div className="project-content">
        <div>
          <h3 className="project-title">
            <a href={''}>{name}</a>
          </h3>

          <div className="project-description">{shortDescription}</div>

          {technologies.length && (
            <ul className="project-tech-list gap-4">
              {technologies.map((tech, i) => (
                <SkillItem tech={tech} displayName small key={i} />
              ))}
            </ul>
          )}

          <div className="project-links">
            {githubUrl ? (
              <a
                href={'https://github.com/lubbly-jubbly'}
                aria-label="GitHub Link"
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

      <div className="project-image">
        <a href={'#'}>
          {/* <img src="images/gce-screenshot-1.png" alt="" className="img" /> */}
          {image}
          {/* <div className="flex flex-row gap-2">
            <img
              className="w-1/3"
              src="images/switchScreenshots/add-shift.png"
              alt=""
            />
            <img
              className="w-1/3"
              src="images/switchScreenshots/add-shift.png"
              alt=""
            />
            <img
              className="w-1/3"
              src="images/switchScreenshots/add-shift.png"
              alt=""
            />
          </div> */}
        </a>
      </div>
    </div>
  )
}

export default ProjectCard
