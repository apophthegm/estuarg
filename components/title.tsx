import { ReactElement } from 'react'
import styles from '@styles/universities.module.css'

export const Title = ({ title }: { title: string }): ReactElement => (
  <h3 className={styles.title}>{title.toUpperCase()}</h3>
)
