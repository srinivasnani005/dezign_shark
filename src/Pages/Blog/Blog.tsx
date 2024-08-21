import React from 'react';
import PageHeader from '../../Components/Sections/PageHeader';
import ParticleBackground from './ParticleBackground';

const Blog: React.FC = () => {
    return (
        <>
            <PageHeader value={"Blog"} />
            <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
                <ParticleBackground />
            </div>
        </>
    );
};

export default Blog;