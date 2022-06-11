import React from 'react';
import Banner from '../../components/Banner/Banner';
import Footer from '../../components/Footer/Footer';
import Histories from '../../components/Histories/Histories';
import NavBar from '../../components/NavBar/NavBar';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Services></Services>
            <Histories></Histories>
            <Footer></Footer>
        </div>
    );
};

export default Home;