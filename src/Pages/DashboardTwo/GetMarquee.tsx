import React, { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";

const useMarquee = (ref: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current, {
        x: "-100%",
        repeat: -1,
        duration: 15, // Reduced speed (increase duration)
        ease: "linear",
      });
    }
  }, [ref]);
};

const GetMarquee: React.FC = () => {
  const marqueeRef = useRef<HTMLDivElement>(null);
  useMarquee(marqueeRef);

  return (
    <Box
      sx={{
        overflow: "hidden",
        whiteSpace: "nowrap",
        backgroundColor: "#1a1a1a",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        height: 40,
        position: "relative",
        width: "100%",
      }}
    >
      {/* Marquee Scrolling Content */}
      <Box
        ref={marqueeRef}
        sx={{
          display: "flex",
          gap: 6,
          fontSize: "14px",
          fontWeight: "bold",
          textTransform: "uppercase",
          minWidth: "100%",
        }}
      >
        {[...Array(10)].map((_, i) => (
          <Typography variant="body2" key={i} sx={{ display: "flex", alignItems: "center" ,fontWeight:600}}>
            {/* Play Icon (White) */}
            <span style={{ color: "#ffffff", marginRight: "8px" }}>►</span>
            {/* "Get Now:" (Orange) */}
            <span style={{ color: "#ff6600",marginRight: "4px"  }}>Get Now : </span>
            {/* "A Free Consultation For Design" (White) */}
            <span style={{ color: "#ffffff" }}> A Free Consultation For Design</span>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default GetMarquee;
