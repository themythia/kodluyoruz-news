import React, { useEffect, useState } from 'react';
import Footer from '../shared/Footer';
import Header from '../shared/Header/Header';
import { getPosts } from '../../services/posts';
import CarouselSlider from '../shared/carouselslider/CarouselSlider';
const Sport = () => {
  const [getData, setGetData] = useState({});
  const [loadMore, setLoadMore] = useState(18);
  const [weatherList, setWeatherList] = useState({});

  useEffect(() => {
    getPosts('weather')?.then((data) => setWeatherList(data));
    getPosts('turkiye')?.then((data) => setGetData(data));
  }, []);

  let newsArray = [];
  for (let i = 0; i < loadMore; i++) {
    newsArray.push(getData[i]);
  }

  const newsList = newsArray.map(function (each, index) {
    return (
      <li
        className='bg-white relative h-64 w-100/3  box-border items-center justify-center '
        key={index}
      >
        <a
          href={
            each?.['description']
              ? each['description'].substring(
                  10,
                  each['description'].indexOf(' ', 10) - 1
                )
              : ''
          }
          className='relative block max-w-full'
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
            alt='HTML tutorial'
            className='min-h-11 cursor-pointer'
          ></img>
        </a>
        <div className='block items-center justify-center p-4 text-16-19 font-bold line-clamp-2 '>
          {each?.['title'] ? each['title'] : ''}
        </div>
      </li>
    );
  });
  return (
    <>
      <Header name={'Sport'} weathers={weatherList} />
      <div className='font-roboto common-container bg-bg'>
        <div className='category-container mx-3'>
          <CarouselSlider data={newsArray} />
          <div className=' mb-5 relative mx-auto max-w-screen-lg  w-full'>
            <ul className='relative box-border gap-4 clear-both flex flex-wrap items-center justify-between'>
              {newsList}
            </ul>
          </div>
        </div>
      </div>
      <div className='font-roboto relative infinite max-w-screen-lg mx-auto w-full bg-bg justify-center items-center flex'>
        <div className='block pt-12 pb-7 w-full'>
          <div
            className='bg-white infinite-link w-full py-4 border-solid border-2 justify-center items-center flex text-16-19 cursor-pointer'
            onClick={() =>
              setLoadMore((totalListNumber) => totalListNumber + 9)
            }
          >
            DAHA FAZLA GÖSTER
          </div>
        </div>
      </div>
      <Footer
        twitter='https://twitter.com/'
        facebook='https://www.facebook.com/'
        instagram='https://www.instagram.com/'
        youtube='https://www.youtube.com/'
        linkedin='https://www.linkedin.com/'
      />
    </>
  );
};

export default Sport;
