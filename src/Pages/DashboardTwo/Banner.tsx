import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { gsap } from "gsap";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { banner, dashboardbg, download } from "../../assets";

const Banner = () => {
  const titleRef = useRef(null);
  const agencyRef = useRef(null);
  const videoRef = useRef(null);
  const arrowRef = useRef(null);
  const imagesRef = useRef(null);
  const textCircleRef = useRef(null);


  useEffect(() => {
    gsap.to(titleRef.current, {
      y: -10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(agencyRef.current, {
      x: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(videoRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });

    gsap.to(arrowRef.current, {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.to(textCircleRef.current, {
        rotate: 360,
        duration: 5,
        repeat: -1,
        ease: "linear",
    });

    gsap.to(imagesRef.current, {
      scale: 1.05,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        background: `url(${dashboardbg}) no-repeat center center/cover`,
        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "5% 5%",
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* Left Content */}
        <Grid item xs={12} md={12}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                mt:5,
              }}
            >
              <Box ref={arrowRef}>
                <img
                  src={download}
                  alt="Download"
                  style={{
                    height: "100%",
                    objectFit: "cover",
                    filter: "invert(1) brightness(1000%)", 
                  }}
                />
              </Box>
              {/* <Box
                ref={videoRef}
                sx={{
                  width: "370px",
                  height: "172px",
                  borderRadius: "10px",
                  overflow: "hidden",
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#222",
                  boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                  borderTopRightRadius: "125px",
                  borderBottomRightRadius: "125px",
                }}
              >
                <img
                  src={banner}
                  alt="Marketing"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                
                <Box
                  sx={{
                    position: "absolute",
                    width: "50px",
                    height: "50px",
                    background: "rgba(255, 165, 0, 0.9)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    transition: "0.3s",
                    "&:hover": { background: "rgba(255, 165, 0, 1)" },
                  }}
                >
                  <PlayCircleOutlineIcon sx={{ fontSize: 30, color: "#fff" }} />
                </Box>
              </Box> */}

                {/* Video Section with Rotating Text */}
            
                 <Box
                    ref={videoRef}
                    sx={{
                    width: "370px",
                    height: "172px",
                    borderRadius: "10px",
                    overflow: "hidden",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#222",
                    boxShadow: "0 0 10px rgba(255,255,255,0.5)",
                    borderTopRightRadius: "125px",
                    borderBottomRightRadius: "125px",
                    }}
                >
                    <img
                    src={banner}
                    alt="Marketing"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                    />

                    {/* Rotating Text Circle with Letter Spacing */}
                    <Box
                    ref={textCircleRef}
                    sx={{
                        position: "absolute",
                        width: "120px", // Increased size for spacing
                        height: "120px",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: "bold",
                        textTransform: "uppercase",
                        color: "white",
                        whiteSpace: "nowrap",
                    }}
                    >
                    <svg width="120" height="120">
                        <defs>
                        <path
                            id="circlePath"
                            d="M 60,60 m -50,0 a 50,50 0 1,0 100,0 a 50,50 0 1,0 -100,0"
                        />
                        </defs>
                        <text fill="white" fontSize="10px" letterSpacing="2px">
                        <textPath
                            xlinkHref="#circlePath"
                            style={{ letterSpacing: "3px" }} // Increased letter spacing
                        >
                            Play Video • Play Video • Play Video •
                        </textPath>
                        </text>
                    </svg>
                    </Box>

                    {/* Play Button (Now with More Gap from Text Circle) */}
                    <Box
                    sx={{
                        position: "absolute",
                        width: "45px", // Slightly reduced size to enhance spacing
                        height: "45px",
                        background: "rgba(255, 165, 0, 0.9)",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                        transition: "0.3s",
                        "&:hover": { background: "rgba(255, 165, 0, 1)" },
                    }}
                    >
                    <PlayCircleOutlineIcon sx={{ fontSize: 25, color: "#fff" }} />
                    </Box>
                </Box>
            </Box>


          </Container>
        </Grid>

        {/* Right Side Images (Flex Row) */}
        <Grid item xs={12} md={12}>
          <Container maxWidth="xl">
            <Box ref={imagesRef}>
              <Typography
                ref={titleRef}
                variant="h1"
                sx={{
                  fontWeight: 600,
                  fontSize: {
                    md: "120px !important",
                    xs: "20px",
                  },
                  color: "#fff",
                  textAlign: "start",
                }}
              >
                Digital Marketing{" "}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  ref={agencyRef}
                  sx={{
                    fontWeight: "bold",
                    fontSize: {
                      md: "125px",
                      xs: "20px",
                    },
                    textTransform: "uppercase",
                    color: "transparent",
                    WebkitTextStroke: "2px #fc0000",
                  }}
                >
                  AGENCY
                </Typography>
                <Typography
                  sx={{
                    mt: 2,
                    fontSize: "1.1rem",
                    maxWidth: "500px",
                    color: "#bbb",
                    textAlign: "justify",
                  }}
                >
                  From traditional PR and thought leadership campaigns to
                  storytelling and creative social media management, we’ve got
                  you covered.
                </Typography>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>

      {/* Small Triangles Decoration */}
      {/* <Box
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "15%",
          display: "flex",
          gap: "10px",
        }}
      >
        <Box
          sx={{
            width: "0",
            height: "0",
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "20px solid white",
            opacity: 0.8,
          }}
        />
        <Box
          sx={{
            width: "0",
            height: "0",
            borderLeft: "20px solid transparent",
            borderRight: "20px solid transparent",
            borderBottom: "20px solid orange",
            opacity: 0.8,
          }}
        />
      </Box> */}
    </Box>
  );
};

export default Banner;
