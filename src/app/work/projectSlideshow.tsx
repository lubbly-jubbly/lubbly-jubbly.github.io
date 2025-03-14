import React from 'react'
import { Fade } from 'react-slideshow-image'
import fs from 'fs'
import path from 'path'
import { PROJECTS } from '../../../content/projects'
import '../../components/discoOutline.css'

type ProjectSlideshowProps = {
  imageUrls: string[]
  projectName: string
}

export default function ProjectSlideshow(props: ProjectSlideshowProps) {
  const properties = {
    prevArrow: <></>,
    nextArrow: <></>,
  }

  //   Since showing 3 images at a time, ensures that 3 images always displayed
  const threeTimesImageUrls = props.imageUrls
    .concat(props.imageUrls)
    .concat(props.imageUrls)

  const groupedUrls = []
  for (let i = 0; i < threeTimesImageUrls.length; i += 3) {
    groupedUrls.push(threeTimesImageUrls.slice(i, i + 3))
  }

  return (
    <Fade {...properties}>
      {props.projectName === PROJECTS.switch.name
        ? groupedUrls.map((group, index) => (
            <div key={index} className="flex flex-row gap-4">
              {group.map((url, i) => (
                <div
                  key={i}
                  className="flex flex-row justify-center items-center w-1/3 p-3"
                >
                  <div className={`disco-item disco-item-orange-${i + 1}`}>
                    <img key={i} src={url} alt={`Screenshot ${i}`} />
                  </div>
                </div>
              ))}
            </div>
          ))
        : props.imageUrls.map((url, index) => (
            <div
              key={index}
              className="flex flex-row justify-center items-center p-3"
            >
              <div
                className={
                  props.projectName === PROJECTS.pubble.name
                    ? 'disco-item disco-item-pubble'
                    : 'disco-item'
                }
                key={index}
              >
                <img src={url} alt="" className="h-full" />
              </div>
            </div>
          ))}
    </Fade>
  )
}
