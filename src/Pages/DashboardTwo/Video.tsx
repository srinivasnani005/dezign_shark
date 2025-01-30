import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Modal, Container } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ReactPlayer from "react-player";
import { gsap } from "gsap";
import { video } from "../../assets"; // Ensure correct image import
import '@fontsource/quantico'; // Import the font

const VideoIntro: React.FC = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate Text (Slide & Fade)
    tl.from(textRef.current, {
    //   opacity: 0,
      y: 30,
      duration: 1,
      ease: "power3.out",
    });

    // Animate Play Button (Elastic Pop-In)
    tl.from(buttonRef.current, {
    //   opacity: 0,
      scale: 0,
      duration: 1,
      ease: "elastic.out(1, 0.5)",
    });

    // Hover Effect on Play Button
    gsap.to(buttonRef.current, {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 1,
      ease: "power1.inOut",
    });
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ background: "white" }}>
      <Container maxWidth="xl">
        <Box
          sx={{
            position: "relative",
            width: "100%",
            margin: "auto",
            textAlign: "center",
            py: 10,
          }}
        >
            <Typography variant="h5" textAlign='center'
            sx={{
                color:'#fc0000',
                fontWeight:600,
                fontSize:{
                    md:'35px',
                    xs:'14px'
                },
                mb:5
            }}
            >
                
                PLAY INTRO
            </Typography>
          {/* Background Image */}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              height: "650px",
              backgroundImage: `url(${video})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
            />

            {/* Play Button and Text */}
            <Box
              ref={textRef}
              sx={{
                position: "absolute",
                color: "#fff",
                textAlign: "center",
                zIndex: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                top:'30%',
                left:'30%'
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  fontFamily: "'Quantico', sans-serif",
                  fontSize:{
                    md:'90px',
                    xs:'14px'
                  }
                }}
              >
                PLAY INTRO
              </Typography>
              <Box
              sx={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
              >
                {/* Play Button with GSAP Hover Effect */}
                <IconButton
                        ref={buttonRef}
                        onClick={handleOpen}
                        sx={{
                        mt: 2,
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        color: "white",
                        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.4)" },
                        position: "relative",
                        width: "90px",
                        height: "90px",
                        }}
                    >
                        <PlayCircleOutlineIcon sx={{ fontSize: "70px", zIndex: 2 }} />
                        {/* Pulse Effect */}
                        <Box
                        sx={{
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            borderRadius: "50%",
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            animation: "pulse 1.5s infinite",
                            zIndex: 1,
                        }}
                        />
                    </IconButton>

                <Typography
                    variant="h3"
                    sx={{
                    fontWeight: "bold",
                    color: "#fc0000",
                    fontFamily: "'Quantico', sans-serif",
                    fontSize:{
                        md:'90px',
                        xs:'14px'
                    }

                    }}
                >
                    Video
                </Typography>
                    
              </Box>

            </Box>
          </Box>

          {/* Video Modal */}
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "80%",
                maxWidth: "800px",
                bgcolor: "black",
                borderRadius: "10px",
                outline: "none",
                boxShadow: 24,
                p: 2,
              }}
            >
              <ReactPlayer
                url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                width="100%"
                height="450px"
                controls
              />
            </Box>
          </Modal>
        </Box>
      </Container>

      {/* Pulse Effect Keyframes */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Quantico:wght@400;700&display=swap');

          @keyframes pulse {
            0% {
              transform: scale(1);
              opacity: 0.7;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.3;
            }
            100% {
              transform: scale(1);
              opacity: 0.7;
            }
          }
        `}
      </style>
    </Box>
  );
};

export default VideoIntro;
