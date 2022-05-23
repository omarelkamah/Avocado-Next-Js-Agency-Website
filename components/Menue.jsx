import React from 'react'
import Link from 'next/link'
import styles from '../styles/Menue.module.css'

const Menue = ({ openMenue, setOpenMenue }) => {
  return (
    <ul
      className={styles.menue}
      style={{ right: openMenue === true ? '0' : '-50vw' }}
      onClick={() => setOpenMenue(!openMenue)}
    >
      <li className={styles.listItem}>
        <Link href='/products/design'>design</Link>
      </li>
      <li className={styles.listItem}>
        <Link href='/products/development'>development</Link>
      </li>
      <li className={styles.listItem}>
        <Link href='/products/production'>production</Link>
      </li>
      <li className={styles.listItem}>
        <Link href='/products/photography'>photography</Link>
      </li>
      <li className={styles.listItem}>
        <Link href='/contact'>contact</Link>
      </li>
    </ul>
  )
}

export default Menue
