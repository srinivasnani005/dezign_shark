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
            <FadeInOutCards />
            <Footer />
        </>
    );
};

export default Gallery;