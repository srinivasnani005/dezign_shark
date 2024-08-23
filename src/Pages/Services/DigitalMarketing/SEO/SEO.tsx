import React from 'react';
import PageHeader from '../../../../Components/Sections/PageHeader';
import SectionTwo from '../../../../Components/Sections/SectionTwo';
import { SEOImages, WebDevelopmentImages } from '../../../../assets';
import SliderOne from '../../../../Components/Sliders/SliderOne';
import SubBlog from '../../../../Components/SubBlog/SubBlog';
import ServiceForm from '../../../../Components/Forms/ServicesForm';
import Footer from '../../../Footer/Footer';

const SEO: React.FC = () => {

    const data1 ={
        title: "Why We Are Known as the #Best SEO Services in Hyderabad",
        subtitle: "Exploring the Essentials of Search Engine Optimization (SEO)",
        description1: "At Dezign Shark, we are recognized as the #best SEO services in Hyderabad because of our commitment to delivering exceptional results and unmatched service. We specialize in a comprehensive range of SEO services designed to enhance your online visibility and drive organic traffic. \n \n In today’s competitive digital landscape, businesses in Hyderabad need to optimize their online presence. At Dezign Shark, the best SEO company in Hyderabad, we understand these challenges. From conducting strategic keyword research to implementing effective on-page SEO techniques and building authoritative backlinks, our mission is to improve your website’s search engine rankings and drive sustainable growth.",
        description2: "At Dezign Shark, we offer a comprehensive suite of SEO services tailored to meet the diverse needs of businesses in Hyderabad. Our expertise spans across various domains, making us the best SEO agency in Hyderabad.",
        imageSrc: SEOImages.seo1,
    }

    const data2 ={
        subtitle: "Maximize Your ROI with Our Best SEO Services in Hyderabad",
        description1: "Our team of experts offers the best SEO services in Hyderabad, mastering the intricacies of search engine algorithms to help you increase website traffic, improve keyword rankings, and boost conversions. We pride ourselves on delivering measurable results that significantly impact your online presence. \n \n We employ advanced techniques to ensure your SEO strategy remains effective and current. This includes SEO-rich snippets, which enhance the visibility of your content in search results, attracting more clicks from potential customers. Additionally, we perform continuous rank tracking, monitoring your progress and adjusting strategies as needed to stay ahead of ever-evolving algorithms.",
        description2: "Our approach is data-driven and tailored to meet your business’s unique needs. We analyse your website, identify areas for improvement, and implement targeted strategies to enhance your search engine performance. Our team stays updated with industry trends and best practices, ensuring your SEO efforts are always aligned with the latest developments. \n \n Choose our best SEO services in Hyderabad for a dedicated partner committed to helping you achieve sustainable growth and long-term success in the digital landscape. Experience the difference with a team that prioritises your business goals and delivers results that matter.",
        imageSrc: SEOImages.seo2,
    }


    const SliderCard =[
    {
        subheading: "Keyword Research",
        description: "Our keyword research services identify high-value keywords that drive targeted traffic to your website, optimizing content for maximum visibility.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "On-Page SEO",
        description: "Our on-page SEO techniques optimize website content, meta tags, and internal linking structure to improve search engine rankings and user experience.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Link Building",
        description: "Our link building strategies establish your website’s authority through high-quality backlinks, enhancing its credibility and search engine rankings.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "Content Creation",
        description: "Our content creation services produce SEO-friendly content that engages your audience, positions your brand as an industry leader, and drives organic traffic. By creating high-quality, relevant articles and multimedia content, we boost your online presence, attract more visitors, and convert them into loyal customers.",
        buttonText: "Get a Free Quote",
      },
      {
        subheading: "SEO Rich Snippets",
        description: "Our SEO rich snippets implementation enhances search engine listings with structured data, improving visibility and click-through rates. Using advanced markup techniques, we make your content stand out in search results, providing users with relevant information at a glance and driving targeted traffic to your site. This boosts your online presence and increases the likelihood of converting visitors into customers.",
        buttonText: "Get a Free Quote",
      },
    ];

    const sampleData = [
      { 
        title: 'Why Top Businesses Trust Our SEO Expertise', 
        description: 'Top businesses trust our SEO expertise because we deliver measurable results and transparent reporting. As one of the top SEO agencies in Hyderabad, we prioritize client satisfaction and continuous improvement, ensuring that our strategies align with the latest industry trends and best practices.' 
      },
      { 
        title: 'Expertise and Experience', 
        description: 'With years of experience in the industry, we are among the top SEO companies in Hyderabad. Our team of SEO specialists is dedicated to staying ahead of the curve, continuously learning and adapting to the evolving SEO landscape.' 
      },
      { 
        title: 'Customized Strategies', 
        description: 'We understand that every business is unique. That’s why we develop customized SEO strategies that align with your specific goals and objectives. Whether you’re a startup or a large enterprise, our SEO agency in Hyderabad tailors solutions to suit your needs, ensuring optimal results.' 
      },
      { 
        title: 'Proven Results', 
        description: 'Our track record speaks for itself. As one of the best SEO services agencies, we have helped numerous businesses achieve their SEO goals. From improving search engine rankings to increasing organic traffic, our results-driven approach ensures tangible outcomes from your investment.' 
      },
      { 
        title: 'Client-Centric Approach', 
        description: 'At Dezign Shark, our clients are at the heart of everything we do. We believe in building long-term relationships based on trust and transparency. Our client-centric approach means that we work closely with you to understand your SEO challenges and provide solutions that drive growth and success. \n \n Partner with Dezign Shark, the #best SEO services in Hyderabad, and elevate your online presence. Contact us today to discuss how we can help you achieve your SEO objectives with our strategic SEO solutions.' 
      },
    ];

    const SliderHeader = "Comprehensive SEO Services in Hyderabad";

    return (
        <>
            <PageHeader value="Search Engine Optimization (SEO)" />
            <SectionTwo data={data1} alignment="left" />
            <SectionTwo data={data2} alignment="right" />
            <SliderOne cards={SliderCard} title={SliderHeader} />
            <SubBlog data={sampleData} />
            <ServiceForm />
            <Footer />
            
        </>
    );
};

export default SEO;