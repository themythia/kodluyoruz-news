import CarouselContainer from './CarouselContainer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const MobileCarousel = () => {
  // state to track carousel index
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
    dotsClass: 'mobileCarousel',
    appendDots: (dots) => <div>{dots}</div>,
  };

  return (
    <Slider {...settings}>
      {[...Array(20)].map((_, index) => (
        <CarouselContainer key={index} />
      ))}
    </Slider>
  );
};
export default MobileCarousel;
