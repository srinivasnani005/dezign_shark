import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Button, Card, CardContent, useTheme, useMediaQuery, IconButton } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

type CardData = {
  subheading: string;
  description: string;
  buttonText: string;
};

type SliderOneProps = {
  cards: CardData[];
  title?: string; 
  slidesToShow?: number;
  autoplaySpeed?: number;
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: 'primary.main',
        position: 'absolute',
        top: '50%',
        right: -15,
        transform: 'translate(0, -50%)',
        zIndex: 2,
        '&:hover': { backgroundColor: 'transparent' },
      }}
    >
      <ArrowForwardIos />
    </IconButton>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      onClick={onClick}
      sx={{
        color: 'primary.main',
        position: 'absolute',
        top: '50%',
        left: -10,
        transform: 'translate(0, -50%)',
        zIndex: 2,
        '&:hover': { backgroundColor: 'transparent' },
      }}
    >
      <ArrowBackIos />
    </IconButton>
  );
};

const SliderOne: React.FC<SliderOneProps> = ({
  cards,
  title,
  slidesToShow = 3,
  autoplaySpeed = 3000,
}) => {
  const theme = useTheme();

  // Media queries for responsive design
  const isXs = useMediaQuery(theme.breakpoints.down('xs'));
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  const isMd = useMediaQuery(theme.breakpoints.down('md'));

  const responsiveSlidesToShow = isXs ? 1 : isSm ? 1 : isMd ? 2 : slidesToShow;

  const settings = {
    arrows: true,
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: responsiveSlidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed,
    pauseOnHover: true,
    draggable: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Box sx={{ px: 8, py: 4, position: 'relative', overflow: 'hidden', backgroundColor: theme.palette.background.default }}>
      {title && (
        <Box sx={{ textAlign: 'center', width: '90%', margin: 'auto' }}>
          <Typography
            variant="h2"
            align="center"
            gutterBottom
            sx={{ fontWeight: 700, mb: 5, mt: 2 }}
          >
            {title}
          </Typography>
        </Box>
      )}
      <Slider {...settings}>
        {cards.map((card, index) => (
          <Box key={index} sx={{ px: 2, display: 'flex', justifyContent: 'center' }}>
            <Card
              sx={{
                color: theme.palette.primary.main,
                backgroundColor: theme.palette.background.default,
                border: '1px solid #E0E0E0',
                borderRadius: '10px',
                boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
                width: '100%',
                maxWidth: '350px',
                mx: 'auto',
              }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h5" gutterBottom sx={{ color: theme.palette.primary.main, fontWeight: 700, mb: 4 }}>
                  {card.subheading}
                </Typography>
                <Typography variant="body2" paragraph sx={{ color: theme.palette.primary.main, textAlign: 'justify', mb: 5, padding: '0 10px', fontWeight: 300 }}>
                  {card.description}
                </Typography>
                <Button variant="contained" color="primary">
                  {card.buttonText}
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default SliderOne;
