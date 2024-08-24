// CommentForm.tsx
import React from 'react';
import { Box, TextField, Button, Checkbox, FormControlLabel, Typography } from '@mui/material';

interface CommentFormProps {
  onSubmit: (formData: { name: string; email: string; website: string; saveInfo: boolean }) => void;
}

export const CommentForm: React.FC<CommentFormProps> = ({ onSubmit }) => {
  // State for form
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [website, setWebsite] = React.useState('');
  const [saveInfo, setSaveInfo] = React.useState(false);

  // Handle form submission
  const handleSubmit = () => {
    onSubmit({ name, email, website, saveInfo });
  };

  return (
    <Box mt={4}>
      <Typography variant="h4">Leave a Reply</Typography>
      <Typography variant="body2">
        Your email address will not be published. Required fields are marked
      </Typography>
      <Box mt={2}>
        <TextField
          fullWidth
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <TextField
          fullWidth
          label="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          variant="outlined"
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={saveInfo}
              onChange={(e) => setSaveInfo(e.target.checked)}
            />
          }
          label="Save my name, email, and website in this browser for the next time I comment."
        />
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Post Comment
        </Button>
      </Box>
    </Box>
  );
};
