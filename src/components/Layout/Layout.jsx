import React from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import styles from './Layout.module.css';

function Layout() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const getNavLinkClass = ({ isActive }) => {
    return isActive 
      ? `${styles.navLink} ${styles.activeLink}`
      : styles.navLink;
  };

  return (
    <div className={styles.layoutContainer}>
      
      <nav className={styles.navigation}>
        
        {}
        <NavLink to="/dashboard" className={styles.logo}>
          AeroCode
        </NavLink>

        <div className={styles.navLinksContainer}>
          <NavLink to="/dashboard/testes" className={getNavLinkClass}>Testes</NavLink>
          <NavLink to="/dashboard/relatorios" className={getNavLinkClass}>Relatórios</NavLink>
          <NavLink to="/dashboard/aeronaves" className={getNavLinkAoClass}>Aeronaves</NavLink>
          <NavLink to="/dashboard/funcionarios" className={getNavLinkClass}>Funcionários</NavLink>
          <NavLink to="/dashboard/etapas" className={getNavLinkClass}>Etapas</NavLink>
          <NavLink to="/dashboard/pecas" className={getNavLinkClass}>Peças</NavLink>
        </div>
      </nav>

      {}
      <main className={isDashboard ? styles.mainContentFullWidth : styles.mainContent}>
        <Outlet />
      </main>

    </div>
  );
}

const getNavLinkAoClass = ({ isActive }) => {
  return isActive 
    ? `${styles.navLink} ${styles.activeLink}`
    : styles.navLink;
};

export default Layout;