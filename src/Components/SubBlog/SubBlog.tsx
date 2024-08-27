import React from 'react';
import { Box, Typography } from '@mui/material';

interface DataItem {
  title: string;
  description: string;
}

interface SubBlogProps {
  data: DataItem[];
}

const SubBlog: React.FC<SubBlogProps> = ({ data }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={2}
      sx={{
        px: { xs: 4, sm: 5, md: 7 },
        py: { xs: 3, sm: 4, md: 5 },
      }}
    >
      {data.map((item, index) => (
        <Box key={index} sx={{ mb: 1.5 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 , textAlign: 'left' , marginBottom: 1.5 }}>
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'justify', marginBottom: 1.5 , fontWeight : 300}}>
          {item.description.split('\n').map((it, index) => (
            <span key={index}>
              {it}
              <br />
            </span>
          ))}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default SubBlog;
