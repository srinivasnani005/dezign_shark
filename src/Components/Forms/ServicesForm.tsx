import React from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import CustomInput from '../Inputs/CustomInput';
import backgroundImage from '../../assets/images/Services/servicebackgroundstaff.png'; // Adjust path as necessary

const BackgroundBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${backgroundImage})`, // Use the imported image URL
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
    padding: theme.spacing(8, 2),
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formValues);
    // Implement form submission logic here
  };

  return (
    <Box sx={{ py : 8}}>
    <BackgroundBox>
      <ContentBox container spacing={4}>
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
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Get Results
            </Button>
          </FormWrapper>
          </Box>
        </Grid>
      </ContentBox>
    </BackgroundBox>
    </Box>
  );
};

export default ServiceForm;
