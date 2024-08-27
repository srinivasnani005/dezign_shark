import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, IconButton, Box, CircularProgress } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomInput from '../Inputs/CustomInput';
import brochurePDF from '../../assets/ds-brochure-design-Recovered.pdf';
import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface ModalFormProps {
  open: boolean;
  handleClose: () => void;
}

const ModalForm: React.FC<ModalFormProps> = ({ open, handleClose }) => {
  const theme = useTheme();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    mobile: '',
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const isValid =
      formValues.name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) &&
      /^[0-9]{10}$/.test(formValues.mobile);

    setIsFormValid(isValid);
  }, [formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (isFormValid) {
      setLoading(true); // Start loading

      try {
        const response = await axios.post('http://localhost:5000/mailer', {
          name: formValues.name,
          email: formValues.email,
          phone: formValues.mobile,
        });

        if (response.status === 200) {
          toast.success('Brochure request sent successfully!');
          DownloadPDF();
          handleClose();
        } else {
          toast.error('Failed to send the brochure request.');
        }
      } catch (err) {
        toast.error('An error occurred while sending the request.');
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  const DownloadPDF = () => {
    const link = document.createElement('a');
    link.href = brochurePDF;
    link.download = 'Dezign_Shark_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDialogClose = () => {
    setFormValues({
      name: '',
      email: '',
      mobile: '',
    });
    handleClose();
  };

  return (
    <>
      <ToastContainer />
      <Dialog
        open={open}
        onClose={handleDialogClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          sx: {
            backgroundColor: 'rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(8px)',
            width: '100%',
            boxShadow: 'none',
            color: '#fff',
            position: 'relative',
          },
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            zIndex: 1,
            right: "20px",
            top: "10px",
          }}
        >
          <IconButton edge="end" color="inherit" onClick={handleDialogClose} aria-label="close">
            <CloseIcon />
          </IconButton>
        </Box>
        <DialogTitle
          sx={{
            padding: theme.spacing(2),
          }}
        >
          Fill in Your Details
        </DialogTitle>
        <DialogContent
          dividers
          sx={{
            padding: theme.spacing(2),
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <CustomInput
                name="name"
                placeholder="Your Name"
                value={formValues.name}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                name="email"
                placeholder="Your Email"
                value={formValues.email}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <CustomInput
                name="mobile"
                placeholder="Your Mobile Number"
                value={formValues.mobile}
                onChange={handleChange}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions
          sx={{
            padding: theme.spacing(1),
          }}
        >
          <Button
            onClick={handleDialogClose}
            variant="outlined"
            color="secondary"
            sx={{
              marginRight: 'auto',
              marginLeft: 2,
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            color="primary"
            variant="contained"
            disabled={!isFormValid || loading} // Disable if form is invalid or loading
            sx={{ display: 'flex', alignItems: 'center' }}
          >
            {loading ? <CircularProgress size={24} sx={{ color: '#fff' }} /> : 'Submit & Download'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ModalForm;
