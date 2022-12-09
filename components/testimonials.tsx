import { ReactElement } from 'react'
import styles from '@styles/motivate.module.css'
import testimonies from 'data/testimonies'
import Image from 'next/image'

export const Testimonials = (): ReactElement => {
  return (
    <div className={styles.testimonials_shadows_container}>
      <div className={styles.testimonials_container}>
        {
          testimonies.map(({ id, from, name, picture, testimony }) => (
            <div key={id} className={styles.testimony_card}>
              <p>{testimony}</p>
              <div className={styles.testimony_card_footer}>
                <Image src={`/clients${picture}`} alt={`cliente de estuarg ${name}`} width={50} height={50} />
                <div>
                  <p>{name}</p>
                  <p>{from}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
