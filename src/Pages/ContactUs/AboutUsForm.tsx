import React from 'react';
import { Box, Typography, Divider, Button, Grid, InputAdornment, IconButton } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomInput from '../../Components/Inputs/CustomInput';

const AboutUsForm: React.FC = () => {
  return (
    <Box sx={{ maxWidth: '800px', margin: '0 auto', padding: '20px', mt:2 }}>
      {/* Heading */}
      <Box sx={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Connect with Dezign Shark: Your Partner in Digital Success
        </Typography>
      </Box>

      {/* Divider */}
      <Divider sx={{ marginBottom: '30px', bgcolor: '#fc0000', height: 2, borderRadius: 2, width: '50%', margin: '0 auto' }} />

      {/* Contact Information Row */}
      <Grid container spacing={3} justifyContent="center" sx={{ marginBottom: '30px' }}>
        <Grid item xs={12} sm={4} display="flex" alignItems="center" justifyContent="center">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                <PhoneIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 700, color: '#fc0000', ml: 2 }}>
              +91 799 799 2885
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} display="flex" alignItems="center" justifyContent="center">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                <EmailIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 700, color: '#fc0000', ml: 2 }}>
              info@dezignshark.com
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={4} display="flex" alignItems="center" justifyContent="center">
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                <LocationOnIcon />
              </IconButton>
            </Box>
            <Typography variant="body1" sx={{ fontWeight: 700, color: '#fc0000', ml: 2, textAlign: 'center' }}>
              Film Nagar, Hyderabad, Telangana
            </Typography>
          </Box>
        </Grid>
      </Grid>

      {/* Form */}
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: 'transparent',
        }}
      >
        {/* Name and Email */}
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CustomInput
              placeholder="Your Name"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <CustomInput
              placeholder="Email"
              endAdornment={<InputAdornment position="end"></InputAdornment>}
              fullWidth
            />
          </Grid>
        </Grid>

        {/* Subject */}
        <CustomInput
          placeholder="Subject"
          endAdornment={<InputAdornment position="end"></InputAdornment>}
          fullWidth
        />

        {/* Message */}
        <CustomInput
          placeholder="Message"
          multiline
          rows={4}
          fullWidth
        />

        {/* Send Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#fc0000',
            color: '#fff',
            px: 6,
            py: 3,
            fontWeight: 700,
            fontSize: '1rem',
            alignSelf: 'flex-start',
            '&:hover': {
              backgroundColor: '#e60000',
            },
          }}
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default AboutUsForm;
