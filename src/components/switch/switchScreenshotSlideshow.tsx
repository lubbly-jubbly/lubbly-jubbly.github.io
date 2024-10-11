'use client'
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import styles from './switchScreenshotSlideshow.module.css'

function SwitchScreenshotSlideshow() {
  const imagesBaseUrl = '/images/switchScreenshots/'
  const images: {
    url: string
    caption: JSX.Element
  }[][] = [
    [
      { url: 'login-1.png', caption: <span>Login</span> },
      { url: 'reset-password.png', caption: <span>Reset password</span> },
    ],
    [
      { url: 'signup-2.png', caption: <span>Signup</span> },
      { url: 'signup-1.png', caption: <span>Signup (scrolled down)</span> },
    ],
    [
      {
        url: 'create-team.png',
        caption: (
          <span>
            <span className={styles.employerText}>Employers</span> can create a
            new team
          </span>
        ),
      },
      {
        url: 'enter-join-code.png',
        caption: (
          <span>
            <span className={styles.employeeText}>Employees</span> can enter a
            join code for their team
          </span>
        ),
      },
    ],
    [
      {
        url: 'request-time-off.png',
        caption: (
          <span>
            <span className={styles.employeeText}>Employees</span> can request
            time off
          </span>
        ),
      },
      {
        url: 'time-pickers-disappear.png',
        caption: (
          <span>Time pickers disappear when 'all-day' toggle enabled</span>
        ),
      },
      {
        url: 'regular-time-off.png',
        caption: (
          <span>
            <span className={styles.employeeText}>Employees</span> can make a
            request for regular time off
          </span>
        ),
      },
      {
        url: 'select-time-off.png',
        caption: (
          <span>
            <span className={styles.employerText}>Employers</span> can select
            time off, without requiring approval
          </span>
        ),
      },
    ],
    [
      {
        url: 'view-requests.png',
        caption: (
          <span>
            <span className={styles.employerText}>Employers</span> can view
            pending, accepted and rejected time-off requests in the requests
            tab.
          </span>
        ),
      },
      {
        url: 'request-modal.png',
        caption: (
          <span>
            <span className={styles.employerText}>Employers</span> can accept or
            reject time-off requests
          </span>
        ),
      },
      {
        url: 'employee-view-requests.png',
        caption: (
          <span>
            <span className={styles.employeeText}>Employees</span> can view the
            status of their own time-off requests
          </span>
        ),
      },
    ],
    [
      {
        url: 'view-team.png',
        caption: (
          <span>
            <span className={styles.employerText}>Employers</span> can edit
            their team.
          </span>
        ),
      },
      {
        url: 'edit-weekly-hours.png',
        caption: (
          <span>
            Edit an <span className={styles.employeeText}>employee's</span>{' '}
            weekly hours.
          </span>
        ),
      },
      {
        url: 'remove-employee.png',
        caption: (
          <span>
            Remove an <span className={styles.employeeText}>employee</span> from
            the team
          </span>
        ),
      },
    ],
    [
      {
        url: 'staff-requirements.png',
        caption: (
          <span>
            <span className={styles.employerText}>Employers</span> can choose
            the staff requirements for their workplace
          </span>
        ),
      },
      {
        url: 'add-shift.png',
        caption: <span>Add a shift</span>,
      },
      {
        url: 'delete-shift.png',
        caption: <span>Delete a shift</span>,
      },
    ],
    [
      {
        url: 'rota-tab-admin.png',
        caption: (
          <span>
            <span className={styles.employerText}>Employer</span> rota tab
          </span>
        ),
      },
      {
        url: 'create-rota.png',
        caption: (
          <span>
            <span className={styles.employerText}>Employers</span> can create a
            rota
          </span>
        ),
      },
    ],
    [
      {
        url: 'home-tab.png',
        caption: <span>Users can view upcoming shifts in the home tab</span>,
      },
      {
        url: 'day-details.png',
        caption: <span>Shift and absence details</span>,
      },
    ],
  ]

  const imageWithCaption = (url: string, caption: JSX.Element) => (
    <div className={styles.imageWithCaption}>
      <div className={styles.imageContainer}>
        <img
          src={imagesBaseUrl + url}
          alt="a screenshot of Switch"
          width={'100%'}
        />
      </div>
      <p className={styles.caption}>{caption}</p>
    </div>
  )

  return (
    <div className={styles.slideshow}>
      <Slide>
        {images.map((slideImages, slideIndex) => (
          <div key={slideIndex} className={styles.slide}>
            {slideImages.map((image, index) =>
              imageWithCaption(image.url, image.caption)
            )}
          </div>
        ))}
      </Slide>
    </div>
  )
}

export default SwitchScreenshotSlideshow
