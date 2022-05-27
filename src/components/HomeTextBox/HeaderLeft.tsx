import React from 'react';
import { tekoHi600px100, tekoIm600px100 } from './svgLetters';
import styles from '../../../styles/HomeTextBox/HeaderLeft.module.scss';

const HeaderLeft = () => {
  return (
    <>
      <span className={styles.leftTopMask}>
        <svg
          className={styles.leftTopSvg}
          width="68"
          height="68"
          viewBox="-1 0 68 68"
          xmlns="http://www.w3.org/2000/svg"
          role="banner"
          aria-label="text: Hi"
        >
          <title>Hi</title>
          <desc>text</desc>
          <g className={styles.letters}>
            <path
              d={`${tekoHi600px100.upperH}`}
              id="0"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`${tekoHi600px100.lowerI}`}
              id="1"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </span>
      <div className={styles.leftBotMask}>
        <svg
          width="105"
          height="64"
          viewBox="-1 0 107 64"
          xmlns="http://www.w3.org/2000/svg"
          role="banner"
          aria-label="text: I'm"
        >
          <title>{"I'm"}</title>
          <desc>text</desc>
          <g className={styles.letters}>
            <path
              d={`${tekoIm600px100.upperI}`}
              id="0"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`${tekoIm600px100.apostrophe}`}
              id="1"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d={`${tekoIm600px100.lowerM}`}
              id="2"
              vectorEffect="non-scaling-stroke"
            />
          </g>
        </svg>
      </div>
    </>
  );
};

export default HeaderLeft;
