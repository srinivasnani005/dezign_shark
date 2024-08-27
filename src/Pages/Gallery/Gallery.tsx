import React from 'react';
import PageHeader from '../../Components/Sections/PageHeader';
import ImageSlider from './ImageSlider';
import FadeInOutCards from './FadeInOutCards';
import Footer from '../Footer/Footer';


const Gallery: React.FC = () => {
    return (
        <>
            <PageHeader value={"Gallery"} />
            <ImageSlider />
            <FadeInOutCards startsfrom={20} />
            <FadeInOutCards startsfrom={0} />
            <FadeInOutCards startsfrom={40} />
            <Footer />
        </>
    );
};

export default Gallery;