import styles from '@styles/hero.module.css'
import { ReactElement } from 'react'

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
        <a className={`${styles.button} ${styles.primary}`} href='http://wa.me/573005731373' target='_blank' rel='noopener noreferrer'>
          Contactar
        </a>
        <a className={`${styles.button} ${styles.secondary}`} href='http://wa.me/573005731373' target='_blank' rel='noopener noreferrer'>
          Ver precios
        </a>
      </div>
    </div>
  )
}
