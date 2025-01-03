'use client'
import Navbar from '@/components/navbar'
import Switch from '@/components/switch/switch'
import { useEffect, useState } from 'react'
import { Project, PROJECTS } from '../../../content/projects'
import { ScrollGallery } from '../../components/scrollGallery'
import WorkItem from './workItem'
import SineWave from '@/components/sineWave'
import ProjectCard from './projectCard'
import { Fade } from 'react-slideshow-image'
import AnkiProjectCard from './ankiProjectCard'

function WorkPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [projectDetailsComponent, setProjectDetailsComponent] =
    useState<JSX.Element | null>(null)

  useEffect(() => {
    switch (activeProject) {
      case PROJECTS.switch:
        setProjectDetailsComponent(<Switch />)
        break
      case PROJECTS.vor:
        setProjectDetailsComponent(<Navbar />)
        break
      default:
        setProjectDetailsComponent(null)
    }
  }, [activeProject])

  return (
    <div>
      {/* <ScrollGallery itemWidth={340} gapWidth={32}>
        <WorkItem
          project={PROJECTS.switch}
          onClick={() => setActiveProject(PROJECTS.switch)}
        />
        <WorkItem
          project={PROJECTS.gce}
          onClick={() => setActiveProject(PROJECTS.vor)}
        />
        <WorkItem project={PROJECTS.pubble} />
        <WorkItem project={PROJECTS.vor} />
      </ScrollGallery> */}
      <ProjectCard project={PROJECTS.gce} alignment={'right'} />
      <ProjectCard project={PROJECTS.switch} alignment={'left'} />
      <AnkiProjectCard project={PROJECTS.anki} />
      <div>ANKI</div>
      <div>Various</div>
      {/* {projectDetailsComponent} */}
    </div>
  )
}

export default WorkPage
