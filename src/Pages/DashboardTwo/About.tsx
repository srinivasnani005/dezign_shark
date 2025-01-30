import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography, Button, Container } from "@mui/material";
import { gsap } from "gsap";
import { abouttwo, whychoose, aboutthree, aboutshap,  } from "../../assets"; // Ensure correct paths

const HomePage = () => {
  const textRef = useRef(null);
  const mainImageRef = useRef(null);
  const smallImageRef = useRef(null);
  const floatingImageRef = useRef(null);
  const triangleRef = useRef(null);
  const circleImageRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    // Text and Image Animations
    gsap.from(textRef.current, { opacity: 0.9, y: 50, duration: 1 });
    gsap.from(mainImageRef.current, { opacity: 0.9, scale: 0.8, duration: 1.2 });
    gsap.from(smallImageRef.current, { opacity: 0.9, x: 50, duration: 1 });
    gsap.from(floatingImageRef.current, { opacity: 0.9, y: 30, duration: 1 });

    // Floating Triangle Animation
    gsap.to(triangleRef.current, {
      y: 20,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    // Floating effect for small image
    gsap.to(smallImageRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // Floating effect for rectangular image
    gsap.to(floatingImageRef.current, {
      scale: 1.05,
      repeat: -1,
      yoyo: true,
      duration: 1.5,
      ease: "power1.inOut",
    });

    // Continuous rotation animation for the new circular image
    gsap.to(circleImageRef.current, {
      rotate: 360,
      repeat: -1,
      duration: 6,
      ease: "linear",
    });
  }, []);
  const handleMouseEnter = () => {
    gsap.to(circleRef.current, {
      y: 20, // Moves down
      backgroundColor: "pink",
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(circleRef.current, {
      y: 0, // Moves back up
      backgroundColor: "orange",
      duration: 0.5,
      ease: "power2.out",
    });
  };
  return (
    <Box sx={{height:'auto',pb:14}} bgcolor='black'>

        <Container maxWidth="xl">
        <Box sx={{ position: "relative", margin: "auto" ,}}>
            <Grid container spacing={4} alignItems="center">
            {/* Left Content (Images) */}
            <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", textAlign: "center", display: "flex", justifyContent: "center" }}>
                {/* Main Circular Image */}
                <Box ref={mainImageRef} sx={{ position: "relative" ,zIndex: 2}}>
                    <img
                    src={whychoose}
                    alt="Main"
                    style={{
                        width: "780px",
                        height: "780px",
                        borderRadius: "50%",
                        objectFit: "cover",
                        boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                    }}
                    />
                    {/* Floating Triangle */}
                    <Box
                    ref={triangleRef}
                    sx={{
                        position: "absolute",
                        top: "20px",
                        left: "10px",
                        width: "150px",
                        height: "150px",
                        backgroundColor: "#fc0000",
                        clipPath: "polygon(0 0, 100% 50%, 0 100%)",
                    }}
                    />
                </Box>

                {/* Overlapping Rectangular Image */}
                <Box
                    ref={floatingImageRef}
                    sx={{
                    position: "absolute",
                    bottom: "-40px",
                    left: "0px",
                    border: "5px solid white",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                    zIndex: 1000,
                    objectFit: "fit",

                    }}
                >
                    <img src={abouttwo} alt="Overlay" style={{ width: "300px", height: "250px" }} />
                </Box>

                {/* NEW Circular Animated Image Below */}
                <Box
                    // ref={circleImageRef}
                    sx={{
                    position: "absolute",
                    bottom: "-75px",
                    left: "85%",
                    transform: "translateX(-50%)",
                    width: "250px",
                    height: "250px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    //   border: "4px solid white",
                    //   boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                    // zIndex: -1,
                    
                    }}
                >
                    <img
                    ref={circleImageRef}
                    src={aboutshap}
                    alt="Animated Circle"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                </Box>
                </Box>
            </Grid>

            {/* Right Content (Text & Small Image) */}
            <Grid item xs={12} md={6}>
                <Box ref={textRef}>
                <Typography variant="h6" sx={{ color: "#fc0000", fontWeight: 600 ,textAlign:'start'}}>
                    ABOUT AGENCY
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1, textAlign: "justify" ,fontSize:{md:'40px',xs:'20px'}}}>
                    We're Sharp Brands Creators Open For Any New Collabs
                </Typography>
                <Typography sx={{ color: "gray", mt: 2, textAlign: "justify" }}>
                    Grow brands through bold and strategic creative, focused on searching new ways to showcase user content
                    on digital support and envisioning the future arts.
                </Typography>

                {/* "High Standard" Flex with Small Image */}
                <Box sx={{ display: "flex", alignItems: "center", mt: 3, gap: 5 }}>
                    <Box>
                    <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "justify" }}>
                        High Standard
                    </Typography>

                    <Typography sx={{ color: "gray", mt: 1, textAlign: "justify" }}>
                        Grow brands through bold and strategic creative, focused on searching new ways to showcase user
                        content on digital support and envisioning the future arts.
                    </Typography>
                    </Box>
                    <Box>
                    <img
                        ref={smallImageRef}
                        src={aboutthree}
                        alt="High Standard Icon"
                        style={{ width: "200px", height: "200px", borderRadius: "10px", objectFit: "cover" }}
                    />
                    </Box>
                </Box>

                {/* CTA Button */}
             <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      {/* Circle */}
      <Box
        ref={circleRef}
        sx={{
          width: 100,
          height: 100,
          backgroundColor: "orange",
          borderRadius: "50%",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Text Below Circle */}
      <Typography
        sx={{
          marginTop: 1,
          fontSize: "14px",
          fontWeight: "bold",
          color: "black",
          textAlign: "center",
        }}
      >
        View All Our News
      </Typography>
    </Box>
                </Box>
            </Grid>
            </Grid>
        </Box>
        </Container>
    </Box>
  );
};

export default HomePage;
