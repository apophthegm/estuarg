import Link from 'next/link'
import { FC, ReactElement } from 'react'
import { Logo } from '@components/icons'
import styles from '@styles/header.module.css'
import { navLinks } from 'data/links'

export const Header: FC = (): ReactElement => {
  return (
    <header className={styles.header}>
      <Link href='/'>
        <Logo width={90} />
      </Link>

      <NavLinks />
    </header>
  )
}

const NavLinks = (): ReactElement => {
  return (
    <ul className={styles.links__container}>
      {
        navLinks.map(navLink => (
          <li key={navLink.id}>
            <Link href={navLink.path} className={styles.link}>
              {navLink.title}
            </Link>
          </li>
        ))
      }
    </ul>
  )
}
