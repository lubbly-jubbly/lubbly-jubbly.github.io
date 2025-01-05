'use client'
import Navbar from '@/components/navbar'
import Switch from '@/components/switch/switch'
import { useEffect, useState } from 'react'
import ModalVideo from 'react-modal-video'
import { Project, PROJECTS } from '../../../content/projects'
import AnkiProjectCard from './ankiProjectCard'
import ProjectCard from './projectCard'

function WorkPage() {
  const [activeProject, setActiveProject] = useState<Project | null>(null)
  const [projectDetailsComponent, setProjectDetailsComponent] =
    useState<JSX.Element | null>(null)
  const [modal, setModal] = useState<boolean>(false)
  const [modalVideoId, setModalVideoId] = useState<string>('')

  const handleClick = (videoId: string) => {
    setModalVideoId(videoId)
    setModal(!modal) // Invoke the callback with data
  }

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
      <ModalVideo
        channel="youtube"
        isOpen={modal}
        videoId={modalVideoId}
        onClose={() => setModal(!modal)}
      />
      <ProjectCard project={PROJECTS.gce} alignment={'right'} />
      <ProjectCard
        project={PROJECTS.switch}
        alignment={'left'}
        openModal={handleClick}
      />
      <AnkiProjectCard project={PROJECTS.anki} />
    </div>
  )
}

export default WorkPage
