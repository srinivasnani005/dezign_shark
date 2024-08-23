import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

type SectionData = {
  title?: string;
  subtitle: string;
  description1: string;
  description2: string;
  imageSrc: string;
};

type SectionTwoProps = {
  data: SectionData;
  alignment: 'left' | 'right';
};

const SectionTwo: React.FC<SectionTwoProps> = ({ data, alignment }) => {
  const { title, subtitle, description1, description2, imageSrc } = data;
  const isLeftAligned = alignment === 'left';

  return (
    <Box sx={{
      px:10,
      py: 8,
    }} >
      { title &&(
        <Box sx={{ textAlign: 'center', width : '90%', margin : 'auto' }}>
          <Typography 
            variant="h2" 
            align="center" 
            gutterBottom 
            sx={{ fontWeight: 700, mb: 5, mt: 2,  }}
          >
            {title}
          </Typography>
        </Box>
      )}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6} order={{ xs: 2, md: isLeftAligned ? 1 : 2 }}>
          <Box textAlign={isLeftAligned ? 'right' : 'left'}>
            <Typography 
              variant="h3" 
              gutterBottom 
              sx={{ fontWeight: 700, textAlign: 'left' , mb: 2 }}
            >
              {subtitle}
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ textAlign: 'justify', marginBottom: 3 , fontWeight : 300}}
            >
              {data.description1.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: isLeftAligned ? 2 : 1 }}>
          <Box 
            display="flex" 
            justifyContent={isLeftAligned ? 'flex-start' : 'flex-end'}
          >
            <img
              src={imageSrc}
              alt="description"
              style={{
                width: '100%',
                maxWidth: '500px',
                height: '400px',
                objectFit: 'cover',
              }}
            />
          </Box>
        </Grid>
      </Grid>

      <Box mt={2}>
        <Typography 
          variant="body2" 
          sx={{ textAlign: 'justify' }}
        >
          {data.description2.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </Typography>
      </Box>
    </Box>
  );
};

export default SectionTwo;
