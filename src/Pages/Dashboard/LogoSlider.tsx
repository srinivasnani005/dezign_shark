import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderLogos } from '../../assets';

const LogoSlider = () => {
  const logos = [
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
  ];

  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 6, 
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,  
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 360, 
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000000',
        padding: { xs: '20px 10px', sm: '30px 20px', md: '45px 70px' }, 
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: { xs: '60px', sm: '80px', md: '100px' },  
              width: 'auto',
              padding: { xs: '0 5px', sm: '0 8px', md: '0 10px' }, 
            }}
          >
            <img
              src={logo}
              alt={`Company logo ${index + 1}`}
              style={{
                height: '100%',
                width: 'auto',
                objectFit: 'contain',
              }}
            />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default LogoSlider;
