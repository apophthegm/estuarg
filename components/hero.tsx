import styles from '@styles/hero.module.css'
import { ReactElement } from 'react'
import NextLink from 'next/link'
import { Link } from 'react-scroll'

const message = [
  {
    id: 0,
    message: 'Viaja.'
  },
  {
    id: 1,
    message: 'Estudia.'
  },
  {
    id: 2,
    message: 'Conoce.'
  }
]

export default function Hero (): ReactElement {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 aria-label='Viaja. Estudia. Conoce.' className={styles.title}>
          {
            message.map(({ id, message }) => (
              <span key={id} className={styles.gradient__container} style={{ ['--content' as any]: `'${message}'`, ['--padding' as any]: '0.3rem' }}>
                <span className={styles.gradient__content}>{message}</span>
              </span>
            ))
          }
        </h1>
        <h2 className={styles.description}>
          Estuarg es la agencia asesora que te ayuda a convertirte en el profesional que siempre has soñado.
        </h2>
      </div>
      <div className={styles.buttons}>
        <NextLink className={`${styles.button} ${styles.primary}`} href='/contacto' target='_blank' rel='noopener noreferrer'>
          Contactar
        </NextLink>
        <Link to='pricing' className={`${styles.button} ${styles.secondary}`}>
          Ver precios
        </Link>
      </div>
    </div>
  )
}
