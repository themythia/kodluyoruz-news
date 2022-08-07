import React, { useEffect, useState } from 'react';
// import { getPosts } from './getposts';
import './Life.css'
// import '../../index.css';
// import Carousel from './Carousel';
// import ChangeImages from './ChangeImages';

function Test  () {
  const [feed, setFeed] = useState({});
  const [seeMore, setSeeMore] = useState(18);

  useEffect(() => {
    getPosts().then((test) => setFeed(test));
  }, []);

  let newsArray = [];
  for (let i = 0; i < seeMore; i++) {
    newsArray.push(feed[i]);
  }
  

  const newList = newsArray.map(function (each, key) {
    return (
      <li
        className='bg-white relative h-64 w-100/3  box-border items-center justify-center'
        key={key}
      >
        <a
          href={
            each?.['description']
              ? each['description'].substring(
                  10,
                  each['description'].indexOf(' ', 10) - 1
                )
              : ' '
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
            alt='Html tutorial'
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
    {/* <ChangeImages /> */}
      {/* <Carousel /> */}
        <div className='category-container mx-3 bg-bg' >
          <div className=' relative mx-auto max-w-screen-lg  w-full'>
            <ul className='relative box-border gap-4 clear-both flex flex-wrap items-center justify-between'>
              {newList}
            </ul>
          </div>
        </div>
      <div className='font-roboto bg-white relative infinite max-w-screen-lg mx-auto w-full  justify-center items-center flex'>
        <div className='block pt-12 pb-7 w-full mx-3'>
          <div
            className=' infinite-link w-full py-4 border-solid border-2 justify-center items-center flex text-16-19 cursor-pointer'
            onClick={() => setSeeMore((totalListNumber) => totalListNumber + 9)}
          >
            DAHA FAZLA GÖSTER
          </div>
        </div>
      </div>
    </>
  );
};

export default Test;