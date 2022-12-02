import styles from '@styles/footer.module.css'
import { contactLinks, socialMediaLinks } from 'data/links'
import { ReactElement } from 'react'

export const Footer = (): ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__col}>
        <h3 className={styles.footer__title}>Contacto:</h3>
        {contactLinks.map((contact) => (
          <a
            key={contact.id}
            href={contact.path}
            target='_blank'
            rel='noopener noreferrer'
          >
            {contact.title}
          </a>
        ))}
      </div>
      <div className={styles.footer__col}>
        <h3 className={styles.footer__title}>Redes:</h3>
        {socialMediaLinks.map((socialMedia) => (
          <a
            key={socialMedia.id}
            href={socialMedia.path}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.footer__link}
          >
            {
              (socialMedia.icon != null) && (
                <socialMedia.icon width={24} height={24} />
              )
            }
            <p>{socialMedia.title}</p>
          </a>
        ))}
      </div>
    </footer>
  )
}
