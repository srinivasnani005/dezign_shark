import React, { useState } from 'react';
import { Box, Typography, Button, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Persons } from '../../assets';

const AboutPersonToggle: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<'rajiv' | 'Priya'>('rajiv');
  const navigate = useNavigate();

  const personData = {
    rajiv: {
      name: 'Rajiv',
      description: 'Mr. Rajiv Williams, a leading real estate mentor in Hyderabad, has 14 years of experience in marketing, sales, and brand strategy. As a licensed RERA Realtor and member of HRA, NAR India, HRI, and BNI, he also excels as an industry aggregator and restaurateur, reflecting his entrepreneurial passion.',
      image: Persons.rajiv,
    },
    Priya: {
      name: 'Priya',
      description: 'Priya is a Senior SEO Analyst at Dezign Shark, with 5 years of experience in digital marketing. She is a Google Certified Professional and has worked with several clients to improve their online presence. Priya is also a talented content writer and has written several articles on digital marketing.',
      image: Persons.priya,
    },
  };

  const handlePersonChange = (person: 'rajiv' | 'Priya') => {
    setSelectedPerson(person);
  };

  return (
    <Box sx={{ 
      px: { xs: 7, sm: 5, md: 7 }, 
      py: { xs: 3, sm: 4, md: 5 },
      margin: '0 auto' 
      }}>
      <Typography variant="h3" component="h2" gutterBottom sx={{ fontWeight: 700, textAlign: 'center', mb: 4 }}>
        Driving Force Behind Design Shark
      </Typography>

      {/* Buttons for toggling between persons */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4, flexWrap: 'wrap' }}>
        <Button
          variant={selectedPerson === 'rajiv' ? 'contained' : 'outlined'}
          onClick={() => handlePersonChange('rajiv')}
          sx={{
            px: 4,
            py: 2,
            mx: 1,
            my: 1,
            fontSize: '1rem',
            fontWeight: 600,
            backgroundColor: selectedPerson === 'rajiv' ? '#fc0000' : 'transparent',
            color: selectedPerson === 'rajiv' ? '#fff' : '#fc0000',
            '&:hover': {
              backgroundColor: '#e60000',
              color: '#fff',
            },
          }}
        >
          Rajiv
        </Button>
        <Button
          variant={selectedPerson === 'Priya' ? 'contained' : 'outlined'}
          onClick={() => handlePersonChange('Priya')}
          sx={{
            px: 4,
            py: 2,
            mx: 1,
            my: 1,
            fontSize: '1rem',
            fontWeight: 600,
            backgroundColor: selectedPerson === 'Priya' ? '#fc0000' : 'transparent',
            color: selectedPerson === 'Priya' ? '#fff' : '#fc0000',
            '&:hover': {
              backgroundColor: '#e60000',
              color: '#fff',
            },
          }}
        >
          Priya
        </Button>
      </Box>

      {/* Details section with image and description */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          alignItems: 'center',
        }}
      >
        <Box sx={{ flex: 1, textAlign:'left', order: { xs: 2, md: 1 } }}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
            {personData[selectedPerson].name}
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="body2" paragraph sx={{ textAlign: 'justify', mb: 3 }}>
            {personData[selectedPerson].description}
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate(`/${selectedPerson}32`)}
            sx={{
              backgroundColor: '#fc0000',
              color: '#fff',
              '&:hover': { backgroundColor: '#e60000' },
            }}
          >
            Read More
          </Button>
        </Box>
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            order: { xs: 1, md: 2 },
            mb: { xs: 4, md: 0 },
          }}
        >
          <img
            src={personData[selectedPerson].image}
            alt={personData[selectedPerson].name}
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPersonToggle;
