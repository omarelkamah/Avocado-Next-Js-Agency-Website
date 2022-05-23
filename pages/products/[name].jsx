import React from 'react'
import { data } from '../../data'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Product.module.css'
import Head from 'next/head'

const Product = ({ product }) => {
  return (
    <div className={styles.product}>
      <Head>
        <title>Avocado || {product.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.cardLarge}>
          {product.images.map(image => (
            <div key={image.id} className={styles.imageContainer}>
              <Image
                src={image.url}
                alt='image'
                layout='fill'
                objectFit='cover'
              />
            </div>
          ))}
        </div>
        <div className={styles.cardSmall}>
          <h3 className={styles.productTitle}>{product.name}</h3>
          <p className={styles.productDescription}>{product.longDesc}</p>
          <button className={styles.button}>
            <Link href='/contact'>Contact</Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const products = data
  const paths = products.map(product => {
    return {
      params: { name: product.name }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async context => {
  const name = context.params.name
  const product = data.filter(item => item.name === name)[0]
  return {
    props: {
      product
    }
  }
}

export default Product
