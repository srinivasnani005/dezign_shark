import React from 'react';
import { Box, Button, Typography, Divider, useTheme, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleButtonClick = () => {
    navigate('/contact-us');
  };

  return (
    <Box
      display="flex"
      flexDirection={isMobile ? 'column' : 'row'}
      justifyContent="space-between"
      alignItems="center"

      sx={{ 
        backgroundColor: theme.palette.background.default,
        gap: isMobile ? 2 : 4, 
        px: { xs: 4, sm: 5, md: 7 },
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      {/* Left Side */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1}
        textAlign={'left'}
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
          onClick={handleButtonClick}
          sx={{
            width: 'fit-content',
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
        sx={{
          width: '100%',
          maxWidth: { xs: '100%', sm: '80%', md: '70%' }, // Responsive width for the image container
        }}
      >
        <img
          src={data.image}
          alt={data.title}
          style={{
            width: '100%', // Ensures the image is responsive
            height: 'auto',
            borderRadius: '8px',
          }}
        />
      </Box>
    </Box>
  );
};

export default SectionOne;
