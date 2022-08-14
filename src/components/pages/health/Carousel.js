import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = (props) => {
  const [carouselItems, setCarouselItems] = useState([]);
  const [test, setTest] = useState();

  useEffect(() => {
    if (props?.carouselItemList?.length > 0) {
      const carouselArray = [];
      for (let i = 0; i < 10; i++) {
        carouselArray.push(props?.carouselItemList?.[i]);
      }
      setCarouselItems(carouselArray);
      setTest(
        carouselItems?.map(function (each, index) {
          return (
            <SwiperSlide key={index}>
              <Link
                to={`/haberler/${props.details?.[index]?.id}`}
                state={{
                  category: props.details?.[index]?.category,
                  news: props.details?.[index],
                }}
              >
                <img
                  className='img'
                  src={each?.['description']?.substring(
                    10,
                    each?.['description']?.indexOf(' ', 10) - 1
                  )}
                  alt=''
                  width={1000}
                  height={'100%'}
                />
                <div className='carouselTitle'>{each?.['title']}</div>
              </Link>
            </SwiperSlide>
          );
        })
      );
    }
  }, [props]);

  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {test}
      </Swiper>
    </div>
  );
};

export default Carousel;
