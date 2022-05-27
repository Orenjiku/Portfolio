import React from 'react';
import styles from '../../../styles/Sidebar/SidebarButton.module.scss';

type SidebarButtonProps = {
  text: string;
  isActive: boolean;
  children: React.ReactNode; //FontAwesome react component
};

const SidebarButton = ({ text, isActive, children }: SidebarButtonProps) => {
  return (
    <button className={`${styles.btn} ${isActive ? styles.active : ''}`}>
      <div className={styles.maskView}>
        <div className={styles.maskInner}>
          <div className={styles.icon}>{children}</div>
          <div className={styles.iconText}>{text}</div>
        </div>
      </div>
    </button>
  );
};

export default SidebarButton;
