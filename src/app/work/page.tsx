'use client'
import { useEffect, useState } from 'react'
import { Project, PROJECTS } from '../../../content/projects'
import { ScrollGallery } from '../../components/scrollGallery'
import WorkItem from './workItem'
import Switch from '@/components/switch/switch'
import Navbar from '@/components/navbar'

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
      <ScrollGallery itemWidth={340} gapWidth={32}>
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
      </ScrollGallery>
      {projectDetailsComponent}
    </div>
  )
}

export default WorkPage
