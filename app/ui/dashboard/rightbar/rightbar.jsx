import React from 'react'
import styles from './rightbar.module.css'
import Image from 'next/image'
import { MdPlayCircleFilled, MdReadMore } from 'react-icons/md'

const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image 
          className={styles.bg}
            src='/student-notification.jpg'
            alt='student notification'
            fill
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.notification}>🔥 Available Now</div>
          <h3 className={styles.title}>How to use the new version of the admin dashboard</h3>
          <span className={styles.subtitle}>Takes 4 minutes to learn</span>
          <p>Empowering children through scholarships and food security</p>
          <button className={styles.button}>
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.title}>
            New server actions available, partial pre-rendering is coming up!
          </h3>
          <span className={styles.subtitle}>Boost Your Productivity!</span>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl ac
            tincidunt tincidunt, nunc nunc ultrices nunc, nec aliquam nunc nunc in mauris.
            Nulla facilisi. Sed euismod, nisl ac tincidunt tincidunt, nunc nunc ultrices
            nunc, nec aliquam nunc nunc in mauris. Nulla facilisi.
          </p>
          <button className={styles.button}>
           <MdReadMore />
           Learn
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightBar
