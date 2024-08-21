import React from 'react';
import DashboardTop from './DashboardTop';
import DashboardMiddle from './DashboardMiddle';
import DashboardBottom from './DashboardBottom';
import LogoSlider from './LogoSlider';
import BrandSection from './DataSection/BrandSection';
import { brandsectionimage } from '../../assets';
import ServiceSection from './Services/ServicesSection';
import Reviews  from './Reviews/Reviews';
import Insights from './Insights/Insights';
import GetBrochure from './GetBrochure/GetBrochure';
import Footer from '../Footer/Footer';
import SectionOne from '../../Components/Sections/SectionOne';

const Dashboard: React.FC = () => {
  const BrandSectiondata = {
    title: 'Transform Your Brand with the Best Digital Marketing Agency in Hyderabad',
    description: 'Welcome to Dezign Shark, the top digital marketing agency in Hyderabad, renowned for our innovative and effective marketing strategies. As the best digital marketing agency in Hyderabad, we specialize in crafting tailored solutions that elevate your brand and engage your audience. With a team of experts dedicated to your success, we dive deep into your brand\'s essence to create compelling campaigns that resonate with your target market.\n\n Join us at Dezign Shark and experience unparalleled digital excellence as your brand transforms and thrives in the digital world. If you\'re searching for a digital marketing agency in Hyderabad that delivers results, look no further.',
    image: brandsectionimage,
    buttonText: 'Request a Demo'
  };

  return (
    <>
      <DashboardTop />
      <LogoSlider />
      <SectionOne data={BrandSectiondata} />
      <ServiceSection />
      <Reviews />
      <Insights />
      <GetBrochure />
      <Footer />
    </>
  );
};

export default Dashboard;
