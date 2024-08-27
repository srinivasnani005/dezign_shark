import React from 'react';
import { Box, Typography, Button, Grid, CircularProgress } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomInput from '../Inputs/CustomInput';
import backgroundImage from '../../assets/images/Services/servicebackgroundstaff.png'; // Adjust path as necessary
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100%',
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    height: 'auto',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.55)', 
    zIndex: 1,
  },
}));

const ContentBox = styled(Grid)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  padding: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    textAlign: 'center',
  },
}));

const FormWrapper = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    maxWidth: '400px',
  },
}));

const ServiceForm: React.FC = () => {
  const [formValues, setFormValues] = React.useState({
    link: '',
    name: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = React.useState(false); // Loading state
  const [isFormValid, setIsFormValid] = React.useState(true); // Form validation state

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  React.useEffect(() => {
    const isValid =
      formValues.link.trim() !== '' &&
      formValues.name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) &&
      /^[0-9]{10}$/.test(formValues.phone);

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
      const response = await axios.post('http://localhost:5000/mailer', {
        link: formValues.link,
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
      });

      if (response.status === 200) {
        toast.success('Form submitted successfully!');
        // Clear form values after successful submission
        setFormValues({
          link: '',
          name: '',
          email: '',
          phone: '',
        });
      } else {
        toast.error('Failed to submit the form.');
      }
    } catch (error) {
      toast.error('An error occurred while submitting the form.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer />
      <Box sx={{ 
        position: 'relative',
        overflow: 'hidden',
      }}>
        <BackgroundBox>
          <ContentBox container spacing={4} sx={{
            px: { xs: 4, sm: 5, md: 7 },
            py: { xs: 3, sm: 4, md: 5 },
          }}>
            <Grid item xs={12} md={6}>
              <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
                <Typography variant="h3" sx={{ color: '#FFF', fontWeight: 'bold', mb: 2, textAlign: 'left' }}>
                  Get Your Online Presence Report for Free
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%'}}>
                <FormWrapper onSubmit={handleSubmit}>
                  <CustomInput
                    name="link"
                    placeholder="Your Link"
                    value={formValues.link}
                    onChange={handleChange}
                    fullWidth
                  />
                  <CustomInput
                    name="name"
                    placeholder="Your Name"
                    value={formValues.name}
                    onChange={handleChange}
                    fullWidth
                  />
                  <CustomInput
                    name="email"
                    placeholder="Your Email"
                    value={formValues.email}
                    onChange={handleChange}
                    fullWidth
                  />
                  <CustomInput
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formValues.phone}
                    onChange={handleChange}
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                    // disabled={loading || !isFormValid}
                    sx={{ position: 'relative' }}
                  >
                    {loading && <CircularProgress size={24} sx={{ color: '#fff', position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }} />}
                    Get Results
                  </Button>
                </FormWrapper>
              </Box>
            </Grid>
          </ContentBox>
        </BackgroundBox>
      </Box>
    </>
  );
};

export default ServiceForm;
