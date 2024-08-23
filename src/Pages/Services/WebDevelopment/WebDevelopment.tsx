import React from 'react';
import PageHeader from '../../../Components/Sections/PageHeader';
import SectionTwo from '../../../Components/Sections/SectionTwo';
import { WebDevelopmentImages } from '../../../assets';
import SliderOne from '../../../Components/Sliders/SliderOne';
import SubBlog from '../../../Components/SubBlog/SubBlog';
import ServiceForm from '../../../Components/Forms/ServicesForm';
import Footer from '../../Footer/Footer';

const GraphicDesigning: React.FC = () => {

    const data1 ={
        title: "Why We Are Known as the #Best Website Developers in Hyderabad",
        subtitle: "Exploring the Essentials of Website Design and Development",
        description1: "Dezign Shark proudly stands as the Best Website Developers in Hyderabad, offering unparalleled web design and development services tailored to elevate your brand’s online presence. Our team is committed to delivering exceptional results and outstanding service, distinguishing us in today’s competitive digital landscape. \n \n In the bustling market of Hyderabad, businesses face the challenge of cutting through the digital noise to capture attention. As the leading choice for the Best Website Developers in Hyderabad, we fully understand these challenges. From creating visually captivating designs to ensuring a seamless and intuitive user experience, we are dedicated to transforming these obstacles into opportunities for your business’s growth.",
        description2: "Our comprehensive suite of services is designed to meet the unique needs of each client, helping you achieve your specific goals and drive significant growth. By partnering with Dezign Shark, you gain access to expert web solutions that are both innovative and effective. Choose us for your web development needs, and experience the benefits of working with the best in the industry. Let us help you stand out and achieve your online objectives with our top-tier web design and development expertise.",
        imageSrc: WebDevelopmentImages.webdev1,
    }

    const data2 ={
        subtitle: "Maximize Your ROI with the Best Website Developers in Hyderabad",
        description1: "Unlock the full potential of your online presence with the top website developers in Hyderabad. Our expert team specialises in delivering exceptional web design and development services tailored to your unique business needs. We understand the ever-evolving digital landscape and offer a comprehensive range of solutions, from creative and user-centric web designs to powerful and scalable backend development. \n \n Achieving a high return on investment (ROI) is essential for any thriving business. Our customised website design and development strategies are meticulously crafted to maximise your ROI by driving more traffic to your site, enhancing user engagement, and elevating your online visibility. As the leading website developers in Hyderabad, we focus on creating websites that not only captivate your audience but also convert visitors into loyal customers.",
        description2: "Our approach combines innovative design elements with advanced development techniques to ensure your website performs at its best. From the initial consultation to the final launch, we prioritise your business goals and deliver solutions that provide measurable results. Trust the best website developers in Hyderabad to elevate your online presence and achieve outstanding business success. Partner with us to experience the difference that expert web design and development can make for your ROI.",
        imageSrc: WebDevelopmentImages.webdev2,
    }


    const SliderCard =[
    {
        subheading: "Website Maintenance",
        description: "Our website maintenance services ensure your site remains secure, up-to-date, and functioning smoothly, allowing you to focus on your core business.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "E-commerce Solutions",
        description: "Our e-commerce solutions are tailored to create robust, user-friendly online stores that drive sales and provide seamless shopping experiences for your customers.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Landing Page Design",
        description: "Our landing page design services focus on creating high-converting pages that capture leads and drive conversions, maximizing your marketing efforts.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Search Engine Optimization",
        description: " Our best SEO services in Hyderabad are crafted to boost your online presence, drive organic traffic, and elevate your website’s ranking on search engines.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Responsive Website Design & Development",
        description: " Our responsive website design and development services ensure your site looks and functions perfectly on any device, enhancing user experience and engagement.",
        buttonText: "Get a Free Quote",
      },
    ];

    const sampleData = [
      { 
        title: 'Why Top Businesses Trust Our Website Design and Development Expertise', 
        description: 'Top businesses trust our website design and development expertise because we deliver measurable results and transparent reporting. As a leading website design company in Hyderabad, we prioritize client satisfaction and continuous improvement, ensuring that our strategies align with the latest industry trends and best practices.' 
      },
      { 
        title: 'Expertise and Experience', 
        description: 'With years of experience in the industry, we are among the top 10 website development companies in Hyderabad. Our team of experts is dedicated to staying ahead of the curve, continuously learning and adapting to the latest trends and technologies. This ensures that we deliver cutting-edge solutions that keep your business competitive.' 
      },
      { 
        title: 'Customized Strategies', 
        description: 'We understand that every business is unique. That’s why we develop customized strategies that align with your specific goals and objectives. Whether you’re a small business or a large enterprise, we tailor our website design and development services to suit your needs, making us the best website development company for small businesses and large corporations alike.' 
      },
      { 
        title: 'Proven Results', 
        description: 'Our track record speaks for itself. As one of the top website design companies, we have helped numerous businesses achieve their online goals. From creating engaging web designs to developing high-performing websites, our results-driven approach ensures that you see tangible outcomes from your investment.' 
      },
      { 
        title: 'Client-Centric Approach', 
        description: 'At Dezign Shark, our clients are at the heart of everything we do. We believe in building long-term relationships based on trust and transparency. Our client-centric approach means that we work closely with you to understand your challenges and provide solutions that drive growth and success.  \n \n Partner with Dezign Shark, the #best website developers in Hyderabad, and experience the difference. Contact us today to discuss how we can help your business grow through strategic website design and development solutions.' 
      },
    ];

    const SliderHeader = "Comprehensive Website Design and Development Services in Hyderabad";

    return (
        <>
            <PageHeader value="Web Development" />
            <SectionTwo data={data1} alignment="left" />
            <SectionTwo data={data2} alignment="right" />
            <SliderOne cards={SliderCard} title={SliderHeader} />
            <SubBlog data={sampleData} />
            <ServiceForm />
            <Footer />
            
        </>
    );
};

export default GraphicDesigning;