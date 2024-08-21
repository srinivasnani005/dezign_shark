// Layout.tsx
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';
import './Layout.css'; 

const Layout: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('/dashboard');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box className="layout-container">
      <Box className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <Header selectedTab={selectedTab} onTabChange={setSelectedTab} />
      </Box>
      <Box className="content-container">
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;