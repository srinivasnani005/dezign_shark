import React, { useEffect, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { GiSevenPointedStar } from "react-icons/gi";
import gsap from 'gsap';
import '@fontsource/quantico'; // Import the font

// Styled Components
const MarqueeContainer = styled(Box)({
  width: '100%',
  backgroundColor: '#ffffff',
  padding: '20px 20px',
});

const MarqueeContent = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '50px',
});

// Styled Item Box
const ItemBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
});

// Styled Animated Text with hover effect
const AnimatedText = styled(Typography)({
  fontWeight: 'bold',
  display: 'inline-block',
  fontFamily: "'Quantico', sans-serif",
  color: 'black',
  transition: 'color 0.3s ease-in-out', // Smooth color transition
  '&:hover': {
    color: 'red', // Change to red on hover
  },
});

// Icon Wrapper
const IconWrapper = styled(Box)({
  fontSize: '14px',
  color: '#000',
});

const HeroMarquee: React.FC = () => {
  // ✅ Define the correct type for useRef
  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // GSAP Animation
  useEffect(() => {
    gsap.fromTo(
      textRefs.current,
      { y: 0 },
      {
        y: -10, // Move up
        repeat: -1, // Infinite loop
        yoyo: true, // Go up and down
        duration: 1.5,
        ease: 'power1.inOut',
      }
    );
  }, []);

  const items = ['Digital', 'Agency Creative', 'Smart', 'Digital', 'Agency Creative', 'Smart'];

  return (
    <MarqueeContainer mb={4}>
      <Marquee speed={50} gradient={false}>
        <MarqueeContent>
          {items.map((item, index) => (
            <ItemBox key={index}>
              <IconWrapper>
                <GiSevenPointedStar />
              </IconWrapper>
              <AnimatedText
                ref={(el) => (textRefs.current[index] = el)} // ✅ Fix: Correct TypeScript ref assignment
                sx={{
                  fontSize: {
                    md: '70px',
                    xs: '20px',
                  },
                }}
              >
                {item}
              </AnimatedText>
            </ItemBox>
          ))}
        </MarqueeContent>
      </Marquee>
    </MarqueeContainer>
  );
};

export default HeroMarquee;
