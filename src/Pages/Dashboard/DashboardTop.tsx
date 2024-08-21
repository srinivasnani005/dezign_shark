import React from 'react';
import { Box, Typography } from '@mui/material';

const DashboardTop: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100%',
        overflow: 'hidden',
        '& .background-video': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        },
        '& .overlay': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
        },
      }}
    >
      <video className="background-video" autoPlay loop muted>
        <source src="https://dezignshark.com/wp-content/uploads/2024/05/DS_video_websitt-1-1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Box className="overlay">
        <Typography variant="h3" component="h1" sx={{ fontSize: '3rem', fontWeight: 'bold' }}>
          Welcome to the Dashboard
        </Typography>
        <Typography variant="h5" component="h2" sx={{ fontSize: '1.5rem', mt: 2 }}>
          Your One-Stop Solution for Digital Excellence
        </Typography>
      </Box> */}
    </Box>
  );
};

export default DashboardTop;
