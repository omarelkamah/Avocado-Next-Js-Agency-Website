import Link from 'next/link'
import React, { useState } from 'react'
import styles from '../styles/Navbar.module.css'
import Menue from './Menue'

const Navbar = () => {
  const [openMenue, setOpenMenue] = useState(false)

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Link href='/'>AGENCY</Link>
      </div>
      <ul>
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
      <div className={styles.icon} onClick={() => setOpenMenue(!openMenue)}>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
        <span className={styles.line}></span>
      </div>
      <Menue openMenue={openMenue} setOpenMenue={setOpenMenue} />
    </div>
  )
}

export default Navbar
