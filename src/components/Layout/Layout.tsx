import React, { useState, useEffect, useMemo } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Howl } from 'howler';
import Auxiliary from '../Auxiliary';
import Sidebar from '../Sidebar/Sidebar';
import styles from '../../../styles/Layout.module.scss';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [sidebar, setSidebar] = useState(false);
  const [sound, setSound] = useState(false);

  const handleDisplaySidebar = () => {
    setSidebar((prev) => !prev);
  };

  const handlePlaySound = () => {
    setSound((prev) => !prev);
  };

  const music = useMemo(
    () =>
      new Howl({
        src: ['/assets/music/80s-pop-110346.mp3'],
        loop: true,
        html5: true,
        volume: 0.5,
      }),
    []
  );

  useEffect(() => {
    sound ? music.play() : music.pause();
  }, [sound, music]);

  useEffect(() => {
    const initialSidebarDelay = setTimeout(() => {
      setSidebar(true);
    }, 3500);
    return () => clearTimeout(initialSidebarDelay);
  }, []);

  return (
    <div className={styles.container}>
      <Auxiliary
        sidebar={sidebar}
        sound={sound}
        handleDisplaySidebar={handleDisplaySidebar}
        handlePlaySound={handlePlaySound}
      />
      <AnimatePresence>{sidebar && <Sidebar />}</AnimatePresence>
      <div className={styles.pages}>{children}</div>
    </div>
  );
};

export default Layout;
