import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { CreativesImages } from '../../assets'; // Adjust the path to match your project structure

const images = [
  { src: CreativesImages.creatives1, alt: 'Image 1' },
  { src: CreativesImages.creatives2, alt: 'Image 2' },
  { src: CreativesImages.creatives3, alt: 'Image 3' },
  { src: CreativesImages.creatives4, alt: 'Image 4' },
  { src: CreativesImages.creatives5, alt: 'Image 5' },
  { src: CreativesImages.creatives6, alt: 'Image 6' },
  { src: CreativesImages.creatives7, alt: 'Image 7' },
  { src: CreativesImages.creatives8, alt: 'Image 8' },
  { src: CreativesImages.creatives9, alt: 'Image 9' },
  { src: CreativesImages.creatives10, alt: 'Image 10' },
  { src: CreativesImages.creatives11, alt: 'Image 11' },
  { src: CreativesImages.creatives12, alt: 'Image 12' },
  { src: CreativesImages.creatives13, alt: 'Image 13' },
  { src: CreativesImages.creatives14, alt: 'Image 14' },
  { src: CreativesImages.creatives15, alt: 'Image 15' },
  { src: CreativesImages.creatives16, alt: 'Image 16' },
  { src: CreativesImages.creatives17, alt: 'Image 17' },
  { src: CreativesImages.creatives18, alt: 'Image 18' },
  { src: CreativesImages.creatives19, alt: 'Image 19' },
  { src: CreativesImages.creatives20, alt: 'Image 20' },
  { src: CreativesImages.creatives21, alt: 'Image 21' },
  { src: CreativesImages.creatives22, alt: 'Image 22' },
  { src: CreativesImages.creatives23, alt: 'Image 23' },
  { src: CreativesImages.creatives24, alt: 'Image 24' },
  { src: CreativesImages.creatives25, alt: 'Image 25' },
  { src: CreativesImages.creatives26, alt: 'Image 26' },
  { src: CreativesImages.creatives27, alt: 'Image 27' },
  { src: CreativesImages.creatives28, alt: 'Image 28' },
  { src: CreativesImages.creatives29, alt: 'Image 29' },
];

interface FadeInOutCardProps {
  startsfrom: number;
}

const FadeInOutCard: React.FC<FadeInOutCardProps> = ({ startsfrom }) => {
  const [currentIndex, setCurrentIndex] = useState(startsfrom % images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const displayedImages = [
    ...images.slice(currentIndex, currentIndex + 3),
    ...images.slice(0, Math.max(0, (currentIndex + 3) - images.length))
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 2,
        px: { xs: 4, sm: 5, md: 7 },
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      {displayedImages.map((image, index) => (
        <Box
          key={index}
          sx={{
            flex: '1 1 auto',
            maxWidth: { xs: '100%', sm: '48%', md: '33%' },
            height: { xs: '200px', sm: '250px', md: '300px' },
            borderRadius: '8px',
            overflow: 'hidden',
            position: 'relative',
            transition: 'opacity 1.5s ease-in-out',
            animation: `fadeInOut 3s infinite`,
            '@keyframes fadeInOut': {
              '0%': { opacity: 0 },
              '20%': { opacity: 1 },
              '80%': { opacity: 1 },
              '100%': { opacity: 0 },
            },
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              position: 'absolute',
              top: 0,
              left: 0,
            },
          }}
        >
          <img src={image.src} alt={image.alt} />
        </Box>
      ))}
    </Box>
  );
};

export default FadeInOutCard;