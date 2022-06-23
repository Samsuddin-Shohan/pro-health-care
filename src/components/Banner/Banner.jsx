import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import banner2 from '../../assets/02.jpg';
import banner3 from '../../assets/03.jpg';
import './Banner.css';


const Banner = () => {


  return (
    <div class='container-fluid position-relative' >
      <OwlCarousel items={1}
        className="owl-theme"
        loop
        nav
        autoplay
        margin={0}
      >
        <div ><img className="img" src={banner3} /></div>
        <div><img className="img" src={banner2} /></div>
        <div><img className="img" src={banner3} /></div>

      </OwlCarousel>

    </div>
  );
};

export default Banner;