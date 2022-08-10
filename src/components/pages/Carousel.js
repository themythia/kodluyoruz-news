import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState, useRef } from 'react';
import '../../index.css';
import dataList from './DataList';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper';

const Carousel = () => {
  const [itemList, setitemList] = useState({});
  const [newDataList, setNewDataList] = useState([]);
  console.log('itemList:', itemList);
  console.log('newDataList', newDataList);

  useEffect(() => {
    dataList().then((api) => {
      let textDatas = api.map((item) => ({
        imageData: item.description.split('<img src="')[1].split('?width')[0],
        titleData: item.title,
        hrefData: item.link,
      }));
      setitemList(textDatas);
    });
  }, []);

  useEffect(() => {
    if (Object.keys(itemList).length > 0) {
      let newArray = [];
      for (let i = 0; i < 10; i++) {
        newArray.push(itemList[i]);
      }
      setNewDataList(newArray);
    }
  }, [itemList]);

  const newMappingData = newDataList?.map(function (value, index) {
    return (
      <SwiperSlide
        key={index}
        className='items-start justify-start flex h-full w-full '
      >
        <div slot='container-start' className='parallax-bg'>
          <a href={value.hrefData} className='relative'>
            <img src={value.imageData} alt={value.titleData} />
          </a>
        </div>
        <div
          className='opacity-80 bg-blue-600 text-2xl p-3 ml-44 mb-4 relative rounded-full'
          data-swiper-parallax='-100'
        >
          <div>{value.titleData} </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className='mySwiper'
      >
        {newMappingData}
      </Swiper>
    </div>
  );
};

export default Carousel;
