import React, { useState } from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { Star } from '@mui/icons-material';
import { logos, ReviewsImages } from '../../../assets'; // Ensure this import path is correct

interface Review {
  profilePic: string;
  name: string;
  date: string;
  rating: number;
  description: string;
}

const reviews: Review[] = [
  {
    profilePic: ReviewsImages.reviewimage1,
    name: 'John Doe',
    date: 'August 15, 2024',
    rating: 5,
    description: 'Exceptional service! The team went above and beyond to ensure our marketing campaigns were a success. Highly recommend their SEO and PPC services.',
  },
  {
    profilePic: ReviewsImages.reviewimage1,
    name: 'Jane Smith',
    date: 'July 22, 2024',
    rating: 4,
    description: `Providing Best Creative Services for my personal branding and became top source of generating organic leads and helping towards increasing my major business activities
    \n And also Design Shark is one stop solution for all your Branding and its processing your thoughts which is going to be implemented from their creativeness and leads to organic brand development
    \n 
    ONE STOP SOLUTION FOR ALL BRANDING SOLUTIONS`,
  },
  {
    profilePic: ReviewsImages.reviewimage1,
    name: 'Alice Johnson',
    date: 'June 10, 2024',
    rating: 5,
    description: `Dezign Shark is a one stop solution for your branding,Personal, Organizational branding services and
            \nStrongly recommended and I have been using the services for my Branding ,Creatives for all social media branding and it's became our best lead source
            \nVery Professional and Thought Process, Creative Ness,Visualization towards Creatives On time delivery services`,
  },
];

const Reviews: React.FC = () => {
  const [expandedReviewIndex, setExpandedReviewIndex] = useState<number | null>(null);

  const handleToggleDescription = (index: number) => {
    setExpandedReviewIndex(expandedReviewIndex === index ? null : index);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        px: { xs: 3, sm: 5, md: 7 },
        py: { xs: 1, sm: 2, md: 2 }, 
        // mt: { xs: 0, sm: '-30px', md: '-60px' }, 
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: 700, mb: 5, maxWidth: '80%' , margin : '0 auto' }}
      >
        Hear from Our Satisfied Clients
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {reviews.map((review, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '10px',
                mt: { xs: 2, sm: 3, md: 4 },
                p: { xs: 1, sm: 2 , md: 1 },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                  transform: 'translateY(-8px)',
                  cursor: 'pointer',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={review.profilePic}
                    sx={{ width: 50, height: 50, mr: 2 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>
                      {review.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#aaa' }}>
                      {review.date}
                    </Typography>
                  </Box>
                  <IconButton>
                    <img src={logos.google} alt="Google logo" style={{ width: 40, height: 40 }} />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} sx={{ color: i < review.rating ? '#ffcc00' : '#555' }} />
                  ))}
                </Box>
                <Box
                  sx={{
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease',
                    maxHeight: expandedReviewIndex === index ? '400px' : '100px',
                    // Adjust the maxHeight value as needed
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{ color: '#ccc', mb: 2, textAlign: 'justify', whiteSpace: 'pre-line' }}
                  >
                    {review.description}

                  </Typography>
                </Box>
                <span
                  onClick={() => handleToggleDescription(index)}
                  style={{
                    color: '#fc0000',
                    cursor: 'pointer',
                    textDecoration: 'underline',
                    textAlign : 'right'
                  }}
                >
                  {expandedReviewIndex === index ? ' Hide' : ' Read More'}
                </span>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
