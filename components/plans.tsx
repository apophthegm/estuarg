import { ReactElement } from "react";
import styles from '@styles/plans.module.css'
import { Separator } from "@components/separator";
import { Element } from "react-scroll";

export const Plans = ():ReactElement => {
  return (
    <Element name="pricing" role={'contentinfo'} className={styles.container}>
      <Separator cssVariable="tertiary-gradient" message="PLANES" number="3" />
    </Element>
  );
};