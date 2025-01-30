import React, { useState, useRef, useEffect } from "react";
import { Box, Typography, IconButton, Grid, Container } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { gsap } from "gsap";
import { aboutthree, abouttwo, serviceimg, servicesbg } from "../../assets"; // Ensure correct paths
import { CgArrowsExpandUpRight } from "react-icons/cg";

const HoverEffectSection: React.FC = () => {
  const [hovered, setHovered] = useState<number | null>(null);
  
  const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
  const arrowRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (hovered !== null) {
      gsap.to(imageRefs.current[hovered], {
        opacity: 1,
        rotate: -10,
        scale: 1.1,
        top: "5%",
        left: "30%",
        duration: 0.3,
        ease: "power3.out",
      });

      gsap.to(arrowRefs.current[hovered], {
        backgroundColor: "#fc0000",
        duration: 0.3,
      });
    }
  }, [hovered]);

  const handleMouseEnter = (index: number) => {
    setHovered(index);
  };

  const handleMouseLeave = (index: number) => {
    gsap.to(imageRefs.current[index], {
      opacity: 0,
      rotate: 0,
      scale: 1,
      top: "5%",
      left: "30%",
      duration: 0.3,
      ease: "power3.out",
      clearProps: "all",
    });

    gsap.to(arrowRefs.current[index], {
      backgroundColor: "#222",
      duration: 0.3,
      clearProps: "all",
    });

    setHovered(null);
  };

  return (
    <Box
      sx={{
        py: 8,
        position: "relative",
        textAlign: "center",
        background: `url(${servicesbg}) center/cover no-repeat`,
        color: "white",
        padding: "60px 20px",
      }}
    >
      <Container maxWidth="xl">
        <Typography variant="h6" sx={{ color: "#fc0000", fontWeight: "bold", textTransform: "uppercase" }}>
          Trusted Web Design Service
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "bold", mt: 2,color:'black' }}>
          Modern And Intuitive <br /> Web Solution
        </Typography>

        <Grid container spacing={4} sx={{ mt: 2, mb:2 }}>
          {sections.map((section, index) => (
            <Grid
              item
              xs={12}
              md={6}
              key={section.id}
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                cursor: "pointer",
                // borderBottom: "1px solid rgba(241, 19, 19, 0.3)",
                // "&:nth-of-type(3), &:nth-of-type(4)": {
                //   borderBottom: { md: "none" },
                // },
                "&:hover": {
                  color: "#fc0000",
                },
                mb:5 
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              {/* Hover Image (Now overlapping the text) */}
              <Box
                component="img"
                ref={(el) => (imageRefs.current[index] = el as HTMLImageElement | null)}
                src={section.image}
                alt={section.title}
                sx={{
                  position: "absolute",
                //   width: "250px",
                //   height: "120px",
                //   borderRadius: "10px",
                  opacity: 0,
                  top: "10px",
                  right: "0px",
                  transition: "opacity 0.3s ease-in-out",
                 
                }}
              />

              {/* Left Side - Number and Text */}
              <Box sx={{ flex: 1, textAlign: "left", position: "relative" }}>
                <Box sx={{display: "flex",
                alignItems: "center",
                justifyContent: "space-between",}}>

                    <Typography
                    variant="h6"
                    sx={{
                        fontSize: { md: "40px", xs: "20px" },
                        fontWeight: "bold",
                        WebkitTextStroke: "1px #999",
                        transition: "color 0.3s ease-in-out",
                        color: hovered === index ? "#fc0000" : "transparent",
                        mb: 2,
                    }}
                    >
                    0{section.id}
                    </Typography>
                    
                    {/* Right Side - Arrow Button */}
                    <IconButton
                        ref={(el) => (arrowRefs.current[index] = el as HTMLButtonElement | null)}
                        sx={{
                        width: "80px",
                        height: "80px",
                        backgroundColor: "#d9d9d9",
                        color: "white",
                        transition: "background-color 0.3s ease-in-out",
                        position: "relative",
                        zIndex: 3,
                        }}
                    >
                        <CgArrowsExpandUpRight style={{fontSize:'40px'}} />
                    </IconButton>
                </Box>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: "bold",
                    position: "relative",
                    zIndex: 2,
                    color: hovered === index ? "#fc0000" : "black",
                    mb: 2,
                  }}
                >
                  {section.title}
                </Typography>
                <Typography sx={{ color: "#666666", mt: 1 }}>{section.desc}</Typography>
              </Box>

            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// ✅ Services Data
const sections = [
  { id: 1, title: "SEO Marketing", desc: "Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support.", image: serviceimg },
  { id: 2, title: "Digital Marketing", desc: "Grow brands through bold and strategic creative, focused on searching new ways to showcase user content on digital support.", image: serviceimg },
  { id: 3, title: "Content Marketing", desc: "Helping brands through innovative content creation and marketing strategies for effective digital presence.", image: serviceimg },
  { id: 4, title: "Social Marketing", desc: "Enhancing social media impact through creative campaigns and audience engagement strategies.", image: serviceimg },
];

export default HoverEffectSection;
