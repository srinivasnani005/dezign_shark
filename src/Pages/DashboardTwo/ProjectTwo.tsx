import React, { useEffect, useRef } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { gsap } from "gsap";
import { project } from "../../assets"; // Replace with actual image path
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ProjectTwo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
      );
    }

    cardRefs.current.forEach((card, index) => {
      if (card) {
        const image = card.querySelector(".image") as HTMLImageElement;
        const overlay = card.querySelector(".overlay") as HTMLDivElement;
        const button = buttonRefs.current[index];

        gsap.set(card, { transformStyle: "preserve-3d", perspective: 1000 });
        gsap.set(image, { scale: 1 });
        gsap.set(overlay, { opacity: 0, scale: 0.8 });
        gsap.set(button, { opacity: 0, y: 20, scale: 0.9 });

        card.addEventListener("mouseenter", () => {
          gsap.to(card, { rotateY: 10, rotateX: 5, duration: 0.6, ease: "power3.out" });
          gsap.to(image, { scale: 1.1, duration: 0.5, ease: "power3.out" });
          gsap.to(overlay, { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" });
          gsap.to(button, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "elastic.out(1, 0.5)" });
        });

        card.addEventListener("mouseleave", () => {
          gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: "power3.out" });
          gsap.to(image, { scale: 1, duration: 0.5, ease: "power3.out" });
          gsap.to(overlay, { opacity: 0, scale: 0.8, duration: 0.4, ease: "power2.out" });
          gsap.to(button, { opacity: 0, y: 20, scale: 0.9, duration: 0.3 });
        });
      }
    });
  }, []);

  return (
    <Box ref={containerRef} bgcolor="white">
        <Container maxWidth='xl'>

            <Grid container spacing={4} sx={{ pt: 2, mb: 2 }}>
                {/* Left Column */}
                <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography variant="caption" sx={{ color: "#fc0000", fontWeight: "bold", textTransform: "uppercase" }}>
                    . Popular Projects .
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 ,color:'black'}}>
                    Stunning Works
                    </Typography>
                    <Typography variant="h4" sx={{ fontWeight: "bold", color: "#fc0000" }}>
                    Explore Now
                    </Typography>

                    {[0, 1].map((index) => (
                    <Box
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el as HTMLDivElement | null)}
                        sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "12px",
                        mt: 2,
                        cursor: "pointer",
                        transformStyle: "preserve-3d",
                        perspective: 1000,
                        transition: "transform 0.5s ease-out",
                        "&:hover": { transform: "rotateY(10deg) rotateX(5deg) scale(1.05)" },
                        }}
                    >
                        <img src={project} alt="" className="image" style={{ width: "100%", borderRadius: "12px", display: "block" }} />

                        <Box className="overlay" sx={{ 
                        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                        background: "linear-gradient(135deg, rgba(255,106,61,0.6), rgba(0,0,0,0.7))",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        borderRadius: "12px", backdropFilter: "blur(5px)",
                        }} />

                        <Button
                        ref={(el) => (buttonRefs.current[index] = el as HTMLButtonElement | null)}
                        sx={{
                            position: "absolute",
                            bottom: "10%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "linear-gradient(45deg, #FF6A3D, #FF3D77)",
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "12px 24px",
                            borderRadius: "30px",
                            boxShadow: "0 0 20px rgba(255, 106, 61, 0.5)",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": { transform: "translateX(-50%) scale(1.1)", boxShadow: "0 0 30px rgba(255, 106, 61, 0.8)" },
                        }}
                        >
                        View Project <ArrowForwardIcon sx={{ ml: 1 }} />
                        </Button>
                    </Box>
                    ))}
                </Box>
                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={6}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    {[2, 3].map((index) => (
                    <Box
                        key={index}
                        ref={(el) => (cardRefs.current[index] = el as HTMLDivElement | null)}
                        sx={{
                        position: "relative",
                        overflow: "hidden",
                        borderRadius: "12px",
                        mt: 2,
                        cursor: "pointer",
                        transformStyle: "preserve-3d",
                        perspective: 1000,
                        transition: "transform 0.5s ease-out",
                        "&:hover": { transform: "rotateY(10deg) rotateX(5deg) scale(1.05)" },
                        }}
                    >
                        <img src={project} alt="" className="image" style={{ width: "100%", borderRadius: "12px", display: "block" }} />

                        <Box className="overlay" sx={{ 
                        position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
                        background: "linear-gradient(135deg, rgba(255,106,61,0.6), rgba(0,0,0,0.7))",
                        display: "flex", justifyContent: "center", alignItems: "center",
                        borderRadius: "12px", backdropFilter: "blur(5px)",
                        }} />

                        <Button ref={(el) => (buttonRefs.current[index] = el as HTMLButtonElement | null)}
                        sx={{
                            position: "absolute",
                            bottom: "10%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "linear-gradient(45deg, #FF6A3D, #FF3D77)",
                            color: "#fff",
                            fontWeight: "bold",
                            padding: "12px 24px",
                            borderRadius: "30px",
                            boxShadow: "0 0 20px rgba(255, 106, 61, 0.5)",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": { transform: "translateX(-50%) scale(1.1)", boxShadow: "0 0 30px rgba(255, 106, 61, 0.8)" },
                        }}>
                        View Project <ArrowForwardIcon sx={{ ml: 1 }} />
                        </Button>
                    </Box>
                    ))}
                </Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
  );
};

export default ProjectTwo;
