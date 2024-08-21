import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { GalleryImages } from '../../assets'; // Adjust the path to match your project structure


// replace this with images for creatives and projects
const images = [
  { src: GalleryImages.slide1, alt: 'Image 1' },
  { src: GalleryImages.slide2, alt: 'Image 2' },
  { src: GalleryImages.slide4, alt: 'Image 4' },
  { src: GalleryImages.slide3, alt: 'Image 3' },
  { src: GalleryImages.slide6, alt: 'Image 6' },
  { src: GalleryImages.slide5, alt: 'Image 5' },

];

const CardWithFadeImages: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const displayedImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '20px',
        width: '100%',
      }}
    >
      {displayedImages.map((image, index) => (
        <Box
          key={index}
          sx={{
            width: '400px',
            height: '300px',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            overflow: 'hidden',
            position: 'relative',
            transition: 'opacity 1s ease-in-out',
          }}
        >
          <img
            src={image.src}
            alt={image.alt}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '8px',
              position: 'absolute',
              top: 0,
              left: 0,
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

const App: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}>
      <CardWithFadeImages />
    </Box>
  );
};

export default App;
