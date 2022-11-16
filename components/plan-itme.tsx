import styles from '@styles/buttons.module.css'

interface IPlanItem{
  title: string
  path: string
  description: string
  price?: boolean | string
}

export const PlanItem = ({description, path, title, price = false}:IPlanItem) => {
  return (
    <a href={path} target="_blank" rel="noopener noreferrer" className={styles.plan__item}>
      <h4 className={styles.plan__title}>{title}</h4>
      <p className={styles.plan__description}>{description}</p>
      {price && <p className={styles.plan__price}>{price}</p>}
    </a>
  )
}