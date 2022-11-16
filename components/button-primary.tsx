import Link from "next/link"
import styles from '@styles/buttons.module.css';

interface IButton {
  title: string,
  link: string,
}

export const ButtonPrimary = ({ title, link }: IButton) => {
  return (
    <Link href={link} className={styles.primary} >
      {title}
    </Link>
  )
}