import React, { useState, useEffect } from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, Grid, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomInput from '../Inputs/CustomInput';
import brochurePDF from '../../assets/ds-brochure-design-Recovered.pdf';
import { useTheme } from '@mui/material/styles';

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

  useEffect(() => {
    // Validate form fields on change
    const isValid =
      formValues.name.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email) && // Email format validation
      /^[0-9]{10}$/.test(formValues.mobile); // Mobile number format validation (10 digits)
      
    setIsFormValid(isValid);
  }, [formValues]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (isFormValid) {
      // Example function to handle form data submission
      // You can replace the code below with your actual data submission logic
      // postData(formValues);

      // Download the PDF
      DownloadPDF();

      // Close the dialog
      handleClose();
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
    // Clear form values when closing the dialog
    setFormValues({
      name: '',
      email: '',
      mobile: '',
    });
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleDialogClose} fullWidth maxWidth="sm" PaperProps={{ sx: { backgroundColor: '#333', color: '#fff', position: 'relative' } }}>
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
          disabled={!isFormValid}
         
        >
          Submit & Download
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalForm;
