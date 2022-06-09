import React from 'react';
import Banner from '../../components/Banner/Banner';
import NavBar from '../../components/NavBar/NavBar';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
        </div>
    );
};

export default Home;