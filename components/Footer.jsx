import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.cardLarge}>
          <h3 className={styles.footerTitle}>avocado creatives</h3>
          <Link href='/'>
            <div className={styles.footerLink}>
              work with us
              <Image
                src='/img/link.png'
                width='40px'
                height='40px'
                alt='Link Img'
              />
            </div>
          </Link>
        </div>
        <div className={styles.cardSmall}>
          <div className={styles.cardItem}>
            Alexandria, El-mandara <br />
            Egypt
          </div>
        </div>
        <div className={styles.cardSmall}>
          <div className={styles.cardItem}>
            omarwork010@gmail.com <br />
            010 160 462 98
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
