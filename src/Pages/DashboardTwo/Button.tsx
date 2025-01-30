import React, { useEffect, useRef } from "react";
import { Box, Link, Typography } from "@mui/material";
import { gsap } from "gsap";

const AnimatedLink: React.FC = () => {
  const linkRef = useRef<HTMLAnchorElement | null>(null);
  const colorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!linkRef.current || !colorRef.current) return;

    let hoverTL = gsap.timeline({ paused: true });

    hoverTL.to(colorRef.current, {
      width: "calc(100% + 1.3em)",
      ease: "elastic.out(0.25, 0.3)",
      duration: 0.4
    });

    hoverTL.to(colorRef.current, {
      width: "2em",
      left: "calc(100% - 1.45em)",
      ease: "elastic.out(0.4, 0.3)",
      duration: 0.6
    });

    const linkElement = linkRef.current;

    const handleMouseEnter = () => hoverTL.play();
    const handleMouseLeave = () => hoverTL.reverse();

    linkElement.addEventListener("mouseenter", handleMouseEnter);
    linkElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      linkElement.removeEventListener("mouseenter", handleMouseEnter);
      linkElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#141414",
        p: 2
      }}
    >
      <Link
        ref={linkRef}
        href="#"
        target="_blank"
        underline="none"
        sx={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#fff",
          position: "relative",
          display: "flex",
          alignItems: "center",
          cursor: "pointer"
        }}
      >
        <Box
          ref={colorRef}
          sx={{
            width: "2em",
            height: "2em",
            borderRadius: "2em",
            backgroundColor: "#3333ff",
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            left: "-0.65em"
          }}
        />
        <Typography component="span" sx={{ position: "relative" }}>
          READ MORE
        </Typography>
        <Typography
          component="i"
          className="fa-solid fa-arrow-right"
          sx={{ position: "relative", ml: 1 }}
        />
      </Link>
    </Box>
  );
};

export default AnimatedLink;
