import Slider from 'react-slick';
import NewsCard from '../NewsCard/NewsCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NewsCardCarousel = () => {
  // react-slick setting props
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1.48,
    slidesToScroll: 1,
    arrows: false,
    autoplaySpeed: 5000,
    autoplay: false,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    centerMode: true,
    // might broke needs more testing
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.85,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1.75,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 380,
        settings: {
          slidesToShow: 1.6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1.48,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='md:hidden mt-[58px]'>
      <Slider {...settings}>
        {[...Array(20)].map((_, index) => (
          <NewsCard key={index} />
        ))}
      </Slider>
    </div>
  );
};
export default NewsCardCarousel;
