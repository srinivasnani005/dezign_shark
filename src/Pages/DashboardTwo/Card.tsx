import React, { useEffect, useRef } from "react";
import { Box, Typography, CardMedia, Grid } from "@mui/material";
import { gsap } from "gsap";
import { serviceimg } from "../../assets";

// Image Assets
const mainImage = "https://cdn.shopify.com/s/files/1/0747/3829/products/mL3927.jpg?v=1574110221";
const playButton = "https://raw.githubusercontent.com/NaveenPantra/card_ui_interaction/master/play.png";
const starIcon = "https://raw.githubusercontent.com/NaveenPantra/card_ui_interaction/master/star.png";
const soldierIcon = "https://raw.githubusercontent.com/NaveenPantra/card_ui_interaction/master/soldier.png";
const onlineIcon = "https://raw.githubusercontent.com/NaveenPantra/card_ui_interaction/master/onlinegame.png";
const multiplayerIcon = "https://raw.githubusercontent.com/NaveenPantra/card_ui_interaction/master/multiplayer.png";
const cardTypeImage = serviceimg // Card Type Image

const GameCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const figureRef = useRef<HTMLDivElement | null>(null);
  const playButtonRef = useRef<HTMLImageElement | null>(null);
  const platformInfoRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    const figure = figureRef.current;
    const playButton = playButtonRef.current;
    const platformInfo = platformInfoRef.current;

    if (card && figure && playButton && platformInfo) {
      gsap.set(playButton, { opacity: 0, scale: 1 });
      gsap.set(platformInfo, { opacity: 0, scale: 0 });

      card.addEventListener("mouseenter", () => {
        gsap.to(figure, { y: "-7.7rem", scale: 0.7, duration: 0.5, ease: "power3.out" });
        gsap.to(playButton, { opacity: 1, scale: 2.1, y: "-300%", duration: 0.5, ease: "elastic.out(1, 0.5)" });
        gsap.to(platformInfo, { opacity: 1, scale: 1, y: "6rem", duration: 0.5, ease: "power3.out" });
      });

      card.addEventListener("mouseleave", () => {
        gsap.to(figure, { y: "0", scale: 1, duration: 0.5, ease: "power3.out" });
        gsap.to(playButton, { opacity: 0, scale: 1, y: "0", duration: 0.3 });
        gsap.to(platformInfo, { opacity: 0, scale: 0, y: "0", duration: 0.3 });
      });
    }
  }, []);

  return (
    <Box
      ref={cardRef}
      sx={{
        width: 230,
        height: 340,
        position: "relative",
        boxShadow: "0 2rem 6rem rgba(0, 0, 0, 0.3)",
        borderRadius: "5px",
        transition: "transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "&:hover": { transform: "scale(1.4)", zIndex: 999 },
        m: 30,
      }}
    >
      {/* Top Image */}
      <Box ref={figureRef} sx={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, zIndex: 1000 }}>
        <CardMedia component="img" image={mainImage} alt="game" sx={{ width: "100%", height: "100%", borderRadius: "5px" }} />
        
        {/* Play Button */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.3)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            opacity: 0,
            transition: "opacity 0.4s",
          }}
        >
          <img ref={playButtonRef} src={playButton} alt="Play" style={{ width: 40, height: 40 }} />
        </Box>
      </Box>

      {/* Description */}
      <Box ref={platformInfoRef} sx={{  backgroundColor: "#ecf0f1", borderRadius: "5px", zIndex: -10 }}>
        
        {/* Card Type */}
        <Box sx={{ display: "flex", alignItems: "center",  }}>
          <img src={cardTypeImage} alt="Card Type" style={{width:'100%'}} />
          {/* <Typography sx={{ fontSize: "1rem", fontWeight: 500, color: "#2c3e50" }}>Action / Shooter</Typography> */}
        </Box>

        {/* Game Title */}
        <Typography
          sx={{
            padding: "0px 10px",
            color: "black",
            fontSize: "1.5rem",
            fontWeight: 600,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          Counter Strike: Global Offensive
        </Typography>

        {/* Game Details */}
        <Grid container spacing={1} sx={{ padding: "10px", justifyContent: "center" }}>
          {[starIcon, soldierIcon, onlineIcon, multiplayerIcon].map((icon, idx) => (
            <Grid item key={idx}>
              <Box sx={{ textAlign: "center" }}>
                <img src={icon} alt="icon" width={24} height={24} />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default GameCard;
