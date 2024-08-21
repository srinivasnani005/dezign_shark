import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Box,
  Tabs,
  Tab,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { FaDribbble, FaFacebookF, FaTwitter } from 'react-icons/fa';
import { logos } from '../assets';
import AnimatedButton from '../Buttons/AnimatesButton';
import './Header.css'; // Import the CSS file for styling

interface HeaderProps {
  selectedTab: string;
  onTabChange: (route: string) => void;
}

const Header: React.FC<HeaderProps> = ({ selectedTab, onTabChange }) => {
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [subMenuVisible, setSubMenuVisible] = useState(false);
  const [drawerSubMenuOpen, setDrawerSubMenuOpen] = useState<string | null>(null);

  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: string) => {
    onTabChange(newValue);
    navigate(newValue);
    setDrawerOpen(false);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleDropdownMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleDropdownMouseLeave = () => {
    setDropdownVisible(false);
    setSubMenuVisible(false);
  };

  const handleSubMenuMouseEnter = () => {
    setSubMenuVisible(true);
  };

  const handleSubMenuMouseLeave = () => {
    setSubMenuVisible(false);
  };

  const handleNavigate = (route: string) => {
    navigate(route);
    setDropdownVisible(false);
    setSubMenuVisible(false);
    setDrawerOpen(false);
  };

  const handleDrawerSubMenuToggle = (menu: string) => {
    setDrawerSubMenuOpen(drawerSubMenuOpen === menu ? null : menu);
  };

  const tabLabels = [
    { label: 'Dashboard', route: '/dashboard' },
    { label: 'About', route: '/about' },
    // { label: 'Services', route: '/services' },
  ];

  const tableLabels2 = [
    // { label: 'Services', route: '/services' },
    { label: 'Blog', route: '/blog' },
    { label: 'Gallery', route: '/gallery' },
    { label: 'Contact Us', route: '/contact-us' },
  ];

  const serviceMenuItems = [
    { label: 'Digital Marketing', submenu: [
      { label: 'SEO', route: '/services/digital-marketing/seo' },
      { label: 'SMM', route: '/services/digital-marketing/smm' },
      { label: 'PPC', route: '/services/digital-marketing/ppc' },
    ]},
    { label: 'Graphic Designing', route: '/services/graphic-designing' },
    { label: 'Web Development', route: '/services/web-development' },
    { label: 'Branding', route: '/services/branding' },
  ];

  const tabButtonStyles = {
    fontSize: '16px',
    color: '#FFFFFF80',
    fontWeight: 'bold',
    '&:hover': {
      color: '#fc0000', 
    },
  };

  const drawerItemStyles = {
    fontSize: '16px',
    color: '#FFFFFF80',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#fc0000',
      color: '#FFFFFF',
    },
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(6px)',
          width: '100%',
          boxShadow: 'none',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', ml: 5, cursor: 'pointer' }} onClick={() => handleTabChange(null as any, '/dashboard')}>
            <img src={logos.dezignshark} alt="Logo" style={{ height: '40px' }} />
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              flexGrow: 1,
              justifyContent: 'flex-end',
            }}
          >
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                '& .MuiTab-root': {
                  ...tabButtonStyles,
                  minWidth: 'auto',
                  marginLeft: 1,
                },
                '& .Mui-selected': {
                  color: '#fc0000', 
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#fc0000', 
                },
              }}
            >
              {tabLabels.map((tab, index) => (
                tab.label !== 'Services' ? (
                  <Tab
                    key={index}
                    label={tab.label}
                    value={tab.route}
                  />
                ) : null
              ))}
            </Tabs>
            <div
              className="menu"
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              <button
                className="tab-button"
                style={{
                  ...tabButtonStyles,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                Services <ArrowDropDownIcon />
              </button>
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <ul>
                    <li 
                      onMouseEnter={handleSubMenuMouseEnter} 
                      onMouseLeave={handleSubMenuMouseLeave}
                    >
                      Digital Marketing <ArrowDropDownIcon />
                      {subMenuVisible && (
                        <div className="sub-menu">
                          <ul>
                            <li onClick={() => handleNavigate('/services/digital-marketing/seo')}>SEO</li>
                            <li onClick={() => handleNavigate('/services/digital-marketing/smm')}>SMM</li>
                            <li onClick={() => handleNavigate('/services/digital-marketing/ppc')}>PPC</li>
                          </ul>
                        </div>
                      )}
                    </li>
                    <li onClick={() => handleNavigate('/services/graphic-designing')}>Graphic Designing</li>
                    <li onClick={() => handleNavigate('/services/web-development')}>Web Development</li>
                    <li onClick={() => handleNavigate('/services/branding')}>Branding</li>
                  </ul>
                </div>
              )}
            </div>
            <Tabs
              value={selectedTab}
              onChange={handleTabChange}
              textColor="inherit"
              indicatorColor="secondary"
              sx={{
                '& .MuiTab-root': {
                  ...tabButtonStyles,
                  minWidth: 'auto',
                  marginLeft: 1,
                },
                '& .Mui-selected': {
                  color: '#fc0000', 
                },
                '& .MuiTabs-indicator': {
                  backgroundColor: '#fc0000',
                },
              }}
            >
              {tableLabels2.map((tab, index) => (
                tab.label !== 'Services' ? (
                  <Tab
                    key={index}
                    label={tab.label}
                    value={tab.route}
                  />
                ) : null
              ))}
            </Tabs>
            <AnimatedButton onClick={() => window.open('/brochure.pdf', '_blank')}>
              Download Brochure
            </AnimatedButton>
          </Box>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#FFFFFF' }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            color: '#FFFFFF',
            border: 'none',
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ color: '#FFFFFF' }}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {tabLabels.map((tab, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  handleTabChange(null as any, tab.route);
                  handleDrawerToggle();
                }}
                sx={{
                  ...drawerItemStyles,
                  backgroundColor: selectedTab === tab.route ? '#fc0000' : 'transparent',
                  color: selectedTab === tab.route ? '#FFFFFF' : '#FFFFFF',
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: 'inherit' }}>
                      {tab.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          {/* <Divider sx={{ borderColor: '#FFFFFF' }} /> */}
          <List>
            {serviceMenuItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  button
                  onClick={() => {
                    if (item.submenu) {
                      handleDrawerSubMenuToggle(item.label);
                    } else {
                      handleNavigate(item.route);
                      handleDrawerToggle();
                    }
                  }}
                  sx={{
                    ...drawerItemStyles,
                    backgroundColor: drawerSubMenuOpen === item.label ? '#fc0000' : 'transparent',
                  }}
                >
                  <ListItemText
                    primary={
                      <Typography variant="body1" sx={{ color: 'inherit', display: 'flex', alignItems: 'center' }}>
                        {item.label}
                        {item.submenu && <ArrowDropDownIcon sx={{ ml: 1 }} />}
                      </Typography>
                    }
                  />
                </ListItem>
                {item.submenu && drawerSubMenuOpen === item.label && (
                  <List sx={{ pl: 4 }}>
                    {item.submenu.map((subItem, subIndex) => (
                      <ListItem
                        button
                        key={subIndex}
                        onClick={() => {
                          handleNavigate(subItem.route);
                          handleDrawerToggle();
                        }}
                        sx={{
                          ...drawerItemStyles,
                          backgroundColor: selectedTab === subItem.route ? '#fc0000' : 'transparent',
                        }}
                      >
                        <ListItemText
                          primary={
                            <Typography variant="body2" sx={{ color: 'inherit' }}>
                              {subItem.label}
                            </Typography>
                          }
                        />
                      </ListItem>
                    ))}
                  </List>
                )}
              </React.Fragment>
            ))}
          </List>
          <List>
            {tableLabels2.map((tab, index) => (
              <ListItem
                button
                key={index}
                onClick={() => {
                  handleTabChange(null as any, tab.route);
                  handleDrawerToggle();
                }}
                sx={{
                  ...drawerItemStyles,
                  backgroundColor: selectedTab === tab.route ? '#fc0000' : 'transparent',
                  color: selectedTab === tab.route ? '#FFFFFF' : '#FFFFFF',
                }}
              >
                <ListItemText
                  primary={
                    <Typography variant="body1" sx={{ color: 'inherit' }}>
                      {tab.label}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
          <Divider sx={{ borderColor: '#FFFFFF' }} />
          <List>
            <ListItem
              button
              onClick={() => window.open('/brochure.pdf', '_blank')}
              sx={{
                '&:hover': {
                  backgroundColor: '#fc0000',
                  color: '#FFFFFF',
                },
              }}
            >
              <ListItemText
                primary={
                  <Typography variant="body1" sx={{ color: '#FFFFFF' }}>
                    Download Brochure
                  </Typography>
                }
              />
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <Box
        sx={{
          position: 'fixed',
          bottom: { xs: '10px', sm: '20px', md: '30px' },
          right: { xs: '10px', sm: '10px', md: '10px' },
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <IconButton href="#" aria-label="Facebook" sx={{ color: 'white' }}>
          <FaFacebookF size={20} />
        </IconButton>
        <IconButton href="#" aria-label="Twitter" sx={{ color: 'white' }}>
          <FaTwitter size={20} />
        </IconButton>
        <IconButton href="#" aria-label="Dribbble" sx={{ color: 'white' }}>
          <FaDribbble size={20} />
        </IconButton>
      </Box>
    </>
  );
};

export default Header;
