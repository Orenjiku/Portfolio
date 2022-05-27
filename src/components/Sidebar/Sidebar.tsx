import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/Link';
import SidebarButton from './SidebarButton';
import SocialBar from './SocialBar';
import styles from '../../../styles/Sidebar/Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';

const sidebarVariant = {
  hidden: { x: '-100%' },
  visible: {
    x: 0,
    transition: { type: 'tween', duration: 0.2, ease: 'easeIn' },
  },
  exit: {
    x: '-150%',
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
};

const Sidebar = () => {
  const router = useRouter();

  const isActive = (url: string, pathname: string) =>
    pathname === url ? true : false;

  return (
    <motion.div
      className={styles.container}
      variants={sidebarVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className={styles.navBar}>
        <Link href="/">
          <a id="home">
            <SidebarButton
              text="HOME"
              isActive={isActive('/', router.pathname)}
            >
              <FontAwesomeIcon icon={faHome} color="white" />
            </SidebarButton>
          </a>
        </Link>
        <Link href="/about">
          <a id="about">
            <SidebarButton
              text="ABOUT"
              isActive={isActive('/about', router.pathname)}
            >
              <FontAwesomeIcon icon={faUser} color="white" />
            </SidebarButton>
          </a>
        </Link>
        <Link href="/contact">
          <a id="contact">
            <SidebarButton
              text="CONTACT"
              isActive={isActive('/contact', router.pathname)}
            >
              <FontAwesomeIcon icon={faEnvelope} color="white" />
            </SidebarButton>
          </a>
        </Link>
        <div className={styles.socialBarContainer}>
          <SocialBar />
        </div>
      </div>
    </motion.div>
  );
};

export default Sidebar;
