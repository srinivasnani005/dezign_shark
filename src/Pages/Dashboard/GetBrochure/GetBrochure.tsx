import React, { useState } from 'react';
import { Box, Grid, Typography, Divider, Button, IconButton, CircularProgress } from '@mui/material';
import { Phone } from '@mui/icons-material';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CustomInput from '../../../Components/Inputs/CustomInput';

const GetBrochure: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [loading, setLoading] = useState(false); // State to handle loading

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://localhost:5000/mailer', {
        name: formData.name,
        email: formData.email,
        phone: formData.mobile,
      });

      if (response.status === 200) {
        toast.success('Brochure request sent successfully!');
        setFormData({ name: '', email: '', mobile: '' });
      } else {
        toast.error('Failed to send the brochure request.');
      }
    } catch (err) {
      toast.error('An error occurred while sending the request.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        px: { xs: 3.3, sm: 5, md: 7 },
        py: { xs: 2, sm: 5, md: 6 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ToastContainer />
      <Grid container spacing={4} justifyContent="center">
        {/* Left Side - 55% width */}
        <Grid item xs={12} md={7} lg={7} sx={{ width: { md: '55%' }, textAlign: 'left', mt: 2 }}>
          <Typography variant="h3" sx={{ fontWeight: 700, mb: 1.5 }}>
            Get a Custom Digital Marketing Strategy Today
          </Typography>
          <Divider
            sx={{
              height: 2,
              width: '30%',
              mb: 2,
              bgcolor: "secondary.main",
              borderRadius: 2,
            }}
          />
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
            onSubmit={handleSubmit}
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
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
            />
            <CustomInput
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
            />
            <CustomInput
              placeholder="Mobile Number"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                py: 3,
                backgroundColor: '#fc0000',
                mt: 2,
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              disabled={loading} // Disable button during loading
            >
              {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Get Brochure'}
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default GetBrochure;
