import { ReactElement } from "react";
import styles from '@styles/story.module.css'

export const Separator = ({ message, number, cssVariable }: {
  message: string;
  number: string;
  cssVariable: string
}): ReactElement => (
  <div className={styles.separator_container} >
    <span style={{backgroundImage: `var(--${cssVariable}-shadow)`}}></span>
    <div className={styles.circle}>
      <span style={{backgroundImage: `var(--${cssVariable})`}}>{number}</span>
      <h3 style={{backgroundImage: `var(--${cssVariable})`}}>{message}</h3>
    </div>
  </div>
);
