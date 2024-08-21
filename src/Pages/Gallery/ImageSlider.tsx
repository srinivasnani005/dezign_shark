import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { GalleryImages } from '../../assets'; // Make sure this path is correct

const images = [
  { src: GalleryImages.slide1, alt: 'Image 1' },
  { src: GalleryImages.slide2, alt: 'Image 2' },
  { src: GalleryImages.slide3, alt: 'Image 3' },
  { src: GalleryImages.slide4, alt: 'Image 4' },
  { src: GalleryImages.slide5, alt: 'Image 5' },
  { src: GalleryImages.slide6, alt: 'Image 6' },
];

const ImageSlider: React.FC = () => {
  const settings = {
   arrows: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    draggable: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box sx={{ width: '100%', px: 2, py: 4 }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <Box
            key={index}
            sx={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              width: '200px', 
              height: '200px', 
              '& img': {
                width: '96%',
                height: '96%',
                objectFit: 'cover', 
              },
            }}
          >
            <img src={image.src} alt={image.alt} style={{ borderRadius: '8px' }} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ImageSlider;
