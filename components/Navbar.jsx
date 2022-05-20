import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
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
          <Link href='/products/contact'>contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
