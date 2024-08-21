import React from 'react';
import { Box, Button, Typography, Divider, useTheme, useMediaQuery } from '@mui/material';

interface SectionOneProps {
  data: {
    title: string;
    description: string;
    image: string;
    buttonText: string;
  };
}

const SectionOne: React.FC<SectionOneProps> = ({ data }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      justifyContent="space-between"
      alignItems="center"
      p={2}
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      {/* Left Side */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        px={4}
        textAlign={isMobile ? 'center' : 'left'}
        mb={isMobile ? 4 : 0}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          {data.title}
        </Typography>
        <Divider sx={{ height: 3, width: '80px', mb: 2, bgcolor: theme.palette.secondary.main, borderRadius: 2 }} />
        <Typography variant="body1" paragraph sx={{ textAlign: 'justify' }}>
          {data.description.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            width: 'fit-content',
            alignSelf: isMobile ? 'center' : 'flex-start',
            px: 6,
            py: 3,
            mt: 2,
            mb:2,
            fontSize: { xs: '0.875rem', md: '1rem' },
          }}
        >
          {data.buttonText}
        </Button>
      </Box>

      {/* Right Side */}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flex={1}
        p={4}
    >
        <img
          src={data.image}
          alt="About Us"
          style={{
            maxWidth: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Box>
    </Box>
  );
};

export default SectionOne;
