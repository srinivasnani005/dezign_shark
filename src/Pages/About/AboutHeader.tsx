import React from 'react';
import { Typography, Box } from '@mui/material';
import { logos } from '../../assets';

const AboutHeader: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${logos.backgroundshark})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: 2,
        textAlign: 'center',
      }}
    >
      <Typography variant="h1" sx={{ fontWeight: 700, color: '#fff', fontSize: { xs: '2.5rem', md: '4rem' } }}>
        About
      </Typography>
    </Box>
  );
};

export default AboutHeader;
