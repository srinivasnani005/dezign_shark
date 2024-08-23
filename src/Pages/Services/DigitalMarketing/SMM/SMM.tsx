import React from 'react';
import PageHeader from '../../../../Components/Sections/PageHeader';
import SectionTwo from '../../../../Components/Sections/SectionTwo';
import { SMMImages, WebDevelopmentImages } from '../../../../assets';
import SliderOne from '../../../../Components/Sliders/SliderOne';
import SubBlog from '../../../../Components/SubBlog/SubBlog';
import ServiceForm from '../../../../Components/Forms/ServicesForm';
import Footer from '../../../Footer/Footer';

const SMM: React.FC = () => {

    const data1 ={
        title: "Why We Are Known as the #1 Social Media Marketing Agency in Hyderabad",
        subtitle: "Exploring the Essentials of Social Media Marketing",
        description1: "At Dezign Shark, we are recognized as the #1 social media marketing agency in Hyderabad because of our commitment to delivering exceptional results and unmatched service. We specialize in a comprehensive range of social media marketing services designed to elevate your brand’s presence and engage your audience effectively. \n \n In today’s digital age, businesses in Hyderabad need robust social media strategies to connect with their target audience. At Dezign Shark, the best social media marketing company, we understand these challenges. From creating engaging content to managing ad campaigns and fostering community engagement, our mission is to build your brand’s reputation and drive business growth through social media.",
        description2: "At Dezign Shark, we offer a comprehensive suite of social media marketing services tailored to meet the diverse needs of businesses in Hyderabad. Our expertise spans across various platforms, making us the top social media marketing agency in Hyderabad",
        imageSrc: SMMImages.smm1,
    }

    const data2 ={
        subtitle: "Maximise Your ROI with the Best Social Media Marketing Services in Hyderabad",
        description1: "Unlock the full potential of your brand with our expert social media marketing services in Hyderabad. At [Your Company Name], we offer the best social media marketing services in Hyderabad, designed to elevate your brand’s online presence and drive meaningful results. Our team of social media specialists is well-versed in the nuances of various platforms and audience behaviours, ensuring that each campaign is strategically crafted to meet your specific goals. \n \n Whether you aim to enhance brand awareness, drive targeted website traffic, or increase sales, our services are tailored to deliver measurable success. We leverage data-driven strategies and continuous optimization to refine your social media efforts, ensuring that your investment yields the highest possible return. Our approach focuses on creating compelling content, engaging with your audience, and analysing performance metrics to fine-tune strategies for optimal results.",
        description2: "Choose our best social media marketing services in Hyderabad to transform your digital presence and achieve your business objectives. Let us help you navigate the complexities of social media with confidence and expertise, delivering results that exceed expectations. Partner with us for a comprehensive social media strategy that drives growth and maximises your ROI.",
        imageSrc: SMMImages.smm2,
    }


    const SliderCard =[
    {
        subheading: "Content Creation",
        description: "  Our social media marketing agency in Hyderabad creates compelling content that resonates with your audience, drives engagement, and strengthens your brand’s identity.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Social Media Management",
        description: " Our top social media marketing companies in Hyderabad manage your social media channels effectively, ensuring consistent brand messaging and timely responses to audience interactions.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Paid Advertising",
        description: " Our social media marketing services include strategic ad campaigns on platforms like Facebook, Instagram, LinkedIn, and Twitter, targeting specific demographics to maximize reach and conversions.",
        buttonText: "Get a Free Quote",
      },
    //   {
    //     subheading: "Content Creation",
    //     description: "Our content creation services produce SEO-friendly content that engages your audience, positions your brand as an industry leader, and drives organic traffic. By creating high-quality, relevant articles and multimedia content, we boost your online presence, attract more visitors, and convert them into loyal customers.",
    //     buttonText: "Get a Free Quote",
    //   },
    //   {
    //     subheading: "SEO Rich Snippets",
    //     description: "Our SEO rich snippets implementation enhances search engine listings with structured data, improving visibility and click-through rates. Using advanced markup techniques, we make your content stand out in search results, providing users with relevant information at a glance and driving targeted traffic to your site. This boosts your online presence and increases the likelihood of converting visitors into customers.",
    //     buttonText: "Get a Free Quote",
    //   },
    ];

    const sampleData = [
      { 
        title: 'Why Top Businesses Trust Our Social Media Marketing Expertise', 
        description: 'Top businesses trust our social media marketing expertise because we deliver measurable results and transparent reporting. As one of the top social media marketing agencies in Hyderabad, we prioritize client satisfaction and continuous improvement, ensuring that our strategies align with the latest industry trends and best practices.' 
      },
      { 
        title: 'Expertise and Experience', 
        description: 'With years of experience in the industry, we are among the top social media marketing companies in Hyderabad. Our team of social media specialists is dedicated to staying ahead of the curve, continuously learning and adapting to the evolving social media landscape.' 
      },
      { 
        title: 'Customized Strategies', 
        description: 'We understand that every business is unique. That’s why we develop customized social media strategies that align with your specific goals and objectives. Whether you’re a startup or a large enterprise, our social media marketing company in Hyderabad tailors solutions to suit your needs, ensuring optimal results.' 
      },
      { 
        title: 'Proven Results', 
        description: 'Our track record speaks for itself. As the #1 social media agency in Hyderabad, we have helped numerous businesses achieve their social media marketing goals. From increasing followers to improving engagement rates, our results-driven approach ensures tangible outcomes from your investment.' 
      },
      { 
        title: 'Client-Centric Approach', 
        description: 'At Dezign Shark, our clients are at the heart of everything we do. We believe in building long-term relationships based on trust and transparency. Our client-centric approach means that we work closely with you to understand your social media challenges and provide solutions that drive growth and success.\n \n Partner with Dezign Shark, the #1 social media marketing agency in Hyderabad, and elevate your social media presence. Contact us today to discuss how we can help you achieve your social media marketing objectives with our strategic social media solutions.' 
      },
    ];

    const SliderHeader = "Comprehensive Social Media Marketing Services in Hyderabad";

    return (
        <>
            <PageHeader value="Social Media Marketing" />
            <SectionTwo data={data1} alignment="left" />
            <SectionTwo data={data2} alignment="right" />
            <SliderOne cards={SliderCard} title={SliderHeader} />
            <SubBlog data={sampleData} />
            <ServiceForm />
            <Footer />
            
        </>
    );
};

export default SMM;