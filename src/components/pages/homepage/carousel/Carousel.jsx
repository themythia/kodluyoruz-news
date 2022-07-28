import CarouselContainer from './CarouselContainer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { useRef } from 'react';
import useWindowSize from '../../../../utils/hooks/useWindowSize';

const Carousel = () => {
  const sliderRef = useRef(null);
  const { width } = useWindowSize();

  // react-slick setting props
  const settings = {
    dots: true,
    infinite: true,
    // speed controls animation duration
    // if another button hovered faster than the speed value
    // slickGoTo function doesn't work reliably
    // so speed set to 0 on screens bigger than 767px width
    // to allow smooth hovering experience
    speed: width < 768 ? 300 : 0,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    dotsClass: 'carousel',
    appendDots: (dots) => <div>{dots}</div>,
    customPaging: (i) => (
      <button
        onMouseEnter={() => {
          sliderRef.current.slickGoTo(i);
        }}
      >
        {i + 1}
      </button>
    ),
  };

  return (
    <Slider {...settings} ref={sliderRef}>
      {[...Array(20)].map((_, index) => (
        <CarouselContainer key={index} />
      ))}
    </Slider>
  );
};
export default Carousel;
