import React from 'react';
import { Box, Grid, Typography, Divider, Button, IconButton } from '@mui/material';
import { Phone } from '@mui/icons-material';
import CustomInput from '../../../Components/Inputs/CustomInput';

const GetBrochure: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        px: 7,
        py: 4,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={4} justifyContent="center" >
        {/* Left Side - 55% width */}
        <Grid item xs={12} md={7} lg={7} sx={{ width: { md: '55%' }, textAlign: 'left', mt: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 3 }}>
            Get a Custom Digital Marketing Strategy Today
          </Typography>
          <Divider sx={{ borderColor: '#fff', mb: 3, width: '30%' }} />
          <Typography variant="body2" sx={{ mb: 3, color: '#aaa' }}>
            Certainly! If you have any specific requirements or inquiries, feel free to provide more details or contact us directly. We're here to assist you.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#fc0000',
                borderRadius: '8px',
                p: 1,
              }}
            >
              <IconButton sx={{ color: '#fff', p: 0 }}>
                <Phone />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 700, color: '#fc0000', ml: 2 }}>
              +91 799 799 2885
            </Typography>
          </Box>
        </Grid>

        

        {/* Right Side - 45% width */}
        <Grid item xs={12} md={5} lg={5} sx={{ width: '45%' }}>
          <Box
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              backgroundColor: '#1c1c1c',
              padding: 4,
              borderRadius: '14px',
            }}
            noValidate
            autoComplete="off"
          >
            <CustomInput
              placeholder="Name"
              fullWidth
            />
            <CustomInput
              placeholder="Email"
              fullWidth
            />
            <CustomInput
              placeholder="Mobile Number"
              fullWidth
            />
            <Button
              variant="contained"
              sx={{
                py: 3,
                backgroundColor: '#fc0000',
                mt: 2,
                fontWeight: 700,
              }}
            >
              Get Brochure
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetBrochure;
