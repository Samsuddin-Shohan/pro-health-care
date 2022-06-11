import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from '@coreui/react';
import React from 'react';
import banner1 from '../../assets/01.jpg';
import banner2 from '../../assets/02.jpg';
import banner3 from '../../assets/03.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <CCarousel controls indicators>
      <CCarouselItem>
        <CImage className="d-block w-100 banner" src={banner1} alt="slide 1" />
        <CCarouselCaption className="d-none d-md-block">
          <h3 class="animate-charcter"> Pro Health Care</h3>
          <p className='animate-p'>We are always here for you</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100 banner" src={banner2} alt="slide 2" />
        <CCarouselCaption className="d-none d-md-block">
          <h3 class="animate-charcter"> Pro Health Care</h3>
          <p className='animate-p'>We are always here for you</p>
        </CCarouselCaption>
      </CCarouselItem>
      <CCarouselItem>
        <CImage className="d-block w-100 banner" src={banner3} alt="slide 3" />
        <CCarouselCaption className="d-none d-md-block">
          <h3 class="animate-charcter"> Pro Health Care</h3>
          <p className='animate-p'>We are always here for you</p>
        </CCarouselCaption>
      </CCarouselItem>
    </CCarousel>
  );
};

export default Banner;