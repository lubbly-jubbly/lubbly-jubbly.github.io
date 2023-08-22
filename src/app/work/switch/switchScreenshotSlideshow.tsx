'use client'
import SkillItem from '@/app/components/skillItem'
import Link from 'next/link'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styles from './switchScreenshotSlideshow.module.css'

function SwitchScreenshotSlideshow() {
  const imagesBaseUrl = '/images/switchScreenshots/'
  const images: {
    url: string
    caption: string
  }[][] = [
    [
      { url: 'login-1.png', caption: 'Login' },
      { url: 'reset-password.png', caption: 'Reset password' },
    ],
    [
      { url: 'signup-2.png', caption: 'Signup' },
      { url: 'signup-1.png', caption: 'Signup (scrolled down)' },
    ],
    [
      { url: 'create-team.png', caption: 'Employers can create a new team' },
      {
        url: 'enter-join-code.png',
        caption: 'Employees can enter a join code for their team',
      },
    ],
    [
      {
        url: 'request-time-off.png',
        caption: 'Employees can request time off',
      },
      {
        url: 'time-pickers-disappear.png',
        caption: `Time pickers disappear when 'All-day' toggle enabled`,
      },
      {
        url: 'regular-time-off.png',
        caption: 'Users can make a request for regular time off',
      },
      {
        url: 'select-time-off.png',
        caption: 'Admins can select time off, without requiring approval',
      },
    ],
    [
      {
        url: 'view-requests.png',
        caption:
          'Employers can view pending, accepted and rejected time-off requests in the requests tab.',
      },
      {
        url: 'request-modal.png',
        caption: 'Employers can accept or reject time-off requests',
      },
      {
        url: 'employee-view-requests.png',
        caption: 'Employees can view the status of their own time-off requests',
      },
    ],
    [
      {
        url: 'view-team.png',
        caption: 'Edit team.',
      },
      {
        url: 'edit-weekly-hours.png',
        caption: `Edit an employee's weekly hours.`,
      },
      {
        url: 'remove-employee.png',
        caption: 'Remove an employee from the team.',
      },
    ],
    [
      {
        url: 'staff-requirements.png',
        caption:
          'Employers can choose the staff requirements for their workplace.',
      },
      {
        url: 'add-shift.png',
        caption: 'Add a shift.',
      },
      {
        url: 'delete-shift.png',
        caption: 'Delete a shift.',
      },
    ],
  ]

  const imageWithCaption = (url: string, caption: string) => (
    <div>
      <img
        src={imagesBaseUrl + url}
        alt="a screenshot of Switch"
        height="300px"
      />
      <p>{caption}</p>
    </div>
  )

  return (
    <Slide>
      {images.map((slideImages, slideIndex) => (
        <div key={slideIndex} className={styles.slide}>
          {slideImages.map((image, index) =>
            imageWithCaption(image.url, image.caption)
          )}
        </div>
      ))}
      {/* <div className="each-slide-effect">
        <img src={imagesBaseUrl + imageUrls[0]} alt="a screenshot of Switch" />
        <div
          style={{ backgroundImage: `url(${imagesBaseUrl + imageUrls[0]})` }}
        >
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{ backgroundImage: `url(${imagesBaseUrl + imageUrls[1]})` }}
        >
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div
          style={{ backgroundImage: `url(${imagesBaseUrl + imageUrls[2]}})` }}
        >
          <span>Slide 3</span>
        </div>
      </div> */}
    </Slide>
  )
}

export default SwitchScreenshotSlideshow
