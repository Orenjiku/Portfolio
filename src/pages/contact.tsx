import React, { ReactElement } from 'react';
import Layout from '../components/Layout/Layout';
// import styles from '../../styles/Contant.module.scss';

const Contact = () => {
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
      <span>Contact</span>
    </div>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Contact;
