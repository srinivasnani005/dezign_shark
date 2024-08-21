import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, IconButton, CardMedia } from '@mui/material';
import { CalendarToday, Person } from '@mui/icons-material';
import { InsightsImages } from '../../../assets';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const articles = [
  {
    imageUrl: InsightsImages.insights1,
    author: 'Admin',
    date: 'August 18, 2024',
    title: 'Transform Your Lifestyle With Creative And Innovative Interior Design',
    description: '𝐓𝐢𝐫𝐞𝐝 𝐨𝐟 𝐦𝐮𝐧𝐝𝐚𝐧𝐞 𝐢𝐧𝐭𝐞𝐫𝐢𝐨𝐫𝐬 𝐭𝐡𝐚𝐭 𝐥𝐚𝐜𝐤 𝐜𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫 𝐚𝐧𝐝 𝐜𝐡𝐚𝐫𝐦',
  },
    {
        imageUrl: InsightsImages.insights2, 
        author: 'Admin',
        date: 'August 18, 2024',
        title: 'Transform Your Lifestyle With Creative And Innovative Interior Design',
        description: '𝐓𝐢𝐫𝐞𝐝 𝐨𝐟 𝐦𝐮𝐧𝐝𝐚𝐧𝐞 𝐢𝐧𝐭𝐞𝐫𝐢𝐨𝐫𝐬 𝐭𝐡𝐚𝐭 𝐥𝐚𝐜𝐤 𝐜𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫 𝐚𝐧𝐝 𝐜𝐡𝐚𝐫𝐦',
    },
    {
        imageUrl: InsightsImages.insights3,
        author: 'Admin',
        date: 'August 18, 2024',
        title: 'Transform Your Lifestyle With Creative And Innovative Interior Design',
        description: '𝐓𝐢𝐫𝐞𝐝 𝐨𝐟 𝐦𝐮𝐧𝐝𝐚𝐧𝐞 𝐢𝐧𝐭𝐞𝐫𝐢𝐨𝐫𝐬 𝐭𝐡𝐚𝐭 𝐥𝐚𝐜𝐤 𝐜𝐡𝐚𝐫𝐚𝐜𝐭𝐞𝐫 𝐚𝐧𝐝 𝐜𝐡𝐚𝐫𝐦',
    },
];

const Insights: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000', 
        color: '#fff', 
        minHeight: '100vh',
        px: 7,
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
        Insights and Trends from the Digital Marketing World
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#1c1c1c', 
                color: '#fff', 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '12px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 15px 30px rgba(0,0,0,0.6)',
                },
                '&:hover img': {
                    transform: 'scale(1.08)',
                },
              }}
            >
              <Box
                sx={{
                  overflow: 'hidden',
                  backgroundColor: '#333',
                  height: '50%',
                  '&:hover': {
                    cursor: 'pointer',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  image={article.imageUrl}
                  alt="Article Image"
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s ease',
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1, p: 3 , textAlign: 'left' }}>  
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <Avatar sx={{ bgcolor: '#333', width: 24, height: 24, mr: 1 }}>
                    <Person sx={{ fontSize: 16, color: '#fff' }} />
                  </Avatar>
                  <Typography variant="caption" sx={{ fontWeight: 500, mr: 2 }}>{article.author}</Typography>
                  <CalendarMonthIcon sx={{ fontSize: 22, color: '#fff', mr: 1 }} />
                  <Typography variant="caption" sx={{ color: '#fff' }}>{article.date}</Typography>
                </Box>
                <Typography variant="h5" sx={{ fontWeight: 500, mb: 1 }}>
                  {article.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#ccc', mb: 3 }}>
                  {article.description}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 400,
                    cursor: 'pointer',
                    transition: 'color 0.3s ease',
                    '&:hover': {
                      color: '#fc0000', // Red color on hover
                    },
                  }}
                >
                  Read More 
                  <ArrowForwardIcon sx={{ fontSize: 16, ml: 1 , verticalAlign: 'middle' }} />
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
