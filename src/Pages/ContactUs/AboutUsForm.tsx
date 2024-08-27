import React from 'react';
import { Box, Typography, Divider, Button, Grid, InputAdornment, IconButton, CircularProgress } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CustomInput from '../../Components/Inputs/CustomInput';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AboutUsForm: React.FC = () => {
  const [formValues, setFormValues] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = React.useState(false); // Loading state
  const [isFormValid, setIsFormValid] = React.useState(true); // Form validation state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const isValid =
      formValues.name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) &&
      formValues.subject.trim() !== '' &&
      formValues.message.trim() !== '';

    setIsFormValid(isValid);
  }, [formValues]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isFormValid) {
      toast.error('Please fill out all fields correctly.');
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/mailer', formValues);

      if (response.status === 200) {
        toast.success('Message sent successfully!');
        // Clear form values after successful submission
        setFormValues({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      } else {
        toast.error('Failed to send the message.');
      }
    } catch (error) {
      toast.error('An error occurred while sending the message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          maxWidth: '100%',
          margin: '0 auto',
          padding: { xs: '10px', sm: '20px' },
          mt: { xs: 1, sm: 2 },
          px: { xs: 1, sm: 2 },
        }}
      >
        {/* Heading */}
        <Box
          sx={{
            width: '100%',
            textAlign: 'center',
            marginBottom: { xs: '15px', sm: '20px' },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 700,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            }}
          >
            Connect with Dezign Shark: Your Partner in Digital Success
          </Typography>
        </Box>

        {/* Divider */}
        <Divider
          sx={{
            marginBottom: { xs: '20px', sm: '30px' },
            bgcolor: '#fc0000',
            height: 2,
            borderRadius: 2,
            width: { xs: '70%', sm: '50%' },
            margin: '0 auto',
          }}
        />

        {/* Contact Information Row */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          sx={{ marginBottom: { xs: '20px', sm: '30px' } }}
        >
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
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  color: '#fc0000',
                  ml: 1,
                  textAlign: { xs: 'center', sm: 'left' },
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
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
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  color: '#fc0000',
                  ml: 1,
                  textAlign: { xs: 'center', sm: 'left' },
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
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
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 700,
                  color: '#fc0000',
                  ml: 1,
                  textAlign: { xs: 'center', sm: 'left' },
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                Film Nagar, Hyderabad, Telangana
              </Typography>
            </Box>
          </Grid>
        </Grid>

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
          onSubmit={handleSubmit}
        >
          {/* Name and Email */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <CustomInput
                name="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
                endAdornment={<InputAdornment position="end"></InputAdornment>}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomInput
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={handleChange}
                endAdornment={<InputAdornment position="end"></InputAdornment>}
                fullWidth
              />
            </Grid>
          </Grid>

          {/* Subject */}
          <CustomInput
            name="subject"
            placeholder="Subject"
            value={formValues.subject}
            onChange={handleChange}
            endAdornment={<InputAdornment position="end"></InputAdornment>}
            fullWidth
          />

          {/* Message */}
          <CustomInput
            name="message"
            placeholder="Message"
            value={formValues.message}
            onChange={handleChange}
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
              px: { xs: 4, sm: 6 },
              py: { xs: 2, sm: 3 },
              fontWeight: 700,
              fontSize: { xs: '0.9rem', sm: '1rem' },
              alignSelf: 'flex-start',
            }}
            type="submit"
            disabled={loading || !isFormValid}
          >
            {loading && <CircularProgress size={24} sx={{ color: '#fff', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />}
            Send Message
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default AboutUsForm;
