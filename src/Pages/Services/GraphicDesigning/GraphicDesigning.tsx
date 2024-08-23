import React from 'react';
import PageHeader from '../../../Components/Sections/PageHeader';
import SectionTwo from '../../../Components/Sections/SectionTwo';
import Footer from '../../Footer/Footer';
import ServiceForm from '../../../Components/Forms/ServicesForm';
import { GraphicDesignImages } from '../../../assets';
import SliderOne from '../../../Components/Sliders/SliderOne';
import SubBlog from '../../../Components/SubBlog/SubBlog';

const GraphicDesigning: React.FC = () => {

    const data1 = {
        
        title: "Why We Are Known as the #Best Graphics Design Company in Hyderabad",
        subtitle: "Exploring the Essentials of Graphic Designing",
        description1: "Recognized as the best graphic design company in Hyderabad, Dezign Shark is dedicated to delivering exceptional results and unmatched service. Our expertise spans a wide array of graphic design services, all aimed at elevating your brand’s online presence and driving growth. \n \n In today’s competitive landscape, businesses in Hyderabad face the challenge of standing out amidst the digital noise. As the best graphic design company in Hyderabad, Dezign Shark understands the hurdles you encounter—from creating visually appealing designs to ensuring cohesive branding across all platforms. Our mission is to transform these challenges into opportunities for growth and success, solidifying our position as the top graphic designing agency in Hyderabad.",
        description2: "Dezign Shark offers a comprehensive range of services, including logo design, marketing materials, social media graphics, and website design. Each project is approached with a unique strategy tailored to meet the specific needs of your brand. Our team of skilled designers works closely with you to create designs that not only capture attention but also resonate with your target audience.",
        imageSrc: GraphicDesignImages.graphicdesign1,
        
    };

    const data2 ={
        subtitle: "Maximize Your ROI with the Best Graphic Design Company in Hyderabad",
        description1: "Searching for the best graphic design company in Hyderabad? Our team of graphic design experts excels in the ever-evolving landscape of visual communication. From impactful logo design and engaging brochure design to stunning photography, compelling animation and motion graphics, and comprehensive branding solutions, we tailor our services to meet your specific business goals. \n \n Securing a high return on investment (ROI) is essential for any business. Our customised graphic design strategies are designed to maximise your ROI by enhancing brand visibility, boosting engagement, and driving conversions. As the best graphic design company in Hyderabad, we ensure that every project is meticulously crafted to deliver measurable results.",
        description2: "Partner with us, the leading graphic design company in Hyderabad, to elevate your brand and achieve unparalleled success. Our commitment to quality and innovation sets us apart, making us the preferred choice for businesses looking to make a significant impact through visual communication.",
        imageSrc: GraphicDesignImages.graphicdesign2,
    };


    const SliderCard =[
    {
        subheading: "Animation & Motion Graphics",
        description: " Our animation & motion graphics services create dynamic visuals that engage and captivate your audience, conveying complex messages in an engaging format.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Branding Solutions",
        description: " Our branding solutions encompass everything from brand strategy development to visual identity design, ensuring consistency and coherence across all your marketing efforts.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Logo Design",
        description: " Our logo design services create memorable and impactful logos that represent your brand identity and resonate with your audience.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Brochure Design",
        description: "Our brochure design services produce visually stunning brochures that communicate your message effectively and attract attention.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Photography",
        description: " Our photography services capture professional images that highlight your products, services, or events, enhancing your brand’s visual appeal.",
        buttonText: "Get a Free Quote",
      },
    ];

    const sampleData = [
      { 
        title: 'Why Top Businesses Trust Our Graphic Design Expertise', 
        description: 'Top businesses trust our graphic design expertise because we deliver measurable results and transparent reporting. As a leading graphics design company in Hyderabad, we prioritize client satisfaction and continuous improvement, ensuring that our strategies align with the latest industry trends and best practices.' 
      },
      { 
        title: 'Expertise and Experience', 
        description: 'With years of experience in the industry, we are among the top graphic design companies in Hyderabad. Our team of experts is dedicated to staying ahead of the curve, continuously learning and adapting to the latest trends and technologies. This ensures that we deliver cutting-edge solutions that keep your business competitive.' 
      },
      { 
        title: 'Customized Strategies', 
        description: 'We understand that every business is unique. That’s why we develop customized strategies that align with your specific goals and objectives. Whether you’re looking for logo makers in Hyderabad or comprehensive graphic design solutions, we tailor our graphic designing services to suit your needs, making us the best graphic designing company for small businesses and large corporations alike.' 
      },
      { 
        title: 'Proven Results', 
        description: 'Our track record speaks for itself. As one of the best graphic design agencies, we have helped numerous businesses achieve their visual communication goals. From enhancing brand identity to creating impactful marketing materials, our results-driven approach ensures that you see tangible outcomes from your investment.' 
      },
      { 
        title: 'Client-Centric Approach', 
        description: 'At Dezign Shark, our clients are at the heart of everything we do. We believe in building long-term relationships based on trust and transparency. Our client-centric approach means that we work closely with you to understand your challenges and provide solutions that drive growth and success. \n \n Partner with Dezign Shark, the #best graphics design company in Hyderabad, and experience the difference. Contact us today to discuss how we can help your business thrive through strategic graphic design solutions.' 
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

export default GraphicDesigning;