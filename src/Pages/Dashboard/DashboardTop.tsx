import React from 'react';
import { Box } from '@mui/material';
import MainVideo from '../../assets/Videos/MainVideo.mp4';

const DashboardTop: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', 
        overflow: 'hidden',
        '& .background-video': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '100%',
          height: '100%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'contain',
          pointerEvents: 'none', 
        },
      }}
    >
      <video
        className="background-video"
        autoPlay
        loop
        muted
        controls={false}
        onContextMenu={(e) => e.preventDefault()} 
      >
        <source src={MainVideo} type="video/mp4" />
      </video>
    </Box>
  );
};

export default DashboardTop;
