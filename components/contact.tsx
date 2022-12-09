import { ReactElement } from 'react'
import { Title, TitleBig } from '@components/title'
import styles from '@styles/contact.module.css'
import { contactLinks, socialMediaLinks } from 'data/links'
import { Element } from 'react-scroll'
import { Whatsapp } from './icons'
// import { ContactForm } from "@components/contact-form";

export const Contact = (): ReactElement => {
  return (
    <Element name='contact' className={styles.container}>
      <TitleBig title='¡Contáctanos y empieza hoy tu aventura!' />
      <Title title='nuestros canales oficiales' />
      <Links />
    </Element>
  )
}

const Links = (): ReactElement => {
  return (
    <div className={styles.links_container}>
      <div className={styles.phone_numbers_container}>
        <Whatsapp width='1.7rem' height='1.7rem' />
        <div className={styles.phone_numbers}>
          {contactLinks.map((link) => (
            <a
              href={link.path}
              target='_blank'
              rel='noopener noreferrer'
              className={styles.link}
              key={link.id}
            >
              <p>{link.title}</p>
            </a>
          ))}
        </div>
      </div>
      {socialMediaLinks.map((socialMediaLink) => (
        <a
          href={socialMediaLink.path}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.link}
          key={socialMediaLink.id}
        >
          <socialMediaLink.icon width='1.7rem' height='1.7rem' />
          <p>{socialMediaLink.title}</p>
        </a>
      ))}
    </div>
  )
}
