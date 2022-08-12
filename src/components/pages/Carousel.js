import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react';
import '../../index.css';
import dataList from './DataList';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/bundle';
import { Pagination, Navigation } from 'swiper';
import './style.css';
import formatRSSFeed from '../../utils/api/formatRSSFeed';
import { Link } from 'react-router-dom';

const Carousel = () => {
  const [itemList, setitemList] = useState({});
  const [newDataList, setNewDataList] = useState([]);
  // state to handle news details
  const [detail, setDetail] = useState([]);

  console.log('itemList', itemList);
  console.log('detail', detail);

  useEffect(() => {
    dataList().then((api) => {
      console.log('api', api);
      setDetail(formatRSSFeed({ items: api }).items);
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
      <SwiperSlide key={index} className=' relative pt-8'>
        <div className=' relative h-[550px] w-[1020px]'>
          <Link
            to={`/haberler/${detail[index].id}`}
            state={{ category: 'otomobil', news: detail[index] }}
          >
            <img
              src={value.imageData}
              alt={value.titleData}
              className='w-full h-ful'
            />
          </Link>
        </div>
        <div className='absolute text-sm p-4 bottom-14 w-1020px bg-[#00479E] text-white lg:text-2xl font-bold h-20 overflow-ellipsis'>
          <div>{value?.titleData} </div>
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
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          },
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
