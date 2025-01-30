import React from 'react';
import DashboardTop from './DashboardTop';
import DashboardMiddle from './DashboardMiddle';
import DashboardBottom from './DashboardBottom';
import LogoSlider from './LogoSlider';
import BrandSection from './DataSection/BrandSection';
import { brandsectionimage, ds_about } from '../../assets';
import { brandsectionimage1 } from '../../assets';
import ServiceSection from './Services/ServicesSection';
import Reviews  from './Reviews/Reviews';
import Insights from './Insights/Insights';
import GetBrochure from './GetBrochure/GetBrochure';
import Footer from '../Old/Footer/Footer';
import SectionOne from '../../Components/Sections/SectionOne';

const Dashboard: React.FC = () => {
  const BrandSectiondata = {
    title: 'Discover Dezign Shark: The Best Digital Marketing Agency in Hyderabad',
    description: 'Welcome to Dezign Shark, the best digital marketing agency in Hyderabad, India, committed to transforming your business with cutting-edge online marketing solutions. As a trusted digital marketing company in Hyderabad, we specialize in delivering results-driven SEO, PPC, Google Ads, Facebook Ads, and social media management services. Our team of experts, ranked among the top digital marketing firms, combines creativity and strategy to boost your brand visibility and drive measurable growth.\n\n Dezign Shark stands out as one of the best digital marketing agencies in Hyderabad, offering tailored solutions to meet diverse business needs. From branding to comprehensive internet marketing services, our digital marketing services provider ensures optimal ROI for every campaign. Partner with us, a leading online marketing agency in India, to experience the best digital marketing services designed to empower your business in today\'s competitive digital landscape.',
    image: ds_about,
    buttonText: 'Request a Demo'
  };

  return (
    <>
      <DashboardTop />
      <LogoSlider />
      <SectionOne data={BrandSectiondata} />
      <ServiceSection />
      <Reviews />
      {/* <Insights /> */}
      <GetBrochure />
      <Footer />
    </>
  );
};

export default Dashboard;
