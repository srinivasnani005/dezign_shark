import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const DashboardBottom: React.FC = () => {
  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: '#073F8C',
        textAlign: 'center',
        color: 'white',
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Ready to Get Started?
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, fontSize: '1.2rem' }}>
        Contact us today to take your business to the next level with our comprehensive digital solutions.
      </Typography>
      <Button variant="contained" color="secondary">
        Contact Us
      </Button>
    </Box>
  );
};

export default DashboardBottom;
