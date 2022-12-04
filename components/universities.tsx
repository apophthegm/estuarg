import styles from '@styles/universities.module.css'
import { universities } from 'data/universities'
import { ReactElement } from 'react'
import Image from 'next/image'

const universitiesOne = universities.slice(0, 5)
const universitiesTwo = universities.slice(5, 9)

export const Universities = (): ReactElement => {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>ESTUDIA EN LA UNIVERSIDAD DE TUS SUEÑOS</h3>

      <div className={styles['logos__container--mobile']}>
        <div className={styles.logos_mobile}>
          <div>
            {universities.map(({ description, id, source }) => (
              <Image
                src={source}
                key={id}
                alt={description}
                className={styles.logo}
                width={100}
                height={40}
              />
            ))}
          </div>
          <div>
            {universities.map(({ description, id, source }) => (
              <Image
                src={source}
                key={id}
                alt={description}
                className={styles.logo}
                width={100}
                height={40}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.logos_container}>
        <div className={styles['logos__container--web']}>
          {universitiesOne.map(({ description, id, source }) => (
            <Image
              src={source}
              key={id}
              alt={description}
              className={styles.logo}
              width={100}
              height={40}
            />
          ))}
        </div>
        <div className={styles['logos__container--web']}>
          {universitiesTwo.map(({ description, id, source }) => (
            <Image
              src={source}
              key={id}
              alt={description}
              className={styles.logo}
              width={100}
              height={40}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
