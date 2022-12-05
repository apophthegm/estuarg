import { ReactElement } from "react";
import styles from '@styles/plans.module.css'
import { Separator } from "@components/separator";

export const Plans = ():ReactElement => {
  return (
    <div className={styles.container}>
      <Separator cssVariable="tertiary-gradient" message="PLANES" number="3" />
    </div>
  );
};