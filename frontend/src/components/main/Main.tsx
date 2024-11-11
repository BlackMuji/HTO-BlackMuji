// Main.tsx
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useSidebar } from '../../contexts/SidebarContext.tsx';
import Sidebar from './Sidebar';
import Profile from './Profile';
import styles from '../../assets/scss/section/_layout.module.scss';
import background from '../../assets/img/icon/Main_Background.png';

interface MainProps {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ title, description, children }) => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate="%s | Hack This Out"
        defaultTitle="Hack This Out"
        defer={false}
      >
        {title && <title>{title}</title>}
        <meta name="description" content={description} />
      </Helmet>

      <img className={styles.background} src={background} />
      <div className={styles.main_container}>
        <div className={styles.sidebar_container}>
          <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        </div>

        <div className={styles.upper_bar} />
        <div className={`${styles.props_container} ${isCollapsed ? styles.collapsed : ''}`}>
          {children}
        </div>

        <div className={styles.profile_container}>
          <Profile />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Main;