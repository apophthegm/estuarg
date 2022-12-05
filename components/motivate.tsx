import { ReactElement } from 'react'
import Image from 'next/image'
import clients from '@public/clients.png'
import styles from '@styles/motivate.module.css'
import { Separator } from '@components/separator'
import { Title } from './title'

export const Motivate = (): ReactElement => {
  return (
    <section className={styles.container}>
      <Separator message='MOTÍVATE' cssVariable='secondary-gradient' number='2' />
      <div className={styles.flex_container}>
        <div className={styles.text_container}>
          <Title title='¿por qué estudiar en el extranjero?' />
          <p className={styles.text}>
            El mundo está cambiando y la educación no puede quedarse atrás. El mundo necesita profesionales que sepan adaptarse a los cambios y que tengan una visión global de los problemas. Los estudiantes que estudian en el extranjero tienen una ventaja competitiva frente a los demás, ya que adquieren habilidades que les permiten ser más creativos, innovadores y emprendedores.
          </p>
          <p className={styles.text}>
            Por otro lado, Argetina cuenta con muchos destinos turísticos como lo son el obelisco, la flor metálica, el planetario, entre muchos otros y además de esto, su gente es bastante amable, por lo que encontrarás gente hermosa para conocer y lugares llamativos para decubrir.
          </p>
          <p className={styles.title}>
            Además de esto, Argentina cuenta con muchas universidades reconocidas a nivel mundial, como lo son la UBA o la UNLP, por lo que el nivel de educación superior del país es algo muy a tener en cuenta.
          </p>
        </div>
        <div className={styles.image_container}>
          <Image src={clients} alt='clientes de estuarg' />
          <h3>NUESTROS CLIENTES</h3>
        </div>
      </div>
    </section>
  )
}
