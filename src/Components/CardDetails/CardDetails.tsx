import React from 'react';
import { Box, Typography, Divider, Grid, useTheme } from '@mui/material';
import PageHeader from '../Sections/PageHeader';
import CommentForm from '../Forms/CommentForm';

// Define the data type
interface InsightData {
  id: number;
  title: string;
  leftImage: string;
  categories: string[];
  recentPosts: { image: string }[];
  heading: string;
  description: string;
}

// CardDetails component
const CardDetails: React.FC<{ data: InsightData }> = ({ data }) => {
  const theme = useTheme();
  return (
    <>
      <PageHeader value={data.title} />
      <Box sx={{ px: { xs: 3, sm: 5, md: 7 }, py: { xs: 2, sm: 2, md: 4 } }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <img
              src={data.leftImage}
              alt="Left"
              style={{ width: '100%', height: 'auto', borderRadius: 12 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Box mb={2} sx={{ ml: { xs: 0, md: 2 } }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Categories
              </Typography>
              <Divider
                sx={{
                  height: 3,
                  width: '150px',
                  mb: 2,
                  bgcolor: theme.palette.secondary.main,
                  borderRadius: 2,
                }}
              />
              {data.categories.map((category, index) => (
                <Typography key={index} variant="body2" sx={{ mb: 1 }}>
                  ➤ {category}
                </Typography>
              ))}
            </Box>
            <Box mt={2} sx={{ ml: { xs: 0, md: 2 } }}>
              <Typography variant="h3" sx={{ fontWeight: 700, mb: 2 }}>
                Recent Posts
              </Typography>
              <Divider sx={{ mb: 2 }} />
              {data.recentPosts.map((post, index) => (
                <Box key={index} display="flex" alignItems="center" mt={2}>
                  <img
                    src={post.image}
                    alt="Recent Post"
                    style={{ width: 60, height: 60, marginRight: 10, borderRadius: 12 }}
                  />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Box mt={4}>
          <Typography variant="h2" sx={{ fontWeight: 700, mb: 2 , textAlign: 'left' }}>
            {data.heading}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'justify' }}>
            {data.description.split('\n').map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </Typography>
        </Box>
      </Box>

      {/* Part 3 */}
      <CommentForm />
    </>
  );
};

export default CardDetails;
