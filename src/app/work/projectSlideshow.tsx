import React from 'react'
import { Fade } from 'react-slideshow-image'
import fs from 'fs'
import path from 'path'
import { PROJECTS } from '../../../content/projects'

type ProjectSlideshowProps = {
  imageUrls: string[]
  projectName: string
}

export default function ProjectSlideshow(props: ProjectSlideshowProps) {
  const properties = {
    prevArrow: <></>,
    nextArrow: <></>,
  }

  const chunkSize = 3
  const groupedUrls = []
  for (let i = 0; i < props.imageUrls.length; i += chunkSize) {
    groupedUrls.push(props.imageUrls.slice(i, i + chunkSize))
  }

  return (
    <Fade {...properties}>
      {props.projectName === PROJECTS.switch.name
        ? groupedUrls.map((group, index) => (
            <div key={index} className="flex flex-row gap-4 mb-4">
              {group.map((url, idx) => (
                <img
                  key={idx}
                  className="w-1/3"
                  src={url}
                  alt={`Screenshot ${idx}`}
                />
              ))}
            </div>
          ))
        : props.imageUrls.map((url, index) => (
            <div key={index}>
              <img style={{ width: '100%' }} src={url} alt="" />
            </div>
          ))}
    </Fade>
  )
}
