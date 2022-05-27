import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/Auxiliary.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAnglesLeft,
  faAnglesRight,
  faVolumeHigh,
  faVolumeXmark,
} from '@fortawesome/free-solid-svg-icons';

const auxVariant = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.2, ease: 'easeIn' },
  },
};

type AuxiliaryProp = {
  sidebar: boolean;
  sound: boolean;
  handleDisplaySidebar: Function;
  handlePlaySound: Function;
};
const Auxiliary = ({
  sidebar,
  sound,
  handleDisplaySidebar,
  handlePlaySound,
}: AuxiliaryProp) => {
  const [aux, setAux] = useState(false);

  useEffect(() => {
    const initialAuxDelay = setTimeout(() => {
      setAux(true);
    }, 4000);
    return () => clearTimeout(initialAuxDelay);
  }, []);

  return (
    <>
      {aux && (
        <motion.div
          className={styles.buttonContainer}
          variants={auxVariant}
          initial="hidden"
          animate="visible"
        >
          <button
            className={styles.auxButton}
            onClick={() => handleDisplaySidebar()}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={sidebar ? faAnglesLeft : faAnglesRight}
            />
          </button>
          <button
            className={styles.auxButton}
            onClick={() => handlePlaySound()}
          >
            <FontAwesomeIcon
              className={styles.icon}
              icon={sound ? faVolumeHigh : faVolumeXmark}
            />
          </button>
        </motion.div>
      )}
    </>
  );
};

export default Auxiliary;
