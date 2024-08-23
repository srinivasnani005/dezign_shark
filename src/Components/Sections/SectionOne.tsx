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
      p={{ xs: 2, sm: 3, md: 4 }}
      sx={{ backgroundColor: theme.palette.background.default }}
    >
      {/* Left Side */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        px={{ xs: 2, sm: 3, md: 4 }}
        textAlign={'left'}
        mb={isMobile ? 4 : 0}
      >
        <Typography variant={isMobile ? 'h4' : 'h2'} gutterBottom sx={{ fontWeight: 700 }}>
          {data.title}
        </Typography>
        <Divider
          sx={{
            height: 3,
            width: '90px',
            mb: 2,
            bgcolor: theme.palette.secondary.main,
            borderRadius: 2,
            alignSelf: 'flex-start',
          }}
        />
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
            alignSelf: 'flex-start',
            px: { xs: 4, sm: 5, md: 6 },
            py: { xs: 2, sm: 2.5, md: 3 },
            mt: 2,
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
        p={{ xs: 2, sm: 3, md: 4 }}
        sx={{ width: '100%' }}
      >
        <img
          src={data.image}
          alt="About Us"
          style={{
            maxWidth: '90%',
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Box>
    </Box>
  );
};

export default SectionOne;
