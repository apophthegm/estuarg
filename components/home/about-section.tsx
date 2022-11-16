import { PlanItem } from '@components/plan-itme';
import styles from '@styles/home.module.css';
import { plansLinks } from 'data/links';

export const AboutSection = () => {
  return (
    <section className={styles.about__section}>
      <div className={styles.about__content}>
        <h2 className={styles.about__title}>Elige la universidad que desees</h2>
        <p className={styles.about__description}>Desde la UBA, hasta la universidad que decidas. Sea cual sea la universidad que elijas, nosotros te ayudaremos a inscribirte y a entrar en ella. Te brindaremos todo el acompañamiento que necesites desde el primer momento y además, contamos con excelentes planes que aparte de ajustarse a tus necesidades, tienen unos precios súper económicos.</p>
      </div>

      <div className={styles.plans__contianer}>
        {
          plansLinks.map(plan => (
            <PlanItem title={plan.title} description={plan.description} path={plan.path} key={plan.id} />
          ))
        }
      </div>
    </section>
  )
}