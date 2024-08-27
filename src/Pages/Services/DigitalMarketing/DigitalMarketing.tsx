import React from 'react';
import PageHeader from '../../../Components/Sections/PageHeader';
import SectionTwo from '../../../Components/Sections/SectionTwo';
import Footer from '../../Footer/Footer';
import ServiceForm from '../../../Components/Forms/ServicesForm';
import { DigitalImages, GraphicDesignImages } from '../../../assets';
import SliderOne from '../../../Components/Sliders/SliderOne';
import SubBlog from '../../../Components/SubBlog/SubBlog';

const GraphicDesigning: React.FC = () => {

    const data1 = {
        
        title: "Why We Are Known as the #Best Digital Marketing Agency in Hyderabad",
        subtitle: "Exploring the Essentials of Digital Marketing",
        description1: "At Dezign Shark, we are recognized as the #best digital marketing agency in Hyderabad because of our commitment to delivering exceptional results and unmatched service. We specialize in a wide array of digital marketing services designed to elevate your brand’s online presence and drive growth. \n \n In today’s competitive landscape, businesses in Hyderabad face the daunting task of standing out amidst the digital noise. At Dezign Shark, the best digital marketing agency in Hyderabad, we understand the challenges you encounter – from struggling to rank on search engines to navigating the complexities of social media engagement. Our mission is to turn these challenges into opportunities for growth and success, making us the top digital marketing agency in Hyderabad.",
        description2: "",
        imageSrc: DigitalImages.digital1
        
    };

    const data2 ={
        subtitle: "Maximize Your ROI with our Best Digital Marketing Agency in Hyderabad",
        description1: "Our team of digital marketing experts understands the dynamic landscape of online marketing. From strategic SEO to compelling content creation, impactful social media campaigns, and precision-targeted paid advertising, we tailor our services to meet your specific business goals.\n \n Achieving a high return on investment (ROI) is crucial for any business. Our tailored digital marketing strategies are designed to maximize your ROI by increasing traffic, enhancing conversions, and boosting your online visibility. As a top digital marketing agency in Hyderabad, we ensure that every campaign is meticulously crafted to deliver measurable results.",
        description2: "",
        imageSrc: DigitalImages.digital2
    };


    const SliderCard =[
    {
        subheading: "Personal Branding",
        description: " Our personal branding services help you establish a strong, authentic online presence, showcasing your unique skills and expertise to attract opportunities and grow your network.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Search Engine Optimization",
        description: "Our best SEO services in Hyderabad are crafted to boost your online presence, drive organic traffic, and elevate your website’s ranking on search engines.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Influencer Marketing",
        description: " Harness the power of influence to drive brand affinity and loyalty. As a top influencer marketing agency, we connect your brand with trusted voices that resonate deeply with your audience’s aspirations.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Video Marketing",
        description: "Our video marketing services create compelling visual content that captures attention, tells your brand’s story, and drives engagement, ensuring your message resonates with your audience.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Content Marketing",
        description: "Our content marketing services create valuable, relevant content that engages your audience, builds trust, and drives conversions, making your brand stand out in a crowded market.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Email/WhatsApp Marketing",
        description: " Our email and WhatsApp marketing services deliver personalized messages to your audience, fostering strong relationships, increasing engagement, and driving sales through targeted campaigns.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Social Media Promotions & Optimization",
        description: "Our social media promotions and optimization services ensure daily postings and engagement, boosting your brand’s visibility and building a loyal community of followers.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "PPC/Lead Generation",
        description: "Our PPC and lead generation services target the right audience, drive high-quality leads, and maximize your ROI with strategic ad placements that increase conversions.",
        buttonText: "Get a Free Quote",
      },
    ];

    const sampleData = [
      { 
        title: 'Why Top Businesses Trust Our Digital Marketing Expertise', 
        description: 'Top businesses trust our digital marketing expertise because we deliver measurable results and transparent reporting. As a leading digital marketing agency in Hyderabad, we prioritize client satisfaction and continuous improvement, ensuring that our strategies align with the latest industry trends and best practices.' 
      },
      { 
        title: 'Expertise and Experience', 
        description: 'With years of experience in the industry, we are among the top 10 digital marketing agencies in Hyderabad. Our team of experts is dedicated to staying ahead of the curve, continuously learning and adapting to the latest trends and technologies. This ensures that we deliver cutting-edge solutions that keep your business competitive.' 
      },
      { 
        title: 'Customized Strategies', 
        description: 'We understand that every business is unique. That’s why we develop customized strategies that align with your specific goals and objectives. Whether you’re a small business or a large enterprise, we tailor our digital marketing services to suit your needs, making us the best digital marketing agency for small businesses and large corporations alike.' 
      },
      { 
        title: 'Proven Results', 
        description: 'Our track record speaks for itself. As one of the top digital marketing companies, we have helped numerous businesses achieve their digital marketing goals. From improving search engine rankings to increasing social media engagement, our results-driven approach ensures that you see tangible outcomes from your investment.' 
      },
      { 
        title: 'Client-Centric Approach', 
        description: 'At Dezign Shark, our clients are at the heart of everything we do. We believe in building long-term relationships based on trust and transparency. Our client-centric approach means that we work closely with you to understand your challenges and provide solutions that drive growth and success. \n \n Partner with Dezign Shark, the #best digital marketing agency in Hyderabad, and experience the difference. Contact us today to discuss how we can help your business grow through strategic digital marketing solutions.' 
      },
    ];

    const SliderHeading = "Comprehensive Digital Marketing Services in Hyderabad";

    return (
        <>
            <PageHeader value="Digital Marketing" />
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