import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from '../styles/Services.module.css'

const Services = ({ services }) => {
  return (
    <div className={styles.services}>
      <h2 className={styles.heading}>What We Can Do?</h2>
      <p className={styles.description}>Services We Can Help You With</p>
      <div className={styles.servicesContainer}>
        {services.map(service => (
          <Link key={service.id} href={`/products/${service.name}`}>
            <div className={styles.service}>
              <span className={styles.serviceName}>{service.name}</span>
              <p className={styles.serviceDesc}>{service.desc}</p>
              {service.video ? (
                // <video />
                <div className={styles.media}>
                  <video
                    objectFit='cover'
                    layout='fill'
                    autoPlay
                    loop
                    src={`/img/${service.video}`}
                    alt={service.name}
                  />
                </div>
              ) : (
                <div className={styles.media}>
                  <Image
                    width='100%'
                    height='100%'
                    layout='responsive'
                    objectFit='cover'
                    src={`/img/${service.photo}`}
                    alt={service.name}
                  />
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Services
