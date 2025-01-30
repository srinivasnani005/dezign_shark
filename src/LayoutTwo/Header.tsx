import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { logos } from "../assets";
import DownloadIcon from "@mui/icons-material/Download";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState<boolean>(false);
  const [drawerSubmenuOpen, setDrawerSubmenuOpen] = useState<string | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const digitalMarketingRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  // GSAP Line Animation
  useEffect(() => {
    gsap.to(lineRef.current, {
      x: "100%",
      duration: 1.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  // Button Hover Animation
  useEffect(() => {
    if (buttonRef.current) {
      gsap.fromTo(
        buttonRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.6,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        }
      );
    }
  }, []);

  // GSAP Dropdown Animation
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      gsap.fromTo(dropdownRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    }
    if (digitalMarketingOpen && digitalMarketingRef.current) {
      gsap.fromTo(digitalMarketingRef.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [dropdownOpen, digitalMarketingOpen]);

  // GSAP Drawer Animation
  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      gsap.fromTo(
        drawerRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else if (!mobileOpen && drawerRef.current) {
      gsap.to(drawerRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [mobileOpen]);

  const handleNavigate = (route: string) => {
    navigate(route);
    setDropdownOpen(null);
    setMobileOpen(false);
  };

  const handleDropdownToggle = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleDigitalMarketingHover = (open: boolean) => {
    setDigitalMarketingOpen(open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerSubmenuToggle = (label: string) => {
    setDrawerSubmenuOpen(drawerSubmenuOpen === label ? null : label);
  };

  const navItems = [
    { label: "Home", route: "/" },
    { label: "About", route: "/aboutus" },
    {
      label: "Services",
      route: "/services",
      submenu: [
        {
          label: "Digital Marketing",
          route: "#",
          submenu: [
            { label: "Search Engine Optimization (SEO)", route: "/services/digital-marketing/seo" },
            { label: "Pay-Per-Click (PPC) Advertising", route: "/services/digital-marketing/ppc" },
            { label: "Social Media Marketing", route: "/services/digital-marketing/social-media" },
          ],
        },
        { label: "Web Development", route: "/services/web-development" },
        { label: "Graphic Designing", route: "/services/graphic-design" },
        { label: "Branding", route: "/services/branding" },
      ],
    },
    { label: "Careers", route: "/careers" },
    { label: "Gallery", route: "/gallery" },
    { label: "Contact Us", route: "/contact" },
  ];

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      {navItems.map((item, index) => (
        <Box key={index} sx={{ position: "relative" }} onMouseEnter={() => handleDropdownToggle(item.label)} onMouseLeave={() => setDropdownOpen(null)}>
          <Typography className="nav-link" variant="body2" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleNavigate(item.route)}>
            {item.label} {item.submenu && <ArrowDropDownIcon />}
          </Typography>

          {item.submenu && dropdownOpen === item.label && (
            <Box className="dropdown-menu" ref={dropdownRef}>
              {item.submenu.map((subItem, subIndex) => (
                <Box key={subIndex} sx={{ position: "relative" }} onMouseEnter={() => subItem.label === "Digital Marketing" && handleDigitalMarketingHover(true)}
                  onMouseLeave={() => handleDigitalMarketingHover(false)}>
                  <Typography className="dropdown-item" variant="body2" onClick={() => subItem.route !== "#" && handleNavigate(subItem.route)}>
                    {subItem.label} {subItem.submenu && <ArrowDropDownIcon />}
                  </Typography>
                  {subIndex !== item.submenu.length - 1 && <Divider sx={{ backgroundColor: "gray" }} />}
                  {subItem.submenu && digitalMarketingOpen && (
                    <Box className="sub-dropdown-menu" ref={digitalMarketingRef}>
                      {subItem.submenu.map((dmItem, dmIndex) => (
                        <Typography key={dmIndex} className="dropdown-item" variant="body2" onClick={() => handleNavigate(dmItem.route)}>
                          {dmItem.label}
                        </Typography>
                      ))}
                    </Box>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );

  const renderMobileMenu = () => (
    <Drawer
      anchor="left"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: "250px",
          backgroundColor: "#1e1e1e",
          color: "white",
        },
      }}
    >
      <Box ref={drawerRef} sx={{ width: "100%", padding: "20px" }}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <IconButton onClick={handleDrawerToggle} sx={{ color: "white" }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <List>
          {navItems.map((item, index) => (
            <Box key={index}>
              <ListItemButton
                onClick={() => {
                  if (!item.submenu) handleNavigate(item.route);
                  else handleDrawerSubmenuToggle(item.label);
                }}
                sx={{
                  borderRadius: "8px",
                  marginBottom: "8px",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                <ListItemText primary={item.label} />
                {item.submenu && (
                  <ArrowDropDownIcon
                    sx={{
                      transform: drawerSubmenuOpen === item.label ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                )}
              </ListItemButton>
              {item.submenu && drawerSubmenuOpen === item.label && (
                <List sx={{ pl: 2 }}>
                  {item.submenu.map((subItem, subIndex) => (
                    <Box key={subIndex}>
                      <ListItemButton
                        onClick={() => {
                          if (!subItem.submenu) handleNavigate(subItem.route);
                          else handleDrawerSubmenuToggle(subItem.label);
                        }}
                        sx={{
                          borderRadius: "8px",
                          marginBottom: "8px",
                          "&:hover": {
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                          },
                        }}
                      >
                        <ListItemText primary={subItem.label} />
                        {subItem.submenu && (
                          <ArrowDropDownIcon
                            sx={{
                              transform: drawerSubmenuOpen === subItem.label ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.3s ease",
                            }}
                          />
                        )}
                      </ListItemButton>
                      {subItem.submenu && drawerSubmenuOpen === subItem.label && (
                        <List sx={{ pl: 4 }}>
                          {subItem.submenu.map((dmItem, dmIndex) => (
                            <ListItemButton
                              key={dmIndex}
                              onClick={() => handleNavigate(dmItem.route)}
                              sx={{
                                borderRadius: "8px",
                                marginBottom: "8px",
                                "&:hover": {
                                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                                },
                              }}
                            >
                              <ListItemText primary={dmItem.label} />
                            </ListItemButton>
                          ))}
                        </List>
                      )}
                    </Box>
                  ))}
                </List>
              )}
            </Box>
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <>
      {/* Top Bar */}
      <Box position="static"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "5px 40px",
          color: "white",
          width: '100%',
          boxShadow: 'none',
        }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Typography variant="body2"><PhoneIcon sx={{ fontSize: 16 }} /> 1-800-555-1234</Typography>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: "white", height: "20px" }} />
          <Typography variant="body2"><EmailIcon sx={{ fontSize: 16 }} /> info@example.com</Typography>
          <Divider orientation="vertical" flexItem sx={{ backgroundColor: "white", height: "20px" }} />
          <Typography variant="body2"><AccessTimeIcon sx={{ fontSize: 16 }} /> Open: 09:00 AM - 06:00 PM</Typography>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <FacebookIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <IconButton sx={{ color: "white" }}>
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Navigation Bar */}
      <Box position="sticky" sx={{
        backgroundColor: 'transparent',
        width: '100%',
        boxShadow: 'none', padding: "10px 0"
      }}>
        {/* GSAP Animated Line */}
        <div className="loader-line">
          <div className="gsap-line" ref={lineRef}></div>
        </div>
        <Container maxWidth='xl'>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0 40px" }}>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => handleNavigate("/")}>
              <img src={logos.dezignshark} alt="logo" className="logo-img" />
            </Box>

            {/* Desktop Navigation */}
            {!isMobile && renderDesktopMenu()}

            {/* Mobile Toggle Button */}
            {isMobile && (
              <IconButton color="inherit" onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            )}

            <Button
              ref={buttonRef}
              className="download-btn"
            >
              <DownloadIcon className="download-icon" />Download Brochure
            </Button>
          </Toolbar>
        </Container>
      </Box>

      {/* Mobile Drawer */}
      {isMobile && renderMobileMenu()}
    </>
  );
};

export default Header;