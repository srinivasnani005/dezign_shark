import React from 'react';
import AboutHeader from './AboutHeader';
import AboutPersonToggle from './AboutPersonToggle';
import SectionOne from '../../Components/Sections/SectionOne';
import { Aboutus } from '../../assets';
import Footer from '../Footer/Footer';
import PageHeader from '../../Components/Sections/PageHeader';

const About: React.FC = () => {
  const BrandSectiondata = {
    title: 'About Us',
    description: 'At Dezign Shark, we pride ourselves on being a top 10 digital marketing agency in Hyderabad, dedicated to helping businesses thrive in the digital landscape. As a leading digital marketing agency in Hyderabad, we offer a comprehensive range of services designed to elevate your brand and drive measurable results. Our team of experts utilizes cutting-edge strategies and tools to create tailored marketing solutions that resonate with your target audience and foster long-term growth. \n\n Recognized as the best digital marketing agency in Hyderabad, we consistently deliver exceptional results that set us apart from the competition. Our commitment to excellence has established us as a top digital marketing agency in Hyderabad and a trusted partner for businesses seeking innovative marketing solutions. In addition to our digital marketing expertise, we are also a premier advertising agency in Hyderabad, known for our creative campaigns and strategic approach. At Dezign Shark, we strive to be the best advertising agency in Hyderabad, offering unparalleled services that help your business achieve its goals.',
    image: Aboutus.aboutus,
    buttonText: 'Learn More',
  };

  return (
    <>
      <PageHeader value={"About"} />
      <SectionOne data={BrandSectiondata} />
      <AboutPersonToggle />
      <Footer />
    </>
  );
};

export default About;
