import { ReactElement } from 'react'
import styles from '@styles/plans.module.css'
import { Separator } from '@components/separator'
import { Element } from 'react-scroll'
import { plansLinks } from 'data/links'
import Link from 'next/link'
import { Title, TitleBig } from './title'
import { Check } from './icons'

export const Plans = (): ReactElement => {
  const plansTitle = 'Planes que se adaptan a ti'

  return (
    <Element name='pricing' role='contentinfo' className={styles.container}>
      <Separator cssVariable='tertiary-gradient' message='PLANES' number='3' />
      <TitleBig title={plansTitle} />
      <Title title='Los precios más accesibles del mercado' />
      <div className={styles.plans_container}>
        {plansLinks.map(({ id, description, path, price, title, benefits, color, callToActionMessage }) => (
          <div key={id} className={`${styles.plan} ${id === '1' ? styles.most_popular : ''}`}>
            {id === '1' && <div className={styles.stack}><p>Más popular</p></div>}
            <div className={styles.header}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.price}>{price}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <ul className={styles.benefits}>
              {benefits.map((benefit, index) => (
                <li key={index} className={styles.benefit}>
                  <Check
                    color={color}
                    width='1.3rem'
                  />
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
            <div className={styles.benefits} style={{ ['--color' as any]: `${color}` }}>
              <Link href={path} className={styles.button}>
                {callToActionMessage}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </Element>
  )
}
