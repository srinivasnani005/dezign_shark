import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography, Divider, IconButton, Link, Container } from "@mui/material";
import { LocationOn, Email, Phone, Facebook, Instagram, LinkedIn, YouTube } from "@mui/icons-material";
import { logos } from "../../../assets"; // Ensure your assets path is correct
import gsap from "gsap";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);
  return (
    <Box
      ref={footerRef}
      sx={{
        background: "linear-gradient(135deg, #0f0f0f, #1c1c1c)",
        color: "#fff",
        mt: 5,
        position: "relative",
        px: { xs: 4, sm: 5, md: 7 },
        py: { xs: 3, sm: 4, md: 3 },
        borderTop: "2px solid rgba(255, 255, 255, 0.1)",
      }}
    >
      <Container>
        <Grid container sx={{ flexDirection: { xs: "column", md: "row" } }} spacing={3}>
          {/* 1st Part - Company Information */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              backgroundColor: "#000",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              py: { xs: 3, sm: 4, md: 5 },
              px: { xs: 2, sm: 3, md: 4 },
              mt: { xs: -4, sm: -5, md: 0 },
              borderRadius: "8px",
              boxShadow: "0px 5px 20px rgba(255, 0, 0, 0.2)",
            }}
          >
            <img
              src={logos.dezignshark}
              alt="Company Logo"
              style={{ width: "100%", maxWidth: "240px", padding: 3, marginBottom: "20px" }}
            />
            <Typography variant="body2" sx={{ color: "#aaa", textAlign: "justify" }}>
              We are a leading company providing innovative solutions to help you grow your business. Contact us for more information about our services and how we can assist you.
            </Typography>
          </Grid>

          {/* 2nd Part - Get in Touch */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 2, sm: 3, md: 4 },
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
              Get in Touch
            </Typography>
            <Divider sx={{ borderColor: "#fff", mb: 2, width: "80%" }} />
            <Box sx={{ display: "flex", alignItems: "flex-start", mb: 1 }}>
              <LocationOn sx={{ mr: 1, color: "#fc0000" }} />
              <Typography variant="body2" sx={{ color: "#aaa", textAlign: "left" }}>
                68, 3rd Floor, Senore Colony, Film Nagar, Hyderabad, Telangana 500008
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Email sx={{ mr: 1, color: "#fc0000" }} />
              <Typography variant="body2" sx={{ color: "#aaa" }}>
                info@dezignshark.com
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
              <Phone sx={{ mr: 1, color: "#fc0000" }} />
              <Typography variant="body2" sx={{ color: "#aaa" }}>
                +91 799 799 2885
              </Typography>
            </Box>
            <Box sx={{ display: "flex", mt: 2 }}>
              <IconButton component={Link} href="https://www.facebook.com" sx={{ color: "#fff" }}>
                <Facebook />
              </IconButton>
              <IconButton component={Link} href="https://www.instagram.com" sx={{ color: "#fff" }}>
                <Instagram />
              </IconButton>
              <IconButton component={Link} href="https://www.linkedin.com" sx={{ color: "#fff" }}>
                <LinkedIn />
              </IconButton>
              <IconButton component={Link} href="https://www.youtube.com" sx={{ color: "#fff" }}>
                <YouTube />
              </IconButton>
            </Box>
          </Grid>

          {/* 3rd Part - Google Map */}
          <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-start" } }}>
            <Box sx={{ width: "100%", maxWidth: "390px", borderRadius: "12px", overflow: "hidden" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30456.088155453577!2d78.36486392714423!3d17.4112588135713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b43765a51d595d%3A0x888192e0597f0421!2sDezign%20Shark%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1724216499850!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                loading="lazy"
              />
            </Box>
          </Grid>
        </Grid>

        {/* Copyright Section */}
        <Divider sx={{ borderColor: "#fff", mt: 4 }} />
        <Box sx={{ textAlign: "center", mt: 2 }}>
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            © Dezign Shark 2025. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
