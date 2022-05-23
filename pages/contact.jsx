import Head from 'next/head'
import React from 'react'
import styles from '../styles/Contact.module.css'
import Circle from '../components/Circle'
const contact = () => {
  const inputs = [
    {
      id: 1,
      type: 'text',
      required: true,
      placeholder: 'Username',
      style: {
        outline: 'none',
        flex: 1,
        marginRight: '20px'
      }
    },
    {
      id: 2,
      type: 'text',
      required: true,
      placeholder: 'Phone',
      style: {
        outline: 'none',
        flex: 1
      }
    },
    {
      id: 3,
      type: 'email',
      required: true,
      placeholder: 'Email Address',
      style: {
        outline: 'none',
        width: '100%'
      }
    },
    {
      id: 4,
      type: 'text',
      required: true,
      placeholder: 'Subject',
      style: {
        outline: 'none',
        width: '100%'
      }
    }
  ]
  return (
    <div className={styles.contact}>
      <Head>
        <title>Contact || Avocado</title>
      </Head>
      <div className={styles.container}>
        <Circle
          backgroundColor='green'
          left='-40vh'
          top='-20vh'
          className={styles.circle}
        />
        <Circle
          backgroundColor='yellow'
          right='-30vh'
          bottom='-60vh'
          className={styles.circle}
        />
        <h3 className={styles.title}>Contact Us</h3>
        <form className={styles.form}>
          {inputs.map(input => (
            <input
              key={input.id}
              className={styles.inputGenerla}
              {...input}
              style={input.style}
            />
          ))}
          <textarea col='70' className={styles.massage} placeholder='Massage' />
          <button className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default contact
