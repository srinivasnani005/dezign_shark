import React from 'react';
import { Box, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';
import CustomInput from '../Inputs/CustomInput';

const CommentForm: React.FC = () => {
  // State for form
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [saveInfo, setSaveInfo] = React.useState(false);

  // Handle form submission
  const handleSubmit = () => {
    // Implement form submission logic here
    console.log({ name, email, website, saveInfo });
  };

  return (
    <Box
      maxWidth={600}
      sx={{ px: { xs: 3, sm: 5, md: 7 }, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
    >
      <Typography variant="h4" gutterBottom>
        Leave a Reply
      </Typography>
      <Typography variant="body2" mb={2}>
        Your email address will not be published. Required fields are marked
      </Typography>
      <Box
        sx={{ display: 'flex', flexDirection: 'column', width: '100%' , mb: 5 }}
      >
        <CustomInput
          fullWidth
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            mb: 2,
            width: '100%',
            maxWidth: 400,
          }}
        />
        <CustomInput
          fullWidth
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            mb: 2,
            width: '100%',
            maxWidth: 400,
          }}
        />
        <CustomInput
          fullWidth
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          sx={{
            mb: 2,
            width: '100%',
            maxWidth: 400,
          }}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
            />
          }
          label="Save my name, email, and website in this browser for the next time I comment."
          sx={{ mb: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ width: '100%', maxWidth: 400 }}
        >
          Post Comment
        </Button>
      </Box>
    </Box>
  );
};

export default CommentForm;
