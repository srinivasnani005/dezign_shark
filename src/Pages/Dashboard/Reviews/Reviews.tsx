import React from 'react';
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
    description: 'Great experience with their social media marketing services. Their strategies helped increase our engagement significantly. Will definitely use them again!',
  },
  {
    profilePic: ReviewsImages.reviewimage1,
    name: 'Alice Johnson',
    date: 'June 10, 2024',
    rating: 5,
    description: 'The PPC campaigns managed by this agency brought remarkable results. Their dedication and transparency are unmatched. Worth every penny!',
  },
];

const Reviews: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        px: 7,
        // py: 4,
        textAlign: 'center',
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          fontWeight: 700, 
          mb: 6, 
          maxWidth: '60%', 
          mx: 'auto',
        }}
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
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '14px',
                textAlign: 'left',
                p: 1.3,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                  transform: 'translateY(-10px)',
                  cursor: 'pointer',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar
                    src={review.profilePic}
                    sx={{ width: 50, height: 50, borderRadius: '50%', mr: 2 }}
                  />
                  <Box sx={{ flex: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 700 }}>{review.name}</Typography>
                    <Typography variant="caption" sx={{ color: '#aaa' }}>{review.date}</Typography>
                  </Box>
                  <IconButton sx={{ ml: 'auto' }}>
                    <img src={logos.google} alt="Google logo" style={{ width: 40, height: 40 }} />
                  </IconButton>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} sx={{ color: i < review.rating ? '#ffcc00' : '#555' }} />
                  ))}
                </Box>
                <Typography
                  variant="body2"
                  sx={{ color: '#ccc'}}
                >
                  {review.description.length > 150 ? `${review.description.slice(0, 150)}...` : review.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
