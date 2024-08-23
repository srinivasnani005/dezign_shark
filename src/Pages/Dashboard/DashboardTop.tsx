import React from 'react';
import { Box } from '@mui/material';
import { MainVideo } from '../../assets';

const DashboardTop: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '0',
        paddingTop: '56.25%', // 16:9 aspect ratio
        overflow: 'hidden',
        '& .background-video': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'contain', 
        },
      }}
    >
      <video className="background-video" autoPlay loop muted>
        <source src={MainVideo} type="video/mp4" />
      </video>
    </Box>
  );
};

export default DashboardTop;
