import React, { useEffect, useRef } from "react";
import { Box, Grid, Typography, Container } from "@mui/material";
import gsap from "gsap";

const steps = [
  { id: "01", title: "Select our Service", description: "Lorem Ipsum Dolor Sit Amet, Consectetur Elit Sed Do eiusmod." },
  { id: "02", title: "Contact Worker Now", description: "Lorem Ipsum Dolor Sit Amet, Consectetur Elit Sed Do eiusmod." },
  { id: "03", title: "Discourse Detail Project", description: "Lorem Ipsum Dolor Sit Amet, Consectetur Elit Sed Do eiusmod." },
  { id: "04", title: "Finalize The Work", description: "Lorem Ipsum Dolor Sit Amet, Consectetur Elit Sed Do eiusmod." },
];

const WorkProcess: React.FC = () => {
  const boxRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const elements = boxRefs.current.filter(Boolean) as HTMLDivElement[];

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: "power2.out", stagger: 0.2 }
    );

    // Continuous Animation Loop
    elements.forEach((box, i) => {
      gsap.to(box, {
        scale: 1.05,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        delay: i * 0.3, // Creates a wave effect
      });
    });
  }, []);

  return (
    <Container sx={{ textAlign: "center", py: 5 }}>
      {/* Title Section */}
      <Typography variant="body2" sx={{ color: "#FF6700", fontWeight: "bold", letterSpacing: 1 }}>
        . : SIMPLE WORK PROCESS : .
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", mt: 1 ,color:'black'}}>
        See Our Working Process
      </Typography>
      <Typography variant="h4" sx={{ fontWeight: "bold", color: "#222" }}>
        How We Manage
      </Typography>

      {/* Steps Grid */}
      <Grid container spacing={3} justifyContent="center" sx={{ mt: 5 }}>
        {steps.map((step, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              ref={(el) => {
                boxRefs.current[index] = el as HTMLDivElement;
              }}
              component="div"
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: 250,
                background: "#EDEDED",
                padding: "30px 20px",
                textAlign: "end",
                borderRadius: "50px 50px 0 0px",
                borderRight: "6px solid black",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
                },
              }}
            >
              <Typography variant="body2" sx={{ fontWeight: "bold" ,color:'black'}}>
                {step.title}
              </Typography>
              <Typography variant="caption" sx={{ color: "#666", mt: 1 }}>
                {step.description}
              </Typography>

              {/* Number Badge */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: -15,
                  right: 0,
                  background: "#fc0000",
                  color: "#fff",
                  fontSize: "18px",
                  fontWeight: "bold",
                  padding: "10px 15px",
                  borderRadius: "50px 0 50px 50px",
                }}
              >
                {step.id}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default WorkProcess;
