import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { Box, Typography, Avatar, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { gsap } from "gsap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testione } from "../../assets"; // Replace with actual image

// Styled Components
const TestimonialContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "50px",
  padding: "50px 0",
});

const ImageGrid = styled(Box)({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridGap: "10px",
  position: "relative",
  width: "500px",
});

// First Image Wrapper with **EXACT** Layout
const FirstImageWrapper = styled(Box)({
  position: "relative",
  padding: "12px",
  borderRadius: "20px",
  display: "inline-block",
  "& img": {
    width: "100%",
    borderRadius: "0 20px 20px 0",
    display: "block",
    position: "relative",
    zIndex: 2,
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: "0",
    left: "-10px",
    width: "calc(100% + -40px)",
    height: "calc(100% + 0px)",
    backgroundColor: "#ff6600",
    borderRadius: "30px 5px 20px 5px",
    zIndex: 1,
  },
//   "&::after": {
//     content: '""',
//     position: "absolute",
//     top: "-10px",
//     left: "-10px",
//     width: "15px",
//     height: "15px",
//     backgroundColor: "#ff6600",
//     borderRadius: "50%",
//   },
});

const ImageWrapper = styled(Box)({
  position: "relative",
  overflow: "hidden",
  "& img": {
    width: "100%",
    borderRadius: "10px",
    display: "block",
  },
});

const FloatingButton = styled(Box)({
  position: "absolute",
  left: "50%",
  top: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#000",
  color: "#fff",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "24px",
  cursor: "pointer",
  border: "4px solid white",
  zIndex: 2,
  transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
  "&:hover": {
    backgroundColor: "red",
    color: "white",
  },
});

const ContentBox = styled(Box)({
  maxWidth: "500px",
  textAlign:'start'
});

const RatingStars = styled(Box)({
  color: "orange",
  fontSize: "20px",
});

const NavButtons = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
});

const CustomIconButton = styled(IconButton)({
  border: "2px solid black",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "black",
    color: "white",
  },
});

// Testimonial Type
type Testimonial = {
  name: string;
  position: string;
  text: string;
  rating: number;
  image: string;
};

// ** Testimonials Component **
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<any>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);

  // Testimonial Data
  const testimonials: Testimonial[] = [
    {
      name: "Leonard Heizer",
      position: "CEO",
      text: "I have been hiring people in this space for years and I have never seen this level of professionalism.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      name: "Sophia Reynolds",
      position: "Marketing Manager",
      text: "Absolutely amazing experience. The team was super professional and delivered exceptional results.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg",
    },
  ];

  // GSAP Animation for Image Grid
  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, y: 30, scale: 0.8 },
        { opacity: 1, y: 0, scale: 1, stagger: 0.2, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  // GSAP Animation for Text on Slide Change
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [currentSlide]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (index: number) => setCurrentSlide(index),
  };

  return (
    <TestimonialContainer bgcolor='white'>
      {/* Image Grid */}
      <ImageGrid ref={gridRef}>
        <FirstImageWrapper>
          <img src={testione} alt="testimonial1" />
        </FirstImageWrapper>
        <ImageWrapper>
          <img src={testione} alt="testimonial2" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={testione} alt="testimonial3" />
        </ImageWrapper>
        <ImageWrapper>
          <img src={testione} alt="testimonial4" />
        </ImageWrapper>
        <FloatingButton>+</FloatingButton>
      </ImageGrid>

      {/* Testimonial Content */}
      <ContentBox>
        <Typography variant="subtitle2" sx={{ color: "#ff6600", fontWeight: "bold" }}>
          .: KNOW WHAT OUR CLIENTS SAY :.
        </Typography>
        <Typography variant="h4" fontWeight="bold" color="black">
          Made The Biggest Players Happy
        </Typography>

        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <Box key={index} ref={textRef}>
              <RatingStars>{"★★★★★".substring(0, testimonial.rating)}</RatingStars>
              <Typography variant="body1" sx={{ marginTop: "10px", fontSize: "16px", color: "#555" }}>
                {testimonial.text}
              </Typography>

              {/* User Info */}
              <Box display="flex" alignItems="center" gap="10px" marginTop="15px">
                <Avatar src={testimonial.image} />
                <Box>
                  <Typography fontWeight="bold">{testimonial.name}</Typography>
                  <Typography fontSize="14px" color="gray">
                    {testimonial.position}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </ContentBox>
    </TestimonialContainer>
  );
};

export default Testimonials;
