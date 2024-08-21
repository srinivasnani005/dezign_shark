import React from 'react';
import { Typography, Box } from '@mui/material';
import { logos } from '../../assets';


const PageHeader: React.FC<{ value: string }> = ({ value }) => {
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
      <Typography variant="h2" sx={{ fontWeight: 700, color: '#fff', fontSize: { xs: '2rem', md: '3rem' } }}>
        {value}
      </Typography>
    </Box>
  );
};

export default PageHeader;
