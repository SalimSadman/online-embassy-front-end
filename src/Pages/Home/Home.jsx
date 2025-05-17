import React from 'react';
import Banner from './Banner/Banner';
import Services from './Services/Services';
import Testemonials from './Testimonials/Testemonials';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Testemonials></Testemonials>
        </div>
    );
};

export default Home;