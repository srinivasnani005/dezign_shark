import React, { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import gsap from "gsap";
import { AboutTwo } from "../../assets";
import TopHeader from "../../Components/Top/TopHeader";

const BannerSection: React.FC = () => {
  const shapeOneRef = useRef<HTMLImageElement | null>(null);
  const shapeTwoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // Bounce Animation for Shape 1 (Left & Right)
    gsap.to(shapeOneRef.current, {
      x: 50, // Moves right
      duration: 1.5,
      yoyo: true, // Reverse the animation
      repeat: -1, // Infinite loop
      ease: "power1.inOut",
    });

    // Bounce Animation for Shape 2 (Up & Down)
    gsap.to(shapeTwoRef.current, {
      y: 20, // Moves up
      duration: 1.5,
      yoyo: true, // Reverse the animation
      repeat: -1, // Infinite loop
      ease: "power1.inOut",
    });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        backgroundImage: `url(${AboutTwo.aboutbanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background: "rgba(0, 0, 0, 0.4)",
        }}
      />

        <TopHeader value="About"  />

      {/* Floating & Bouncing Images */}
      <img
        ref={shapeOneRef}
        src={AboutTwo.aboutshape_1}
        alt="shape one"
        style={{
          position: "absolute",
          top: "23%",
          left: "0%",
          zIndex: 2,
          opacity: "0.2",
          height: "auto",
        }}
      />
      <img
        ref={shapeTwoRef}
        src={AboutTwo.aboutshape_2}
        alt="shape two"
        style={{
          position: "absolute",
          top: "20%",
          right: "0%",
          zIndex: 2,
        }}
      />
      <img
        src={AboutTwo.vector}
        alt="shape two"
        style={{
          position: "absolute",
          top: "20%",
          right: "0%",
          zIndex: 2,
          opacity: "0.5",
        }}
      />
       

      {/* Gradient Triangle at Bottom Center with Opacity */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "240px",
          height: "200px",
          background: "linear-gradient(to bottom, rgba(184, 42, 42, 0.8), rgba(26, 26, 26, 0.8))", // Added opacity
          clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)", // Triangle shape
          zIndex: 1,
        }}
      >
        {/* Inner Triangle with More Opacity */}
        <div
          style={{
            position: "absolute",
            bottom: "0%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "180px",
            height: "140px",
            background: "linear-gradient(to bottom, rgba(171, 36, 36, 0.6), rgba(71, 61, 61, 0.6))", // Slightly more transparent
            clipPath: "polygon(50% 0%, 100% 100%, 0% 100%)",
          }}
        />
      </div>
    </Box>
  );
};

export default BannerSection;
