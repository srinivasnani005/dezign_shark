import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';
import './Layout.css'; 

const Layout: React.FC = () => {
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(location.pathname); 

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Update selectedTab when the route changes
    setSelectedTab(location.pathname);
  }, [location.pathname]);

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
