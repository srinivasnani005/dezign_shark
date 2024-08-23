import React from 'react';
import PageHeader from '../../../../Components/Sections/PageHeader';
import SectionTwo from '../../../../Components/Sections/SectionTwo';
import { PPCImages} from '../../../../assets';
import SliderOne from '../../../../Components/Sliders/SliderOne';
import SubBlog from '../../../../Components/SubBlog/SubBlog';
import ServiceForm from '../../../../Components/Forms/ServicesForm';
import Footer from '../../../Footer/Footer';

const PPC: React.FC = () => {
 
    const data1 ={
        title: "Why We Are Known as the #Best PPC Advertising Company in Hyderabad",
        subtitle: "Exploring the Essentials of Pay-Per-Click (PPC) Advertising",
        description1: "At Dezign Shark, we are recognized as the #best PPC advertising company in Hyderabad because of our commitment to delivering exceptional results and unmatched service. We specialize in a comprehensive range of PPC advertising services designed to drive high-quality leads and maximize your ROI. \n \n In today’s competitive digital marketplace, businesses in Hyderabad need effective strategies to generate leads and increase sales. At Dezign Shark, the best lead generation company, we understand these challenges. From creating targeted Google ads to engaging YouTube ads and strategic Meta & LinkedIn ads, our mission is to deliver campaigns that drive conversions and business growth.",
        description2: "At Dezign Shark, we offer a comprehensive suite of PPC advertising services tailored to meet the diverse needs of businesses in Hyderabad. Our expertise spans across various platforms, making us the best PPC agency in Hyderabad.",
        imageSrc: PPCImages.ppc1,
    }

    const data2 ={
        subtitle: "Maximise Your ROI with the Best PPC Advertising Services in Hyderabad",
        description1: "Unlock the full potential of your digital marketing strategy with the best PPC advertising services in Hyderabad. Our team of PPC experts excels in navigating the complexities of digital advertising platforms to deliver exceptional results. Whether your aim is to boost brand visibility, attract new customers, or promote specific products and services, our customised PPC campaigns are designed to meet your specific objectives. \n \n We prioritise measurable outcomes and continuously optimise campaigns to ensure they perform at their best, guaranteeing you the highest possible return on investment. Our data-driven approach ensures that every click is targeted and every ad is crafted to resonate with your audience, driving engagement and conversions.",
        description2: "By choosing the best PPC advertising services in Hyderabad, you are partnering with professionals dedicated to your success. We keep abreast of the latest industry trends and platform updates to provide you with cutting-edge strategies. Our commitment to excellence and transparency means you’ll always know how your campaigns are performing and where your investment is going. \n \n Experience the best PPC advertising services in Hyderabad and watch your business grow. Let us help you achieve your digital marketing goals with campaigns that deliver real, tangible results.",
        imageSrc: PPCImages.ppc2,
    }


    const SliderCard =[
    {
        subheading: "Google Ads",
        description: "   Our Google Ads campaigns target relevant keywords and demographics to drive qualified traffic and conversions to your website.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "YouTube Ads",
        description: "  Our YouTube Ads strategies create compelling video campaigns that engage your audience and increase brand awareness.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Meta & LinkedIn Ads",
        description: "Our Meta & LinkedIn Ads campaigns leverage professional networks to reach decision-makers and B2B audiences, driving lead generation and business growth.",
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
        title: 'Why Top Businesses Trust Our PPC Expertise', 
        description: 'Top businesses trust our PPC expertise because we deliver measurable results and transparent reporting. As one of the top PPC companies in Hyderabad, we prioritize client satisfaction and continuous improvement, ensuring that our strategies align with the latest industry trends and best practices.' 
      },
      { 
        title: 'Expertise and Experience', 
        description: 'With years of experience in the industry, we are among the top PPC agencies in Hyderabad. Our team of PPC specialists is dedicated to staying ahead of the curve, continuously learning and adapting to the evolving digital advertising landscape.' 
      },
      { 
        title: 'Customized Strategies', 
        description: 'We understand that every business is unique. That’s why we develop customized PPC strategies that align with your specific goals and objectives. Whether you’re in real estate or another industry, our PPC advertising company in Hyderabad tailors solutions to suit your needs, ensuring optimal results.' 
      },
      { 
        title: 'Proven Results', 
        description: 'Our track record speaks for itself. As one of the best PPC services agencies, we have helped numerous businesses achieve their lead generation goals. From increasing conversions to maximizing ROI, our results-driven approach ensures tangible outcomes from your investment.' 
      },
      { 
        title: 'Client-Centric Approach', 
        description: 'At Dezign Shark, our clients are at the heart of everything we do. We believe in building long-term relationships based on trust and transparency. Our client-centric approach means that we work closely with you to understand your PPC challenges and provide solutions that drive growth and success. \n \n Partner with Dezign Shark, the #best PPC advertising company in Hyderabad, and elevate your lead generation efforts. Contact us today to discuss how we can help you achieve your PPC objectives with our strategic PPC advertising solutions.' 
      },
    ];

    const SliderHeader = "Comprehensive PPC Advertising Services in Hyderabad";

    return (
        <>
            <PageHeader value="Pay-Per-Click (PPC) Advertising" />
            <SectionTwo data={data1} alignment="left" />
            <SectionTwo data={data2} alignment="right" />
            <SliderOne cards={SliderCard} title={SliderHeader} />
            <SubBlog data={sampleData} />
            <ServiceForm />
            <Footer />
            
        </>
    );
};

export default PPC;