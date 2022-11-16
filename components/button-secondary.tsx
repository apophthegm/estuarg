import Link from "next/link"
import styles from '@styles/buttons.module.css';

interface IButton {
  title: string,
  link: string,
}

export const ButtonSecondary = ({ title, link }: IButton) => {
  return (
    <Link href={link} className={styles.secondary} >
      {title}
    </Link>
  )
}