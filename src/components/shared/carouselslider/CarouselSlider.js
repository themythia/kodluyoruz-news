import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { EffectCoverflow, Pagination, Navigation, Parallax } from 'swiper';
import { Link } from 'react-router-dom';

const CarouselSlider = ({ data, details }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };
  let newData = [];
  for (let i = 0; i < 10; i++) {
    newData.push(data[i]);
  }

  const newsArray = newData.map(function (each, key) {
    return (
      <SwiperSlide
        className='items-start justify-start flex h-full w-full '
        key={key}
      >
        <div slot='container-start' className='parallax-bg'>
          <Link
            to={`/haberler/${details?.[key]?.id}`}
            state={{ category: 'turkiye', news: details?.[key] }}
          >
            <img
              src={
                each?.['description']
                  ? each['description'].substring(
                      10,
                      each['description'].indexOf(' ', 10) - 1
                    )
                  : ''
              }
              alt='test'
              className='image rounded-3xl'
            ></img>
          </Link>
        </div>
        <div
          className='opacity-80 bg-blue-600 text-2xl p-3 ml-44 mb-4 relative rounded-full'
          data-swiper-parallax='-100'
        >
          <div>{each?.['title'] ? each['title'] : ''}</div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        speed={600}
        parallax={true}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        initialSlide={2}
        autoplay={{ delay: 3000 }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={pagination}
        modules={[Parallax, Pagination, Navigation, EffectCoverflow]}
        className='mySwiper max-w-[1000px]'
      >
        {newsArray}
      </Swiper>
    </>
  );
};

export default CarouselSlider;
