import React, { useEffect, useRef, useState } from 'react';
import { getPosts } from '../../../services/posts';
import CarouselSlider from '../../shared/carouselslider/CarouselSlider';
import formatRSSFeed from '../../../utils/api/formatRSSFeed';
import { Link } from 'react-router-dom';

const Turkey = () => {
  const [getData, setGetData] = useState({});
  const [loadMore, setLoadMore] = useState(18);
  // state to handle news details
  const [details, setDetails] = useState([]);

  console.log('details', details);

  useEffect(() => {
    getPosts('turkiye')?.then((data) => {
      setGetData(data);
      setDetails(formatRSSFeed({ items: data }).items);
    });
  }, []);

  const downBottom = useRef(null);
  const upTop = useRef(null);

  let newsArray = [];
  for (let i = 0; i < loadMore; i++) {
    newsArray.push(getData[i]);
  }
  function goDown() {
    downBottom.current?.scrollIntoView();
  }
  console.log('newsArray,', newsArray);

  function goUp() {
    upTop.current?.scrollIntoView();
  }
  const newsList = newsArray.map(function (each, index) {
    return (
      <li
        className='bg-white relative h-64 w-100/3  box-border items-center justify-center '
        key={index}
        data-testid='list-cards'
      >
        <Link
          className='relative block max-w-full'
          to={`/haberler/${details?.[index]?.id}`}
          state={{ category: 'turkiye', news: details?.[index] }}
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
        </Link>
        <div
          className='block items-center justify-center p-4 text-16-19 font-bold line-clamp-2 '
          data-testid='card-title'
        >
          {each?.['title'] ? each['title'] : ''}
        </div>
      </li>
    );
  });
  return (
    <div className='turkey'>
      <div className='font-roboto common-container bg-bg' ref={upTop}>
        <div className='category-container mx-3 '>
          <svg
            width='22'
            height='15'
            viewBox='0 0 22 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            onClick={() => goDown()}
            className='absolute right-0 justify-end items-end cursor-pointer'
            type='button'
          >
            <path
              d='M9.57225 13.5455L0.47309 3.14643C-0.60024 1.91976 0.270888 0 1.90084 0H20.0992C21.7291 0 22.6002 1.91976 21.5269 3.14642L12.4277 13.5455C11.6719 14.4093 10.3281 14.4093 9.57225 13.5455Z'
              fill='#022032'
            />
          </svg>
          <CarouselSlider data={newsArray} details={details} />
          <div className=' mb-5 relative mx-auto max-w-[1000px]  w-full'>
            <ul className='relative box-border gap-4 clear-both flex flex-wrap items-center justify-between'>
              {newsList}
            </ul>
          </div>
        </div>
      </div>
      <div className='font-roboto relative infinite max-w-[1000px] mx-auto w-full bg-bg justify-center items-center flex'>
        <div className='block pt-12 pb-7 w-full '>
          <div
            className='bg-white infinite-link w-[1000px] py-4 border-solid border-2 justify-center items-center flex text-16-19 font-medium cursor-pointer'
            onClick={() =>
              setLoadMore((totalListNumber) => totalListNumber + 9)
            }
            data-testid='load-more'
          >
            DAHA FAZLA GÖSTER
          </div>
        </div>
      </div>

      <footer ref={downBottom}>
        <svg
          width='22'
          height='15'
          viewBox='0 0 22 15'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          onClick={() => goUp()}
          className='right-0 justify-end items-end cursor-pointer z-9999 '
          type='button'
        >
          <path
            d='M12.4277 0.647861L21.5269 11.0469C22.6002 12.2736 21.7291 14.1933 20.0992 14.1933L1.90084 14.1933C0.270889 14.1933 -0.600241 12.2736 0.473089 11.0469L9.57225 0.647863C10.3281 -0.21596 11.6719 -0.215961 12.4277 0.647861Z'
            fill='#022032'
          />
        </svg>
      </footer>
    </div>
  );
};

export default Turkey;
