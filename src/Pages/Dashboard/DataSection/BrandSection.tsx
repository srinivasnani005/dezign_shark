import React from 'react';
import { Box, Button, Typography, Divider, useTheme, useMediaQuery } from '@mui/material';

interface SectionOneProps {
  data: {
    title: string;
    description: string;
    image: string;
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
      p={4}
      sx={{ height: '100vh', backgroundColor: theme.palette.background.default }}
    >
      {/* Left Side */}
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        flex={1.3}
        px={4}
        textAlign={isMobile ? 'center' : 'left'}
        mb={isMobile ? 4 : 0}
      >
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 700 }}>
          {data.title}
        </Typography>
        <Divider sx={{ height: 3, width: "80px", mb: 2, bgcolor: theme.palette.secondary.main , borderRadius: 2 }} />
        <Typography variant="body2" paragraph sx={{ textAlign: 'justify' }}>

          {
            data.description.split('\n').map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))
          }
        </Typography>
        <Button 
          variant="contained" 
          color="primary"
          sx={{ 
            width: 'fit-content', 
            alignSelf: isMobile ? 'center' : 'flex-start',
            px: 6,
            py: 3,
          }}
        >
          Request a Demo
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
          alt="Right Side" 
          style={{ 
            maxWidth: '95%', 
            height: 'auto', 
            width: isMobile ? '85%' : 'auto' 
          }} 
        />
      </Box>
    </Box>
  );
};

export default SectionOne;
