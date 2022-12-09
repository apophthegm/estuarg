import { ReactElement } from 'react'
import styles from '@styles/universities.module.css'
import titlebigStyles from '@styles/plans.module.css'

export const Title = ({ title }: { title: string }): ReactElement => (
  <h3 className={styles.title}>{title.toUpperCase()}</h3>
)

export const TitleBig = ({ title }: { title: string }): ReactElement => (
  <h3
    className={titlebigStyles.title_xl}
    style={{ ['--content' as any]: `'${title}'` }}
  >
    {title}
  </h3>
)
