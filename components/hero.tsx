import { ReactElement } from "react";
import styles from '@styles/hero.module.css';
import Image from 'next/image';
import coverPhoto from '@public/cover.png'
import { ButtonPrimary } from "./button-primary";
import { ButtonSecondary } from "./button-secondary";

export const Hero = (): ReactElement => (
  <main className={styles.hero} >
    <div className={styles.hero_container}>
      <h1 className={styles.hero__title}>Dile que sí a tu niño interno y conviértete en lo que siempre has soñado ser</h1>
      <p className={styles.hero__desc}>Ven a estudiar a la Argentina y con nuestra ayuda podrás lograr todas las metas que tengas pendiente. <span className={styles.hero__desc_bold}>¡Anímate!</span></p>

      <div className={styles.buttons__container}>
        <ButtonPrimary link="/contacto" title="Contactar" />
        <ButtonSecondary link="/precios" title="Ver precios" />
      </div>
    </div>

    <div className={styles.img_container}>
      <Image src={coverPhoto} alt='asesores estuarg' priority style={{
        objectFit: 'contain',
        height: 'auto'
      }} />
    </div>
  </main>
)