import React from 'react';
import styles from '../../../styles/HomeTextBox/AnimatedLetters.module.scss';

type Props = {
  letterClass: string;
  strArr: string[];
};

const AnimatedLetters = ({ letterClass, strArr }: Props) => {
  return (
    <h2 className={styles.container}>
      {strArr.map((char, i) => (
        <span
          key={char + i}
          className={`${styles.text} ${styles[letterClass]} ${styles[`_${i}`]}`}
        >
          {char}
        </span>
      ))}
    </h2>
  );
};

export default AnimatedLetters;
