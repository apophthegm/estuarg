import { ReactElement } from 'react'
import styles from '@styles/story.module.css'
import { Title } from '@components/title'
import { Separator } from './separator'
import diego from '@public/diego.png'
import yelenka from '@public/yelenka.png'
import leidy from '@public/leidy.png'
import Image from 'next/image'
import { Element } from 'react-scroll'

const Team = (): ReactElement => {
  const members = [
    {
      name: 'Leidy',
      image: leidy,
      id: 0
    },
    {
      name: 'Diego',
      image: diego,
      id: 1
    },
    {
      name: 'Yelenka',
      image: yelenka,
      id: 2
    }
  ]

  return (
    <div className={styles.team_container}>
      {members.map(({ id, image, name }) => (
        <div className={styles.member_card_container} key={id}>
          <span className={styles.gradient} />
          <div className={styles.member_card}>
            <div className={styles.member}>
              <Image
                src={image}
                alt={`${name} asesores estuarg`}
                placeholder='blur'
                className={styles.member_image}
              />
            </div>
            <p className={styles.member_name}>{name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export const Story = (): ReactElement => (
  <Element name='about' role='contentinfo' className={styles.container}>
    <Title title='CONOCE TODO ACERCA DE LA AGENCIA' />
    <Separator
      message='NUESTRA HISTORIA'
      number='1'
      cssVariable='primary-gradient'
    />
    <p>
      Estuarg nace con la idea principal de ayudar a las personas que quieran
      estudiar en Argentina, ofreciendo un servicio de calidad, humano y
      sobretodo, a un precio justo. Actualmente contamos con más de 6 años
      ayudando a personas del exterior a venir a estudiar al país. Les damos
      toda la ayuda y asesoramiento que necesitan para poder venir a Argentina a
      estudiar.
    </p>
    <p>
      Nuestro equipo actualmente consta de 3 asesores, los cuales te ayudarán a
      lo largo de todo el proceso.
    </p>
    <Team />
  </Element>
)
