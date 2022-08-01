import CarouselContainer from './CarouselContainer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';

const Carousel = () => {
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
    dotsClass: 'home__carousel',
    appendDots: (dots) => <div>{dots}</div>,
    customPaging: (i) => (
      <button
        onMouseEnter={() => {
          sliderRef.current.slickGoTo(i, true);
        }}
      >
        {i + 1}
      </button>
    ),
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {[...Array(20)].map((_, index) => (
        <CarouselContainer key={index} index={index} />
      ))}
    </Slider>
  );
};
export default Carousel;
