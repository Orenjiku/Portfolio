import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedLetters from './AnimatedLetters';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';
import styles from '../../../styles/HomeTextBox/HomeTextBox.module.scss';

const textBoxVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
  exit: {
    opacity: 0,
  },
};

const leftEntryVariant = {
  hidden: { opacity: 0, y: '-200%' },
  visible: { opacity: 1, y: 0 },
};

const rightEntryVariant = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { type: 'spring', bounce: 0.3 } },
};

const HomeTextBox = () => {
  const [letterClass, setLetterClass] = useState('textAnimateInitial');
  const text = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ];

  useEffect(() => {
    //replace initial textAnimate class with textAnimateHover class
    const addHoverClass = setTimeout(() => {
      setLetterClass('textAnimateHover');
    }, 4000);
    return () => clearTimeout(addHoverClass);
  }, []);

  return (
    <motion.div
      className={styles.textBox}
      variants={textBoxVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.header}>
        <motion.div className={styles.left} variants={leftEntryVariant}>
          <HeaderLeft />
        </motion.div>
        <div className={styles.rightMask}>
          <motion.div variants={rightEntryVariant}>
            <HeaderRight />
          </motion.div>
        </div>
      </div>
      <AnimatedLetters letterClass={letterClass} strArr={text} />
    </motion.div>
  );
};

export default HomeTextBox;
