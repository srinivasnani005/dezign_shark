import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Link } from '@mui/material';
import { Search, Share, TrendingUp } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

interface Feature {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  description: string;
  route: string;
}

const features: Feature[] = [
  {
    icon: <Search fontSize="large" sx={{ color: '#fc0000' }} />,
    title: 'Search Engine Optimization (SEO)',
    subtitle: "We're not just an SEO provider; we're a partner you can rely on.",
    description: 'We offer a comprehensive suite of SEO services, from keyword research to link building to content creation. We\'ll tailor our services to your specific needs. Third, we\'re committed to transparency and communication, so you\'ll always know what we\'re doing and why.',
    route: '/services/digital-marketing/seo',
  },
  {
    icon: <Share fontSize="large" sx={{ color: '#fc0000' }} />,
    title: 'Social Media Marketing (SMM)',
    subtitle: "We're here to help you grow your business and reach your goals.",
    description: 'We offer a wide range of social media marketing services, from strategy and planning to content creation and execution. We also offer a suite of tools and resources to help our clients succeed, and we\'re dedicated to providing the best possible service to our clients.',
    route: '/services/digital-marketing/smm',
  },
  {
    icon: <TrendingUp fontSize="large" sx={{ color: '#fc0000' }} />,
    title: 'Pay-Per-Click Advertising (PPC)',
    subtitle: 'Maximize your ROI with targeted PPC campaigns designed to drive conversions.',
    description: 'We provide detailed analysis and reporting to ensure your campaigns are performing at their best. Our team will manage your PPC strategy from start to finish, including keyword research, ad creation, and continuous optimization.',
    route: '/services/digital-marketing/ppc',
  },
];

const ServiceSection: React.FC = () => {
  const navigate = useNavigate();

  const handleShowMore = (route: string) => {
    navigate(route);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        px: 7,
        py: 2,
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: 6,
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 700, maxWidth: '60%', textAlign: 'center' }}>
          Services We Provide as a Leading Digital Marketing Agency in Hyderabad
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: '#333',
                color: '#fff',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderRadius: '14px',
                p: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0 15px 30px rgba(0,0,0,0.4)',
                  transform: 'translateY(-10px)',
                  cursor: 'pointer',
                },
              }}
            >
              {feature.icon}
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                  {feature.title}
                </Typography>
                {feature.subtitle && (
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {feature.subtitle}
                  </Typography>
                )}
                <Typography variant="body2" sx={{ color: '#aaa', textAlign: 'justify' }}>
                  {feature.description.split(' ').slice(0, 20).join(' ')}{' '}
                  <Link
                    component="button"
                    variant="body2"
                    sx={{ color: '#fc0000', textDecoration: 'underline', cursor: 'pointer' }}
                    onClick={() => handleShowMore(feature.route)}
                  >
                    Show More{'...'}
                  </Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceSection;
