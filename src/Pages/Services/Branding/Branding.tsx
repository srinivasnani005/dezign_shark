import React from 'react';
import PageHeader from '../../../Components/Sections/PageHeader';
import SectionTwo from '../../../Components/Sections/SectionTwo';
import Footer from '../../Footer/Footer';
import ServiceForm from '../../../Components/Forms/ServicesForm';
import { BrandingImages } from '../../../assets';
import SliderOne from '../../../Components/Sliders/SliderOne';
import SubBlog from '../../../Components/SubBlog/SubBlog';

const Branding: React.FC = () => {

    const data1 = {
        
        title: "Why We Are Known as the #Best Branding Agency in Hyderabad",
        subtitle: "Exploring the Essentials of Branding Services",
        description1: "Dezign Shark stands out as the best branding agency in Hyderabad, renowned for our unwavering commitment to delivering outstanding results and exceptional service. Our agency specializes in a wide range of branding services, each designed to help you establish and elevate your brand’s identity in a dynamic market. \n \n In the competitive landscape of Hyderabad, creating a distinctive and memorable brand presence is essential. As the premier choice for both startups and established businesses, Dezign Shark is equipped to tackle these challenges head-on. We offer a comprehensive suite of services that includes developing robust brand strategies, crafting cohesive corporate identity designs, and creating thorough brand guidelines.",
        description2: "Our mission is to transform your brand into a powerful asset that resonates with your target audience and stands out in the marketplace. By choosing Dezign Shark, the best branding agency in Hyderabad, you invest in a partnership dedicated to achieving remarkable results and fostering long-term success for your brand. Let us help you navigate the complexities of branding and position your business for unparalleled growth.",
        imageSrc: BrandingImages.branding1,
        
    };

    const data2 ={
        subtitle: "Maximize Your ROI with Our End-to-End Branding Services",
        description1: "Our team of branding experts understands the importance of creating a strong brand foundation. Whether you’re looking to launch a new brand or revamp your existing identity, our end-to-end branding services are designed to maximize your ROI. We develop strategies that enhance brand recognition, foster customer loyalty, and drive business growth.",
        description2: "",
        imageSrc: BrandingImages.branding2,
    };


    const SliderCard =[
    {
        subheading: "Brand Strategy Development",
        description: "  Our brand strategy development services focus on defining your brand’s purpose, positioning, and unique value proposition in the market.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Corporate Identity Design",
        description: " Our corporate identity design services create visual elements that reflect your brand’s identity, including logos, typography, color schemes, and more.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Brand Guidelines",
        description: "  Our brand guidelines ensure consistency in brand communication across all platforms, maintaining brand integrity and enhancing brand recognition.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Public Relations (PR)",
        description: " Our PR services help you build positive relationships with your audience through strategic communication and media relations.",
        buttonText: "Get a Free Quote",
      },
    //   {
    //     subheading: "Photography",
    //     description: " Our photography services capture professional images that highlight your products, services, or events, enhancing your brand’s visual appeal.",
    //     buttonText: "Get a Free Quote",
    //   },
    ];

    const sampleData = [
      { 
        title: 'Why Top Businesses Trust Our Branding Expertise', 
        description: 'Top businesses trust our branding expertise because we deliver measurable results and strategic insights. As one of the top branding agencies in Hyderabad, we prioritize client satisfaction and continuous improvement, ensuring that our strategies align with the latest industry trends and best practices.' 
      },
      { 
        title: 'Expertise and Experience', 
        description: 'With years of experience in the industry, we are among the top branding companies in Hyderabad. Our team of branding specialists is dedicated to staying ahead of the curve, continuously learning and adapting to the evolving landscape of branding.' 
      },
      { 
        title: 'Customized Strategies', 
        description: 'We understand that every brand is unique. That’s why we develop customized strategies that align with your specific goals and objectives. Whether you’re a startup or an established enterprise, we tailor our branding services to suit your needs, making us the best branding agency in Hyderabad for businesses of all sizes.' 
      },
      { 
        title: 'Proven Results', 
        description: 'Our track record speaks for itself. As one of the top branding agencies, we have helped numerous businesses achieve their branding goals. From creating compelling brand identities to executing successful PR campaigns, our results-driven approach ensures that you see tangible outcomes from your investment.' 
      },
      { 
        title: 'Client-Centric Approach', 
        description: 'At Dezign Shark, our clients are at the heart of everything we do. We believe in building long-term relationships based on trust and transparency. Our client-centric approach means that we work closely with you to understand your brand’s challenges and provide solutions that drive growth and success.  \n \n Partner with Dezign Shark, the #best branding agency in Hyderabad, and elevate your brand to new heights. Contact us today to discuss how we can help you achieve your branding objectives with our strategic branding solutions.' 
      },
    ];

    const SliderHeading = "Comprehensive Graphic Design Services in Hyderabad";

    return (
        <>
            <PageHeader value="Graphic Designing" />
            <SectionTwo data={data1} alignment="left" />
            <SectionTwo data={data2} alignment="right" />
            <SliderOne cards={SliderCard} title={SliderHeading} />
            <SubBlog data={sampleData} />
            <ServiceForm />
            <Footer />
        </>
    );
};

export default Branding;