import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SliderLogos } from "../../assets";

// List of client logos (imported from assets)
const clientLogos = [
  SliderLogos.slider1,
  SliderLogos.slider2,
  SliderLogos.slider3,
  SliderLogos.slider4,
  SliderLogos.slider5,
  SliderLogos.slider6,
  SliderLogos.slider7,
  SliderLogos.slider8,
  SliderLogos.slider9,
  SliderLogos.slider10,
  SliderLogos.slider11,
  SliderLogos.slider12,
  SliderLogos.slider13,
  SliderLogos.slider14,
  SliderLogos.slider15,
  SliderLogos.slider16,
  SliderLogos.slider17,
  SliderLogos.slider18,
  SliderLogos.slider19,
];

const ClientLogoSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const width = slider.scrollWidth / 2;

    // ✅ Slower scrolling (increased duration)
    gsap.to(slider, {
      x: -width,
      duration: 80, // ⬅️ Increase this value for slower scrolling
      repeat: -1,
      ease: "linear",
      modifiers: {
        x: (x) => `${parseFloat(x) % width}px`,
      },
    });

    // GSAP Floating Animation for Each Logo
    gsap.utils.toArray(".logo-item").forEach((item: any, index) => {
      gsap.fromTo(
        item,
        { y: 0, scale: 1 },
        {
          y: index % 2 === 0 ? -8 : 8, // Alternating floating direction
          scale: 1.1,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "easeInOut",
        }
      );
    });

    // Hover effect: Enlarge & Rotate Slightly
    gsap.utils.toArray(".logo-item").forEach((item: any) => {
      item.addEventListener("mouseenter", () => {
        gsap.to(item, { scale: 1.3, rotation: 5, duration: 0.3, ease: "power2.out" });
      });
      item.addEventListener("mouseleave", () => {
        gsap.to(item, { scale: 1, rotation: 0, duration: 0.3, ease: "power2.out" });
      });
    });
  }, []);

  return (
    <Box
      sx={{
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        width: "100%",
        background: "#0a192f", // Dark navy background
        padding: "30px 0",
        position: "relative",
      }}
    >
      {/* Fading Edges Effect */}
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          background: "linear-gradient(90deg, rgba(10,25,47,1) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 80%, rgba(10,25,47,1) 100%)",
          pointerEvents: "none",
        }}
      />

      <Box
        ref={sliderRef}
        sx={{
          display: "flex",
          gap: "50px",
          willChange: "transform",
        }}
      >
        {/* Duplicated Logos for Seamless Infinite Scrolling */}
        {[...clientLogos, ...clientLogos].map((logo, index) => (
          <Box
            key={index}
            className="logo-item"
            sx={{
              transition: "transform 0.3s",
              filter: "drop-shadow(2px 4px 8px rgba(255, 255, 255, 0.1))",
            }}
          >
            <img
              src={logo}
              alt={`Client Logo ${index}`}
              height={60}
              width='150px'
              style={{
                maxWidth: "200px",
                objectFit: "contain",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ClientLogoSlider;
