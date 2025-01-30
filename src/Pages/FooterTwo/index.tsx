import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography, TextField, IconButton, Container } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { gsap } from "gsap";
import { footerbg, logos } from "../../assets";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const iconRefs = useRef<HTMLButtonElement[]>([]); // ✅ Corrected the useRef typing

  useEffect(() => {
    if (footerRef.current) {
      gsap.from(footerRef.current, {
        // opacity: 0,
        y: 50,
        duration: 1.5,
        ease: "power3.out",
      });
    }

    // Continuous bouncing animation for social icons
    iconRefs.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: -20,
          scale: 1.1,
          repeat: -1,
          yoyo: true,
          duration: 1.2,
          delay: index * 0.2,
          ease: "bounce.out",
        });
      }
    });
  }, []);

  return (
    <Box
      ref={footerRef}
      sx={{
        width: "100%",
        backgroundImage: `url(${footerbg})`,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        height: "70vh",
        display: "flex",
        alignItems: "center",
        color: "#fff",
      }}
    >
      <Container>
        <Grid container spacing={4} sx={{ position: "relative", zIndex: 2 }}>
          
          {/* Left Section */}
          <Grid item xs={12} sm={3}>
            <Box sx={{ display: "flex", alignItems: "center", cursor: "pointer" ,mb:4}}>
              <img src={logos.dezignshark} alt="logo" className="logo-img" />
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.7, textAlign: "justify" }}>
              Dezign Shark is a data-driven and results-oriented digital marketing agency that specializes in 
              providing 360° digital marketing services, innovative branding strategies, and creative design solutions.
            </Typography>
            {/* Animated Social Icons */}
            <Box sx={{ display: "flex", gap: 1 ,mt:3}}>
              {[FacebookIcon, TwitterIcon, YouTubeIcon, LinkedInIcon].map((Icon, index) => (
                <IconButton
                  key={index}
                  ref={(el) => {
                    if (el) iconRefs.current[index] = el;
                  }}
                  sx={{
                    color: "#fff",
                    transition: "transform 0.3s ease-in-out, color 0.3s",
                    "&:hover": { color: "#fc0000", transform: "scale(1.2) rotate(-5deg)" },
                  }}
                >
                  <Icon />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Newsletter Section */}
          <Grid item xs={12} sm={3}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Newsletter
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7, mb: 2, textAlign: "justify" }}>
              Get the latest news & other tips. There are many variations of passages available.
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <TextField
                variant="outlined"
                placeholder="Your Email"
                size="small"
                fullWidth
                sx={{
                  bgcolor: "#fff",
                  borderRadius: "4px",
                  "& input": { padding: "10px" },
                }}
              />
              <IconButton
                sx={{
                  bgcolor: "#fc0000",
                  color: "#fff",
                  borderRadius: "4px",
                  ml: 1,
                  transition: "transform 0.3s ease-in-out, background 0.3s",
                  "&:hover": { bgcolor: "#ffb347", transform: "scale(1.1)" },
                }}
              >
                <SendIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Gallery Section */}
          <Grid item xs={12} sm={2}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
              Gallery
            </Typography>
            <Grid container spacing={1}>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <Grid item xs={4} key={index}>
                  <Box
                    sx={{
                      width: "100%",
                      height: "60px",
                      bgcolor: "#444",
                      borderRadius: "4px",
                      backgroundImage: `url(https://source.unsplash.com/80x80/?team,people)`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2, textAlign: "start" }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "start", mb: 1, textAlign: "start" }}>
              <LocationOnIcon sx={{ mr: 1, color: "#fc0000" }} /> 
              68, 3rd Floor, Senore Colony, Film Nagar, Hyderabad, Telangana 500008
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "start", mb: 1, textAlign: "start" }}>
              <PhoneIcon sx={{ mr: 1, color: "#fc0000" }} />
              +91 799 799 2885
            </Typography>
            <Typography variant="body2" sx={{ display: "flex", alignItems: "start", mb: 2, textAlign: "start" }}>
              <EmailIcon sx={{ mr: 1, color: "#fc0000" }} /> info@dezignshark.com
            </Typography>

            
          </Grid>
        </Grid>

        {/* Footer Bottom */}
        <Box
          sx={{
            textAlign: "center",
            mt: 5,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.2)",
            position: "relative",
            zIndex: 2,
          }}
        >
          <Typography variant="body2">
            Copyrights 2025. All Rights Reserved. Designed by{" "}
            <span style={{ color: "#fc0000", fontWeight: "bold" }}>Dezign Shark</span>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
