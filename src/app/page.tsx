import Image from 'next/image'
import styles from './homepage.module.css'

function HomePage() {
  return (
    <div>
      <div className="d-flex flex-column align-items-center">
        <div>
          Hello! I am a software developer, currently based in Glasgow,
          Scotland.
        </div>
        <div className="m-5">
          <img
            src="./images/rome-libby.jpeg"
            alt="me"
            className={styles.romeLibby}
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
