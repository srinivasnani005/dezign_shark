import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton, CardMedia } from '@mui/material';
import { Person } from '@mui/icons-material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { InsightsImages } from '../../../assets';

const articles = [
  {
    imageUrl: InsightsImages.insights1,
    author: 'Admin',
    date: 'August 18, 2024',
    title: 'Transform Your Lifestyle With Creative And Innovative Interior Design',
    description: 'Tired of mundane interiors that lack character and charm?',
  },
  {
    imageUrl: InsightsImages.insights2,
    author: 'Admin',
    date: 'August 18, 2024',
    title: 'Innovative Designs to Revamp Your Space',
    description: 'Explore cutting-edge designs that redefine modern living.',
  },
  {
    imageUrl: InsightsImages.insights3,
    author: 'Admin',
    date: 'August 18, 2024',
    title: 'Creating Spaces That Reflect Your Personality',
    description: 'Learn how to personalize your space with unique design elements.',
  },
];

const Insights: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        px: { xs: 3, sm: 5, md: 7 },
        py: { xs: 2, sm: 1, md: 2 },
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: 700,
          mb: { xs: 4, sm: 5, md: 6 },
          maxWidth: { xs: '90%', sm: '80%', md: '60%' },
          mx: 'auto',
        }}
      >
        Insights and Trends from the Digital Marketing World
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#1c1c1c',
                color: '#fff',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                height: '100%',
                '&:hover': {
                  boxShadow: '0 15px 30px rgba(0,0,0,0.6)',
                  transform: 'translateY(-4px)',
                },
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',

                }}
              >
                <CardMedia
                  component="img"
                  image={article.imageUrl}
                  alt={article.title}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    },
                  }}
                />
              </Box>
              <CardContent
                sx={{
                  flexGrow: 1,
                  p: { xs: 2, sm: 3 },
                  textAlign: 'left',
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#333', width: 24, height: 24, mr: 1 }}>
                    <Person sx={{ fontSize: 16, color: '#fff' }} />
                  </Avatar>
                  <Typography variant="caption" sx={{ fontWeight: 500, mr: 2 }}>
                    {article.author}
                  </Typography>
                  <CalendarMonthIcon sx={{ fontSize: 22, color: '#fff', mr: 1 }} />
                  <Typography variant="caption" sx={{ color: '#fff' }}>
                    {article.date}
                  </Typography>
                </Box>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, mb: 1 }}
                >
                  {article.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: '#ccc', mb: 3 }}
                >
                  {article.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                      color: '#fc0000',
                    },
                  }}
                >
                  Read More
                  <ArrowForwardIcon sx={{ fontSize: 16, ml: 1, verticalAlign: 'middle' }} />
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Insights;
