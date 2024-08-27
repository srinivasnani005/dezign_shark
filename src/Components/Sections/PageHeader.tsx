import React from 'react';
import { Typography, Box } from '@mui/material';
import { logos } from '../../assets';

const PageHeader: React.FC<{ value: string }> = ({ value }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: 0,
        paddingBottom: { xs: '56.67%', md: '49.67%' },
        backgroundImage: `url(${logos.backgroundshark})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: '#fff',
            fontSize: { xs: '1.6rem', md: '3rem' },
            px: 2,
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

export default PageHeader;
