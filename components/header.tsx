import { MouseEvent, ReactElement, useEffect, useState } from 'react'
import { Logo } from '@components/icons'
import styles from '@styles/header.module.css'
import { navLinks } from 'data/links'
import { Link } from 'react-scroll'

export const Header = (): ReactElement => {
  const [margin, setMargin] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      window.scrollY > 0 ? setMargin(true) : setMargin(false)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className={`${styles.header} ${margin ? styles.margin : ''}`}>
      <Link to='home' offset={-80} className={styles.link}>
        <Logo height={35} />
      </Link>

      <MobileNav />
      <NavLinks className='links__container' />
    </header>
  )
}

const MobileNav = (): ReactElement => {
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const nav = document.querySelector(
      `.${styles.header_mobile}`
    ) as HTMLElement
    const linksContainer = document.querySelector(
      `.${styles.links__container_mobile}`
    ) as HTMLElement

    nav.classList.toggle(styles.rotate)
    linksContainer.classList.toggle(styles.show_links)
    document.body.classList.toggle(styles.overflow)
  }

  return (
    <>
      <button
        type='button'
        onClick={handleClick}
        className={styles.header_mobile}
      >
        <div className={styles.icon} />
      </button>
      <NavLinks className='links__container_mobile' />
    </>
  )
}

const NavLinks = ({ className }: { className: string }): ReactElement => {
  return (
    <ul className={styles[className]}>
      {navLinks.map((navLink) => (
        <li key={navLink.id}>
          <Link to={navLink.path} className={styles.link} offset={-80}>
            {navLink.title}
          </Link>
        </li>
      ))}
    </ul>
  )
}
