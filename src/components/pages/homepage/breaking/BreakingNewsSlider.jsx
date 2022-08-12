import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderItem from './SliderItem';
import useWindowSize from '../../../../utils/hooks/useWindowSize';
import Arrows from './Arrows';
import { useContext, useRef, useState } from 'react';
import { HomeContext } from '../../../../contexts/HomeContext';

const BreakingNewsSlider = () => {
  // carousel slide index
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);
  const { news } = useContext(HomeContext);

  // react-slick setting props
  const settings = {
    accessibility: true,
    afterChange: (i) => setIndex(i),
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
    draggable: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: false,
    pauseOnHover: true,
    vertical: true,
    className: 'md:w-[calc(100vw-239px)] lg:w-[771px]',
  };

  // TODO: change numbers depending on data length
  // handles arrow clicks
  const handleArrows = (type) => {
    if (sliderRef && sliderRef.current) {
      if (type === 'next') sliderRef.current.slickNext();
      else if (type === 'prev') sliderRef.current.slickPrev();
    }
  };

  return (
    <div className='md:w-[calc(100vw-164px)] lg:w-[846px] h-full flex flex-row'>
      <Arrows handleArrows={handleArrows} />
      <Slider {...settings} ref={sliderRef}>
        {[...Array(10)].map((_, index) => (
          <SliderItem key={index} news={news?.items?.[index]} />
        ))}
      </Slider>
    </div>
  );
};
export default BreakingNewsSlider;
