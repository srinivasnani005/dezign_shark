import React from 'react';
import { Box, Grid, Typography, Divider, IconButton, Link } from '@mui/material';
import { LocationOn, Email, Phone, Facebook, Instagram, LinkedIn, YouTube } from '@mui/icons-material';
import { logos } from '../../assets'; // Assuming you have the logos in your assets folder

const Footer: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1c1c1c',
        color: '#fff',
        position: 'relative',
        mt: 5,
        bottom: 0,
        px: { xs: 4, sm: 5, md: 7 },
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      <Grid container  sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
        {/* 1st Part - Company Information */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            backgroundColor: '#000',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: { xs: 3, sm: 4, md: 7 },
            px: { xs: 2, sm: 3, md: 4 },
            mt: { xs: -4, sm: -5, md: -7 },
          }}
        >
          <img src={logos.dezignshark} alt="Company Logo" style={{ width: '100%', marginBottom: '25px', maxWidth: '240px', padding: 3, marginTop: '25px'}} />
          <Typography variant="body2" sx={{ color: '#aaa', textAlign: 'justify' }}>
            We are a leading company providing innovative solutions to help you grow your business. Contact us for more information about our services and how we can assist you.
          </Typography>
        </Grid>

        {/* 2nd Part - Get in Touch */}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            px: { xs: 2, sm: 3, md: 4 },
            py: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
            Get in Touch
          </Typography>
          <Divider sx={{ borderColor: '#fff', mb: 2, width: '80%' }} />
          <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
            <LocationOn sx={{ mr: 1, color: '#fc0000' }} />
            <Typography variant="body2" sx={{ color: '#aaa', textAlign: 'left' }}>
              68, 3rd Floor, Senore Colony, Film Nagar, Hyderabad, Telangana 500008
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Email sx={{ mr: 1, color: '#fc0000' }} />
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              info@dezignshark.com
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            <Phone sx={{ mr: 1, color: '#fc0000' }} />
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              +91 799 799 2885
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', mt: 2, justifyContent: 'flex-start' }}>
            <IconButton component={Link} href="https://www.facebook.com" sx={{ color: '#fff' }}>
              <Facebook />
            </IconButton>
            <IconButton component={Link} href="https://www.instagram.com" sx={{ color: '#fff' }}>
              <Instagram />
            </IconButton>
            <IconButton component={Link} href="https://www.linkedin.com" sx={{ color: '#fff' }}>
              <LinkedIn />
            </IconButton>
            <IconButton component={Link} href="https://www.youtube.com" sx={{ color: '#fff' }}>
              <YouTube />
            </IconButton>
          </Box>
        </Grid>

        {/* 3rd Part - Google Map */}
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
          <Box sx={{ width: '100%', maxWidth: '390px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30456.088155453577!2d78.36486392714423!3d17.4112588135713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b43765a51d595d%3A0x888192e0597f0421!2sDezign%20Shark%20%7C%20Best%20Digital%20Marketing%20Agency%20in%20Hyderabad!5e0!3m2!1sen!2sin!4v1724216499850!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '12px' }}
              loading="lazy"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
