import Link from 'next/link'
import styles from './links.module.css'

function Links() {
  return (
    <div className={styles.linksContainer}>
      <img src="/images/my-links-text.png" alt="my links text" width="120px" />
      <div className={styles.linksListContainer}>
        <Link href="mailto:libby.rear@gmail.com" className={styles.contactLink}>
          <div className={styles.iconContainer}>
            <img src={'/images/envelope-icon.png'} alt="an envelope" />
          </div>
          <div>libby.rear@gmail.com</div>
        </Link>
        <div className={styles.contactLink}>
          <div className={styles.iconContainer}>
            <img
              src={'/images/phone-icon.png'}
              alt="a red old-fashioned telephone"
            />
          </div>
          <div>+44 7402 219371</div>
        </div>
        <Link
          href="https://github.com/lubbly-jubbly"
          target="_blank"
          className={styles.contactLink}
        >
          <div className={styles.iconContainer}>
            <img src={'/images/github-icon.png'} alt="github logo" />
          </div>
          <div>lubbly-jubbly</div>
        </Link>
        <Link
          href="https://www.linkedin.com/in/libby-rear-623929207/"
          target="_blank"
          className={styles.contactLink}
        >
          <div className={styles.iconContainer}>
            <img src={'/images/linkedin-icon.png'} alt="the linkedin logo" />
          </div>
          <div>Libby Rear</div>
        </Link>
      </div>
    </div>
  )
}

export default Links
