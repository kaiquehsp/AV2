import React from 'react';
import styles from './Dashboard.module.css';

function Dashboard() {
  return (
    <div className={styles.heroContainer}>
      
      {}
      <h1 className={styles.heroText}>
        Seja bem-vindo à AeroCode
      </h1>

      {}
      <p className={styles.heroSubText}>
        O seu sistema de gestão da produção.
      </p>

    </div>
  );
}

export default Dashboard;