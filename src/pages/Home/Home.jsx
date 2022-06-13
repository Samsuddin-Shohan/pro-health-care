import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../../components/Doctors/Doctors';
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
            <Doctors></Doctors>
            <Footer></Footer>
        </div>
    );
};

export default Home;