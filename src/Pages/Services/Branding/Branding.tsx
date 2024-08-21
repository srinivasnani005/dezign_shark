import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

const Branding: React.FC = () => {
    const theme = useTheme();
    return (
        <>
            <Box sx={{
                backgroundColor: theme.palette.background.default,
                color: "secondary",
                padding: '50px 0',
                textAlign: 'center',
                height: '100vh',


            }}>
                <Box sx={{ marginTop: '50px' }}>
                    <h1>Branding Page Here </h1>
                    <p> In development... </p>
                </Box>
            </Box>
        </>
    );
};

export default Branding;