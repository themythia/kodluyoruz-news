import React, { useEffect, useState } from 'react';
import { parseFeed } from 'htmlparser2';
import formatRSSFeed from '../../../utils/api/formatRSSFeed';
import { Link } from 'react-router-dom';

const Technology = () => {
  const style1 =
    'hover:ease-in duration-300 bg-blue-900 text-white border-2 mr-2 text-base font-black px-4 py-2 rounded-full';
  const style2 =
    'hover:ease-in duration-300 border-2 mr-2 text-base font-black px-4 py-2 rounded-full';
  const style3 =
    'hover:ease-in duration-300 border-2 mr-2 text-base font-black px-3 py-2 rounded-full';
  const style4 =
    'hover:ease-in duration-300 border-2 mr-2 text-base font-black px-4 py-2 rounded-full bg-blue-900 text-white';
  const style5 =
    'hover:ease-in duration-300 border-2 mr-2 text-base font-black px-3 py-2 rounded-full bg-blue-900 text-white';

  const [text, setText] = useState('');
  const [txt, setTxt] = useState({
    textContent: '',
    imageContent: '',
    linkContent: '',
  });
  const [count, setCount] = useState(0);
  const [numberClass, setNumberClass] = useState(
    (
      Array(1).fill(style1) +
      ',' +
      Array(8).fill(style2) +
      ',' +
      Array(1).fill(style3)
    ).split(',')
  );
  const [moreNumbers, setMoreNumbers] = useState(12);
  const [btn, setBtn] = useState('text-gray');
  const [showMore, setShowMore] = useState(
    'col-span-3 bg-white h-12 flex justify-center'
  );
  const [slider, setSlider] = useState(
    Array.from(Array(3).keys(), (x) => x + 22)
  );

  // to handle news detail
  const [news, setNews] = useState([]);

  const order1 = [10, 11, 12];
  const order2 = [13, 14, 15, 16, 17, 18];
  const order3 = Array.from(Array(moreNumbers).keys(), (x) => x + 19);
  console.log('order3', order3);

  useEffect(() => {
    fetch(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/teknoloji.rss'
    )
      .then((res) => res.text())
      .then((data) => setText(data));
  }, []);

  useEffect(() => {
    if (text.length > 0) {
      const feed = parseFeed(text);
      setNews(formatRSSFeed(feed));
      console.log('feed:', feed);
      let textContents = [
        { textContent: [], imageContent: [], linkContent: [] },
      ];
      if (feed) {
        for (let i = 0; i < 100; i++) {
          if (
            i === 13 ||
            i === 14 ||
            i === 15 ||
            i === 16 ||
            i === 17 ||
            i === 18 ||
            i === 19
          ) {
            if (
              feed.items[i].description.split('alt="')[1].split('" /><p>')[0]
                .length > 40
            ) {
              textContents[0].textContent.push(
                feed.items[i].description
                  .split('alt="')[1]
                  .split('" /><p>')[0]
                  .slice(0, 40) + '...'
              );
            }
          } else {
            textContents[0].linkContent.push(feed.items[i].link);
            textContents[0].textContent.push(
              feed.items[i].description.split('alt="')[1].split('" /><p>')[0]
            );
            textContents[0].imageContent.push(
              feed.items[i].description
                .split('<img src="')[1]
                .split('?width')[0]
            );
          }
        }
        setTxt(textContents);
      }
      console.log(textContents[0].textContent);
    }
  }, [text]);

  console.log('news', news);

  function numbers(i) {
    let squares = (Array(9).fill(style2) + ',' + Array(1).fill(style3)).split(
      ','
    );
    if (i !== 10) {
      squares[i - 1] = style4;
    } else if (i === 10) {
      squares[i - 1] = style5;
    }
    setNumberClass(squares);
    setCount(i - 1);
  }

  function more() {
    if (moreNumbers <= 60) {
      setMoreNumbers(moreNumbers + 12);
    }

    if (moreNumbers > 57) {
      setBtn('text-gray-200');
      setShowMore('col-span-3 bg-text-gray-200 h-12 flex justify-center');
    }
  }

  return (
    <div>
      <div className='flex bg-black h-14 items-center text-2xl flex lg:pl-64 sm:pl-32'>
        <a href='https://ntv.com.tr' className=''>
          <img
            className='mr-36'
            src='https://cdn.ntv.com.tr/img/logo.svg?v=6429z'
            alt='ntv.com.tr'
          ></img>
        </a>
      </div>
      <div>
        {txt[0] ? (
          <>
            {
              <div>
                <p className='bg-blue-900 w-full text-white h-12 font-bold items-center text-2xl flex lg:pl-64 sm:pl-32'>
                  Teknoloji Haberleri
                </p>
              </div>
            }
          </>
        ) : null}
      </div>

      <div className='grid grid-cols-3 grid-rows-7 gap-1 px-2 lg:w-2/3 mx-auto h-auto md:w-full sm:w-full mt-4'>
        <div className='col-span-3 row-span-4 w-full h-full  lg:col-span-3 row-span-4 w-full h-full md:col-span-3 row-span-4 w-full h-full sm:col-span-3 row-span-4 w-full h-full'>
          {txt[0] ? (
            <div className='w-full h-full relative bg-white flex flex-col justify-center'>
              <Link
                key={count}
                to={`/haberler/${news.items[count].id}`}
                state={{
                  category: 'teknoloji',
                  news: news.items[count],
                }}
              >
                {/* <a href={`${txt[0].linkContent[count]}`}> */}
                <img
                  src={txt[0].imageContent[count]}
                  className='w-full h-full bg-cover bg-center'
                  alt='sportimage'
                />
                {/* </a> */}
              </Link>
              <div className='justify-center flex'>
                <p className='lg:text-3xl flex absolute w-auto bottom-32 text-center text-white font-bold font-sans p-2 bg-blue-900 box-border md:text-xl sm:text-sm'>
                  {txt[0].textContent[count]}
                </p>
              </div>

              <ul className='absolute bottom-0 flex justify-center flex-nowrap w-full cursor-pointer bg-white p-5'>
                <li onMouseEnter={() => numbers(1)} className={numberClass[0]}>
                  1
                </li>
                <li onMouseEnter={() => numbers(2)} className={numberClass[1]}>
                  2
                </li>
                <li onMouseEnter={() => numbers(3)} className={numberClass[2]}>
                  3
                </li>
                <li onMouseEnter={() => numbers(4)} className={numberClass[3]}>
                  4
                </li>
                <li onMouseEnter={() => numbers(5)} className={numberClass[4]}>
                  5
                </li>
                <li onMouseEnter={() => numbers(6)} className={numberClass[5]}>
                  6
                </li>
                <li onMouseEnter={() => numbers(7)} className={numberClass[6]}>
                  7
                </li>
                <li onMouseEnter={() => numbers(8)} className={numberClass[7]}>
                  8
                </li>
                <li onMouseEnter={() => numbers(9)} className={numberClass[8]}>
                  9
                </li>
                <li onMouseEnter={() => numbers(10)} className={numberClass[9]}>
                  10
                </li>
              </ul>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>

        <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4'>
          {txt[0] ? (
            <>
              {order1.map((item) => (
                <div className='flex flex-col justify-center items-center col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto'>
                  <Link
                    to={`/haberler/${news.items[item].id}`}
                    state={{
                      category: 'teknoloji',
                      news: news.items[item],
                    }}
                    className='row-span-2 w-full h-full bg-contain'
                  >
                    {/* <a
                      href={`${txt[0].linkContent[item]}`}
                      className='row-span-2 w-full h-full bg-contain'
                    > */}
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='row-span-2 w-full h-full bg-contain'
                    ></img>
                    {/* </a> */}
                  </Link>
                  <p className='row-span-1 my-auto px-2 text-black font-bold text-center'>
                    {txt[0].textContent[item]}
                  </p>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className='col-span-3 row-span-1 h-3/4 mt-4 grid grid-cols-6 gap-4'>
          {txt[0] ? (
            <div className='col-span-6 row-span-1 h-3/4 mt-2 grid grid-cols-6 gap-4 bg-black p-4'>
              {order2.map((item) => (
                <div className='bg-sky-900 overflow-hidden bg-black hover:bg-slate-800 col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-4 sm:col-span-3 mx-auto'>
                  <a
                    href={`${txt[0].linkContent[item]}`}
                    className='row-span-2 w-full h-full bg-contain'
                  >
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='row-span-2 w-full h-full bg-contain'
                    ></img>
                  </a>
                  <p className='row-span-2 text-xs mt-2 px-2 text-white text-left'>
                    {txt[0].textContent[item]}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div className='col-span-3 row-span-auto grid grid-cols-3 gap-4'>
          {txt[0] ? (
            <>
              {order3.map((item) => (
                <div className='flex flex-col justify-center items-center col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto'>
                  <Link
                    to={`/haberler/${news.items[item + 2].id}`}
                    state={{
                      category: 'teknoloji',
                      news: news.items[item + 2],
                    }}
                    className='row-span-2 w-full h-full bg-contain'
                  >
                    {/* <a
                      href={`${txt[0].linkContent[item]}`}
                      className='row-span-2 w-full h-full bg-contain'
                    > */}
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='row-span-2 w-full h-full bg-contain'
                    ></img>
                    {/* </a> */}
                  </Link>
                  <p className='row-span-1 my-auto px-2 text-black font-bold text-center'>
                    {txt[0].textContent[item]}
                  </p>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className='col-span-3 mt-4'>
          {txt[0] ? (
            <>
              {
                <div className={showMore}>
                  <button onClick={() => more()} className={btn}>
                    DAHA FAZLA GÖSTER
                  </button>
                </div>
              }
            </>
          ) : null}
        </div>
      </div>
      <div className=''>
        {txt[0] ? (
          <>
            {
              <div className='flex bg-black h-14 items-center mt-4 text-2xl flex lg:pl-64 sm:pl-32'>
                <a href='https://ntv.com.tr' className=''>
                  <img
                    className='mr-12'
                    src='https://cdn.ntv.com.tr/img/logo.svg?v=6429z'
                    alt='ntv.com.tr'
                  ></img>
                </a>
                <a className='text-white text-sm'>
                  &#169; Copyright 2022 | Tüm Hakları Saklıdır.
                </a>
              </div>
            }
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Technology;
