import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';
import CarouselItem from './CarouselItem';
import useDynamicContext from '../../../../utils/hooks/useDynamicContext.js';

const Carousel = ({ type }) => {
  const sliderRef = useRef(null);

  // react-slick setting props
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    dotsClass:
      type === 'home'
        ? 'home__carousel'
        : type === 'econ'
        ? 'econ__carousel'
        : '',
    appendDots: (dots) => <div>{dots}</div>,
    customPaging: (i) => (
      <button
        onMouseEnter={() => {
          sliderRef.current.slickGoTo(i, true);
        }}
        data-testid='carousel-button'
      >
        {i + 1}
      </button>
    ),
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {[...Array(20)].map((_, index) => (
        <CarouselItem key={index} index={index} type={type} />
      ))}
    </Slider>
  );
};
export default Carousel;
