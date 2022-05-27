import React from 'react';
import type { ReactElement } from 'react';
import Layout from '../components/Layout/Layout';
// import styles from '../../styles/About.module.scss';

const About = () => {
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        color: 'white',
        fontSize: '50px',
        fontFamily: 'Roboto',
      }}
    >
      <span>About</span>
    </div>
  );
};

About.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default About;
