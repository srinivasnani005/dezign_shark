import React, { useEffect, useRef } from "react";
import { Box, Typography, Button } from "@mui/material";
import { gsap } from "gsap";
import { blog } from "../../assets"; // Ensure the image path is correct
import { GiWideArrowDunk } from "react-icons/gi";

const HookSection = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const arrowRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.from(containerRef.current, { opacity: 1, y: 50, duration: 1.2 })
      .from(imageRef.current, { opacity: 1, scale: 0.5, duration: 1 }, "-=0.5")
      .from(arrowRef.current, { opacity: 1, x: -30, rotate: -15, duration: 0.8 }, "-=0.8")
      .from(textRef.current, { opacity: 1, y: 20, duration: 1 }, "-=0.6")
      .from(buttonRef.current, { opacity: 1, scale: 0.8, duration: 0.7 }, "-=0.5");

    // Hover Effects
    gsap.to(imageRef.current, {
      scale: 1.05,
      rotate: 5,
      duration: 0.5,
      paused: true,
      ease: "power1.inOut",
    });

    gsap.to(arrowRef.current, {
      scale: 1.2,
      rotate: 10,
      duration: 0.5,
      paused: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <Box
      ref={containerRef}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        mt: 6,
        position: "relative",
        backgroundColor: "#F8F9FA",
        // py: 5,
        // px: 3,
      }}
    >
      {/* Image and Arrow Container */}
      <Box sx={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
        {/* Circular Image */}
        <Box
          ref={imageRef}
          component="img"
          src={blog}
          alt="Marketing Strategy"
          sx={{
            width: 350,
            height: 350,
            borderRadius: "50%",
            objectFit: "cover",
            zIndex: 1,
            transition: "transform 0.4s ease-in-out",
            "&:hover": { transform: "scale(1.05) rotate(5deg)" },
          }}
        />

        {/* Animated Arrow */}
        <Box
          ref={arrowRef}
          sx={{
            position: "absolute",
            right: -35,
            width: 160,
            height: 160,
            zIndex: 2,
            borderRadius: "100px 100px 0px 100px",
            background: "#fc0000",
            color: "#fff",
            fontSize: "48px",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            transition: "transform 0.4s ease-in-out",
            "&:hover": { transform: "scale(1.2) rotate(10deg)" },
          }}
        >
          <GiWideArrowDunk />
        </Box>
      </Box>

      {/* Heading */}
      <Typography
        ref={textRef}
        variant="h5"
        sx={{ fontWeight: "bold", mt: 3, color: "#222", fontSize: { xs: "22px", sm: "36px" } }}
      >
        Ready to Elevate Your Digital Marketing? <br /> Let's Talk Strategy!
      </Typography>

      {/* CTA Button */}
      <Button
        ref={buttonRef}
        variant="contained"
        sx={{
          mt: 3,
          backgroundColor: "#fc0000",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "18px",
          px: 4,
          py: 1.5,
          borderRadius: "30px",
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: "#d40000",
            transform: "scale(1.05)",
          },
        }}
      >
        Get in Touch
      </Button>
    </Box>
  );
};

export default HookSection;
