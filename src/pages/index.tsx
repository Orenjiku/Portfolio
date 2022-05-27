import React, { useState, useEffect } from 'react';
import type { ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import HomeTextBox from '../components/HomeTextBox/HomeTextBox';
import Layout from '../components/Layout/Layout';
import ParticlesCanvas from '../components/ParticlesCanvas';
import styles from '../../styles/Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const particlesVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.5, delay: 3 } },
  exit: { opacity: 0 },
};

const eyeVariant = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.2, ease: 'easeIn' },
  },
};

const Home = () => {
  const [header, setHeader] = useState(true);
  const [eye, setEye] = useState(false);

  const handleDisplayHeader = (e: React.MouseEvent) => {
    setHeader((prev) => !prev);
  };

  useEffect(() => {
    const initialEyeDelay = setTimeout(() => {
      setEye(true);
    }, 4000);
    return () => clearTimeout(initialEyeDelay);
  }, []);

  return (
    <>
      <Head>
        <title>{"Will's Portfolio | Home"}</title>
        <meta name="author" content="William Chang"></meta>
        <meta name="keywords" content="developer portfolio"></meta>
      </Head>

      <motion.div
        className={`${styles.canvas}`}
        variants={particlesVariant}
        initial="hidden"
        animate="visible"
      >
        <ParticlesCanvas />
      </motion.div>

      <AnimatePresence>{header && <HomeTextBox />}</AnimatePresence>

      <AnimatePresence>
        {eye && (
          <motion.button
            className={styles.eye}
            variants={eyeVariant}
            initial="hidden"
            animate="visible"
            onClick={handleDisplayHeader}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={header ? faEye : faEyeSlash}
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
