import React from 'react'
import Circle from './Circle'
import styles from '../styles/Testimonials.module.css'
import Image from 'next/image'

const Testimonials = ({ users }) => {
  return (
    <div className={styles.testimonials}>
      <Circle top='-70vh' left='0' right='0' backgroundColor='darkblue' />
      <h3 className={styles.testiHeading}>Testimonials</h3>

      <div className={styles.usersContainer}>
        {users.map(user => (
          <div className={styles.testiUser} key={user.id}>
            <div className={styles.imgContainer}>
              <Image
                width='30'
                height='30'
                src={`/img/${user.logo}`}
                alt={user.name}
              />
            </div>
            <p className={styles.userComment}>{user.comment}</p>
            <div className={styles.userInfo}>
              <div className={styles.imgContainer}>
                <Image
                  width='45'
                  height='45'
                  objectFit='cover'
                  src={`/img/${user.avatar}`}
                  style={{ borderRadius: '50%' }}
                  alt={user.name}
                />
              </div>

              <div className={styles.userDetails}>
                <span>{user.name}</span>
                <span>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
