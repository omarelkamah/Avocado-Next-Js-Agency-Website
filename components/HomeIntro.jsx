import Image from 'next/image'
import React from 'react'
import styles from '../styles/HomeIntro.module.css'
import Circle from './Circle'

const HomeIntro = () => {
  return (
    <div className={styles.homeIntro}>
      <Circle backgroundColor='#b0ff49' left='-50vh' top='-50vh' />
      <Circle backgroundColor='#01c686' right='-40vh' />
      <div className={styles.section}>
        <h1 className={styles.heading}>
          <span className={styles.theBrand}>avocado </span> digital product
          agency
        </h1>
        <p className={styles.description}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>discover</button>
      </div>
      <div className={styles.section}>
        <Image
          src='/img/Avocado.png'
          alt='Avocado'
          layout='fill'
          objectFit='cover'
        />
      </div>
    </div>
  )
}

export default HomeIntro
