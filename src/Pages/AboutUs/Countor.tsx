import React, { useEffect, useRef } from "react";
import { Grid, Card, Typography, Box, Container } from "@mui/material";
import { BusinessCenter, EmojiEvents, Groups, AccessTime } from "@mui/icons-material";
import { gsap } from "gsap";
import { countershape } from "../../assets"; // Your background image

interface StatItem {
  id: number;
  number: number;
  text: string;
  icon: React.ReactElement;
}

const stats: StatItem[] = [
  { id: 1, number: 7000, text: "Projects Completed", icon: <BusinessCenter fontSize="large" /> },
  { id: 2, number: 16, text: "Honorable Awards", icon: <EmojiEvents fontSize="large" /> },
  { id: 3, number: 4000, text: "Satisfied Customers", icon: <Groups fontSize="large" /> },
  { id: 4, number: 25, text: "Years of Experience", icon: <AccessTime fontSize="large" /> }
];

const StatsGrid: React.FC = () => {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Counter animation
    stats.forEach((stat) => {
      gsap.fromTo(
        `#counter-${stat.id}`,
        { innerHTML: 0 },
        {
          innerHTML: stat.number,
          duration: 2.5,
          snap: { innerHTML: 1 },
          ease: "power2.out"
        }
      );
    });
  }, []);

  const handleMouseEnter = (index: number) => {
    if (cardRefs.current[index]) {
      gsap.to(cardRefs.current[index], {
        backgroundImage: `url(${countershape})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        scale: 1.05,
        rotateX: -10,
        rotateY: 10,
        boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.4)",
        duration: 0.1,
        ease: "power3.out"
        
      });

    //   gsap.fromTo(
    //     cardRefs.current[index],
    //     { clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" },
    //     { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", duration: 0.1, ease: "power3.out" }
    //   );

      gsap.to(`#counter-${stats[index].id}`, { color: "white", duration: 0.3 });
      gsap.to(`#title-${stats[index].id}`, { color: "lightgray", duration: 0.3 });
      gsap.to(`#icon-${stats[index].id}`, { color: "red", duration: 0.3 });
    }
  };

  const handleMouseLeave = (index: number) => {
    if (cardRefs.current[index]) {
      gsap.to(cardRefs.current[index], {
        backgroundImage: "none",
        backgroundColor: "#fff",
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        duration: 0.5,
        ease: "power3.out"
      });

      gsap.to(`#counter-${stats[index].id}`, { color: "black", duration: 0.3 });
      gsap.to(`#title-${stats[index].id}`, { color: "black", duration: 0.3 });
      gsap.to(`#icon-${stats[index].id}`, { color: "black", duration: 0.3 });
    }
  };

  return (
    <Box mt={8}>
      <Container>
        <Grid container spacing={3} justifyContent="center" p={4}>
          {stats.map(({ id, text, icon }, index) => (
            <Grid item key={id} xs={12} sm={6} md={3}>
              <Card
                ref={(el) => (cardRefs.current[index] = el)}
                sx={{
                  p: 4,
                  textAlign: "center",
                  backgroundColor: "#fff",
                  color: "#000",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  borderRadius: "15px",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  transformOrigin: "center",
                  perspective: "1000px",
                  overflow: "hidden",
                  position: "relative"
                }}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <Box id={`icon-${id}`} sx={{ display: "flex", justifyContent: "center", mb: 1, color: "black" }}>
                  {icon}
                </Box>
                <Typography id={`counter-${id}`} variant="h4" fontWeight="bold" color="black"></Typography>
                <Typography id={`title-${id}`} variant="subtitle1" color="black">
                  {text}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsGrid;
