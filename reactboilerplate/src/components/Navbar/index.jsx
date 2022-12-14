import React from 'react';
import MobMenu from './MobMenu';
import styles from './navbar.module.css';
import WebMenu from './WebMenu';

function index() {
  return (
    <>
      <div className={styles.mob_menu}>
        <MobMenu />
      </div>
      <div className={styles.web_menu}>
        <WebMenu />
      </div>
    </>
  );
}

export default index;
