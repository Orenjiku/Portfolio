import React from 'react';
import styles from '../../../styles/Sidebar/SocialBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const SocialBar = () => {
  return (
    <ul className={styles.container}>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/wdchang/"
        >
          <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/Orenjiku">
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>
      </li>
      <li>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/Orenjiku">
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
        </a>
      </li>
    </ul>
  );
};

export default SocialBar;
