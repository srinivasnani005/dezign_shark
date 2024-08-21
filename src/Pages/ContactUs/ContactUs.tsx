import React from 'react';
import PageHeader from '../../Components/Sections/PageHeader';
import AboutUsForm from './AboutUsForm';
import Footer from '../Footer/Footer';


const ContactUs: React.FC = () => {
    return (
        <>
            <PageHeader value={"Contact Us"} />
            <AboutUsForm />
            <Footer />
        </>
    );
};

export default ContactUs;