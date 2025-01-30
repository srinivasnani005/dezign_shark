import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Grid, LinearProgress, Avatar } from "@mui/material";
import { gsap } from "gsap";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { project } from "../../assets";
import '@fontsource/quantico'; // Import the font
import { GrDocumentConfig } from "react-icons/gr";



const HeroSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.from(containerRef.current, {  y: 50, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        px: 10,
        py: 12,
        bgcolor: "#fff",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {/* Left Content Section */}
      <Box sx={{ flex: 1, maxWidth: "50%" }}>
        {/* Decorative Dots */}
        <Box sx={{ position: "absolute", top: 20, left: 50, width: 10, height: 10, bgcolor: "#f97316", borderRadius: "50%" }} />
        <Box sx={{ position: "absolute", top: 30, left: 70, width: 14, height: 14, bgcolor: "#feb546", borderRadius: "50%" }} />

        <Typography sx={{ fontWeight: 600, fontSize: "14px", color: "#fc0000",textAlign: 'start' }}>
          .: TRUSTED WEBSITE DESIGN AGENCY :.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: "bold", mt: 2, color: "#222" ,textAlign: 'start'}}>
          Get Now Great Design <br />
          <Typography component="span" sx={{ fontWeight: "bold", display: "inline", color: "#222",textAlign: 'start' }}>
            Solution
          </Typography>
        </Typography>

        <Typography sx={{ mt: 2, fontSize: "18px", fontWeight: "bold", color: "#fc0000",textAlign: 'start' }}>
          We combine strategy with marketing, design
        </Typography>

        <Typography sx={{ mt: 1, fontSize: "14px", color: "#777", maxWidth: "500px" ,textAlign: 'start'}}>
          Analysis of the current business model, assessment of the company’s competitive
          activeness and market position, financial condition, as well as all their minimization
          in the medium long-term prospects.
        </Typography>

        {/* Expertise Progress Bar */}
        {/* <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "4px" }}>
              <GrDocumentConfig />
            </Box>
            <Typography sx={{ fontWeight: 600 }}>Digital Market Expert</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, ml: 2 }}>
            <LinearProgress variant="determinate" value={89} sx={{ height: 6, bgcolor: "#eee", "& .MuiLinearProgress-bar": { bgcolor: "#f97316" } }} />
          </Box>
          <Typography sx={{ ml: 1, fontWeight: "bold", color: "#f97316" }}>89%</Typography>
        </Box> */}

        {/* CEO Section */}
        {/* <Box sx={{ display: "flex", alignItems: "center", mt: 4 }}>
          <Avatar src={project} alt="CEO" sx={{ width: 56, height: 56, border: "2px solid #fc0000" }} />
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ fontWeight: "bold" }}>Leonard Heizer</Typography>
            <Typography sx={{ fontSize: "14px", color: "#777" }}>CEO</Typography>
          </Box>
        </Box> */}

        {/* More About Us Button (Circular with Arrow) */}
        {/* <Button
          variant="contained"
          sx={{
            mt: 3,
            bgcolor: "#f97316",
            borderRadius: "50%",
            width: 90,
            height: 90,
            fontWeight: "bold",
            textTransform: "none",
            color: "#fff",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            "&:hover": { bgcolor: "#e65c00" },
            position: "relative",
          }}
        >
          More <br /> about us
          <ArrowForwardIcon sx={{ position: "absolute", bottom: 8, right: 8, fontSize: "18px" }} />
        </Button> */}
      </Box>

      {/* Right Image Section */}
      <Box sx={{ flex: 1, maxWidth: "50%", display: "flex", justifyContent: "center", position: "relative" }}>
        <Box
          component="img"
          src={project}
          alt="Team"
          sx={{
            width: "275px",
            borderRadius: 2,
            boxShadow: 3,
            position: "relative",
            zIndex: 2,
            height:'350px'
          }}
        />
        {/* <Box
          component="img"
          src={project}
          alt="Designer"
          sx={{
            width: 200,
            borderRadius: 2,
            boxShadow: 3,
            border: "4px solid white",
            position: "absolute",
            bottom: -71,
            right: 68,
            zIndex: 3,
            height:'300px'
          }}
        /> */}
        {/* Experience Label (13 Years) */}
        {/* <Box
          sx={{
            position: "absolute",
            bottom: 10,
            left: -10,
            bgcolor: "#f97316",
            color: "#fff",
            fontWeight: "bold",
            fontSize: "20px",
            px: 2,
            py: 1,
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            zIndex: 4,
          }}
        >
          13 <Typography sx={{ fontSize: "12px", ml: 1 }}>Years Experience</Typography>
        </Box> */}
<Box
      sx={{
        position: "absolute",
        bottom: "-27px",
        left: "120px",
        height: "120px",
        width: "146px",
        backgroundColor: "#fc0000", // Replace with var(--thm-base) if using CSS variables
        display: "flex",
        alignItems: "center",
        paddingLeft: "25px",
        borderBottomRightRadius: "30px",
        // justifyContent:'center',
        zIndex: 3,
        "&::before": {
          content: '""',
          position: "absolute",
          top: "-23px",
          left: 0,
          borderBottom: "23px solid #fc0000", // Replace with var(--thm-base)
          borderRight: "30px solid transparent",
          
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "96px",
          fontWeight: 600,
          color: "#fff", // Replace with var(--thm-white)
        //   letterSpacing: "-3.84px",
          lineHeight: "96px",
          fontFamily: "'Quantico', sans-serif",
        }}
        variant="h1"
      >
        13
      </Typography>
      <Typography
        sx={{
          position: "absolute",
          display: "inline-block",
          color: "#fff", // Replace with var(--thm-white)
          fontWeight: 600,
          letterSpacing: "-0.64px",
          lineHeight: "20px",
          textTransform: "capitalize",
          transform: "rotate(-90deg)",
          top: "40px",
          right: "8px",
        }}
      >
        years <br />
        <span style={{ fontSize: "16px" }}>experience</span>
      </Typography>
    </Box>
      </Box>
    </Box>
  );
};

export default HeroSection;
