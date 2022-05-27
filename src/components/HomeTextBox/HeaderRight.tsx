import React from 'react';
import { tekoWill600px234 } from './svgLetters';
import styles from '../../../styles/HomeTextBox/HeaderRight.module.scss';

const HeaderRight = () => {
  return (
    <svg
      width="330"
      height="157"
      viewBox="-3 0 330 157"
      xmlns="http://www.w3.org/2000/svg"
      role="banner"
      aria-labelledby="description name"
    >
      <title id="name">Will</title>
      <desc id="description">{"Site Owner's Name:"}</desc>
      <g className={styles.g}>
        <path
          d={`${tekoWill600px234.upperW}`}
          id="0"
          vectorEffect="non-scaling-stroke"
          aria-label="letter W"
        />
        <path
          d={`${tekoWill600px234.lowerI}`}
          id="1"
          vectorEffect="non-scaling-stroke"
          aria-label="letter i"
        />
        <path
          d={`${tekoWill600px234.lowerL1}`}
          id="2"
          vectorEffect="non-scaling-stroke"
          aria-label="letter l"
        />
        <path
          d={`${tekoWill600px234.lowerL2}`}
          id="3"
          vectorEffect="non-scaling-stroke"
          aria-label="letter l"
        />
      </g>
    </svg>
  );
};

export default HeaderRight;
