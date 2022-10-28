import React, { useEffect, useState } from 'react';
import { parseFeed } from 'htmlparser2';
import { Link } from 'react-router-dom';
import formatRSSFeed from '../../../utils/api/formatRSSFeed';
import { CORS_PROXY } from '../../..';

function Sport() {
  const style1 =
    'bg-blue-900 text-white border-2 mr-1 text-base font-black px-4 py-2 rounded-full';
  const style2 = 'border-2 mr-1 text-base font-black px-4 py-2 rounded-full';
  const style3 = 'border-2 mr-1 text-base font-black px-3 py-2 rounded-full';
  const style4 =
    'border-2 mr-1 text-base font-black px-4 py-2 rounded-full bg-blue-900 text-white';
  const style5 =
    'border-2 mr-1 text-base font-black px-3 py-2 rounded-full bg-blue-900 text-white';

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

  useEffect(() => {
    fetch(CORS_PROXY + 'https://www.ntv.com.tr/sporskor.rss')
      .then((res) => res.text())
      .then((data) => setText(data));
  }, []);

  useEffect(() => {
    if (text.length > 0) {
      const feed = parseFeed(text);
      setNews(formatRSSFeed(feed));
      let textContents = [
        {
          textContent: [],
          imageContent: [],
          linkContent: [],
        },
      ];
      if (feed) {
        for (let i = 0; i < 100; i++) {
          textContents[0].textContent.push(feed.items[i].title);
          textContents[0].imageContent.push(
            feed.items[i].description.split('<img src="')[1].split('?width')[0]
          );
          textContents[0].linkContent.push(feed.items[i].link);
        }
        setTxt(textContents);
      }
    }
  }, [text]);

  const order1 = Array.from(Array(moreNumbers).keys(), (x) => x + 31);
  const order2 = Array.from(Array(3).keys(), (x) => x + 10);
  const order3 = Array.from(Array(1).keys(), (x) => x + 13);
  const order5 = Array.from(Array(2).keys(), (x) => x + 15);
  const order6 = Array.from(Array(2).keys(), (x) => x + 17);
  const order7 = Array.from(Array(2).keys(), (x) => x + 19);
  const order8 = Array.from(Array(1).keys(), (x) => x + 21);

  const order9 = slider;

  function more() {
    if (moreNumbers <= 60) {
      setMoreNumbers(moreNumbers + 12);
    }

    if (moreNumbers > 57) {
      setBtn('text-gray-200');
      setShowMore('col-span-3 bg-text-gray-200 h-12 flex justify-center');
    }
  }
  const handleClickNext = () => {
    let squares = (Array(9).fill(style2) + ',' + Array(1).fill(style3)).split(
      ','
    );
    if (count < 9) {
      setCount(count + 1);
      if (count !== 8) {
        squares[count + 1] = style4;
      } else if (count === 8) {
        squares[count + 1] = style5;
      }
      setNumberClass(squares);
    } else {
      setCount(0);
      squares[0] = style4;
      setNumberClass(squares);
    }
  };

  const handleClickNext2 = () => {
    let squs = [0, 0, 0];
    if (slider[0] < 28) {
      squs[0] = slider[0] + 1;
      squs[1] = slider[1] + 1;
      squs[2] = slider[2] + 1;
      setSlider(squs);
    } else if (slider[0] === 28) {
      squs[0] = slider[0] + 1;
      squs[1] = slider[1] + 1;
      squs[2] = 22;
      setSlider(squs);
    } else if (slider[0] === 29) {
      squs[0] = slider[0] + 1;
      squs[1] = 22;
      squs[2] = 23;
      setSlider(squs);
    } else if (slider[0] === 30) {
      squs[0] = 22;
      squs[1] = 23;
      squs[2] = 24;
      setSlider(squs);
    }
  };

  const handleClickPrev2 = () => {
    let squs = [0, 0, 0];
    if (slider[2] > 24) {
      squs[0] = slider[0] - 1;
      squs[1] = slider[1] - 1;
      squs[2] = slider[2] - 1;
      setSlider(squs);
    } else if (slider[2] === 24) {
      squs[0] = 30;
      squs[1] = slider[1] - 1;
      squs[2] = slider[2] - 1;
      setSlider(squs);
    } else if (slider[2] === 23) {
      squs[0] = 29;
      squs[1] = 30;
      squs[2] = slider[2] - 1;
      setSlider(squs);
    } else if (slider[2] === 22) {
      squs[0] = 28;
      squs[1] = 29;
      squs[2] = 30;
      setSlider(squs);
    }
  };

  const handleClickPrev = () => {
    let squares = (Array(9).fill(style2) + ',' + Array(1).fill(style3)).split(
      ','
    );

    if (count > 0) {
      setCount(count - 1);
      squares[count - 1] = style4;
      setNumberClass(squares);
    } else {
      setCount(9);
      squares[9] = style5;
      setNumberClass(squares);
    }
  };
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

  return (
    <div>
      <div className='flex items-center justify-around bg-sky-900 h-14'>
        <a href='/' className=''>
          <img
            className='mr-36'
            src='https://cdn.ntv.com.tr/img/SporSkorLogo.svg?v=6389'
            alt='ntv.com.tr'
          ></img>
        </a>
        <a href='https://ntv.com.tr'>
          <span className='text-sm font-semibold text-white'>
            NTV.COM.TR'ye geri dön &#8594;
          </span>
        </a>
      </div>
      <div className='grid h-auto grid-cols-3 gap-1 px-2 mx-auto mt-4 grid-rows-7 lg:w-2/3 md:w-full sm:w-full'>
        <div className='col-span-3 row-span-2 row-span-4 lg:col-span-2 md:col-span-2 sm:col-span-3'>
          {txt[0] ? (
            <div className='relative flex justify-center object-contain w-full h-full mx-auto bg-white'>
              <Link
                to={`/haberler/${news.items[count].id}`}
                state={{
                  category: 'spor',
                  news: news.items[count],
                }}
              >
                <img
                  src={txt[0].imageContent[count]}
                  className='w-full h-full bg-center bg-cover bg-origin-padding bg-origin-border'
                  alt='sportimage'
                />
              </Link>
              <p
                className='box-border absolute w-full p-2 font-sans text-3xl font-bold text-center text-white h-28 bottom-20'
                style={{
                  background:
                    'linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)',
                }}
              >
                {txt[0].textContent[count]}
              </p>
              <button
                type='button'
                className='absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              >
                <span
                  onClick={() => handleClickPrev()}
                  className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'
                >
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6 text-white dark:text-gray-800'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 19l-7-7 7-7'
                    ></path>
                  </svg>
                </span>
              </button>
              <button
                type='button'
                className='absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none'
              >
                <span
                  onClick={() => handleClickNext()}
                  className='inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'
                >
                  <svg
                    aria-hidden='true'
                    className='w-6 h-6 text-white dark:text-gray-800'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 5l7 7-7 7'
                    ></path>
                  </svg>
                </span>
              </button>
              <ul className='absolute bottom-0 flex justify-center w-full p-5 bg-white cursor-pointer flex-nowrap'>
                <li onClick={() => numbers(1)} className={numberClass[0]}>
                  1
                </li>
                <li onClick={() => numbers(2)} className={numberClass[1]}>
                  2
                </li>
                <li onClick={() => numbers(3)} className={numberClass[2]}>
                  3
                </li>
                <li onClick={() => numbers(4)} className={numberClass[3]}>
                  4
                </li>
                <li onClick={() => numbers(5)} className={numberClass[4]}>
                  5
                </li>
                <li onClick={() => numbers(6)} className={numberClass[5]}>
                  6
                </li>
                <li onClick={() => numbers(7)} className={numberClass[6]}>
                  7
                </li>
                <li onClick={() => numbers(8)} className={numberClass[7]}>
                  8
                </li>
                <li onClick={() => numbers(9)} className={numberClass[8]}>
                  9
                </li>
                <li onClick={() => numbers(10)} className={numberClass[9]}>
                  10
                </li>
              </ul>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        <div className='grid col-span-3 grid-rows-3 row-span-1 mb-2 ml-2 gap-y-2 md:col-span-1 sm:col-span-2'>
          {txt[0] ? (
            <>
              {order2.map((item, index) => (
                <Link
                  key={index}
                  to={`/haberler/${news.items[item].id}`}
                  state={{
                    category: 'spor',
                    news: news.items[item],
                  }}
                >
                  <div className='grid w-full h-full grid-cols-2 row-span-3 bg-white'>
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='w-full h-full col-span-1 my-auto bg-contain'
                    ></img>
                    <p className='col-span-1 px-2 my-auto text-xs font-bold text-left text-blue-900'>
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          ) : null}
        </div>
        <div className='col-span-3 row-span-1 ml-2 md:col-span-1 sm:col-span-1'>
          {txt[0] ? (
            <>
              {order3.map((item, index) => (
                <Link
                  key={index}
                  to={`/haberler/${news.items[item].id}`}
                  state={{
                    category: 'spor',
                    news: news.items[item],
                  }}
                >
                  <div className='grid w-full h-full grid-rows-3 row-span-1 bg-white'>
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='w-full h-full row-span-2 bg-contain'
                    ></img>
                    <p className='row-span-1 px-2 my-auto font-bold text-left text-blue-900'>
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          ) : null}
        </div>
        <div className='grid grid-cols-2 col-span-3 gap-4 mt-2'>
          {txt[0] ? (
            <>
              {order5.map((item, index) => (
                <Link
                  key={index}
                  to={`/haberler/${news.items[item].id}`}
                  state={{
                    category: 'spor',
                    news: news.items[item],
                  }}
                >
                  <div
                    className='relative flex justify-center object-contain w-full h-full mx-auto bg-white'
                    key={index}
                  >
                    <img
                      src={txt[0].imageContent[item]}
                      className='w-full h-full bg-center bg-cover bg-origin-padding bg-origin-border'
                      alt='sportimage'
                    />
                    <p
                      className='box-border absolute bottom-0 w-full h-24 p-2 font-sans text-xl font-bold text-center text-white'
                      style={{
                        background:
                          'linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)',
                      }}
                    >
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          ) : null}
        </div>
        <div className='grid grid-cols-3 col-span-3 gap-4 mt-2 row-span-auto'>
          {txt[0] ? (
            <>
              {order6.map((item, index) => (
                <div
                  className='flex grid flex-col items-center justify-center w-full h-full col-span-3 grid-rows-3 row-span-1 mx-auto bg-white md:col-span-1 sm:col-span-3'
                  key={index}
                >
                  <Link
                    key={index}
                    to={`/haberler/${news.items[item].id}`}
                    state={{
                      category: 'spor',
                      news: news.items[item],
                    }}
                    className='w-full h-full row-span-2 bg-contain'
                  >
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='w-full h-full row-span-2 bg-contain'
                    ></img>
                  </Link>
                  <p className='row-span-1 px-2 my-auto font-bold text-center text-blue-900'>
                    {txt[0].textContent[item]}
                  </p>
                </div>
              ))}
            </>
          ) : null}
        </div>
        <div className='grid grid-cols-3 col-span-3 gap-4 mt-2 row-span-auto'>
          {txt[0] ? (
            <>
              {order7.map((item, index) => (
                <Link
                  key={index}
                  to={`/haberler/${news.items[item].id}`}
                  state={{
                    category: 'spor',
                    news: news.items[item],
                  }}
                >
                  <div
                    className='flex grid flex-col items-center justify-center w-full h-full col-span-3 grid-rows-3 row-span-1 mx-auto bg-white md:col-span-1 sm:col-span-3'
                    key={index}
                  >
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='w-full h-full row-span-2 bg-contain'
                    ></img>
                    <p className='row-span-1 px-2 my-auto font-bold text-center text-blue-900'>
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          ) : null}
        </div>
        <div className='grid col-span-3 mt-2'>
          {txt[0] ? (
            <>
              {order8.map((item, index) => (
                <div
                  className='relative w-full h-full mx-auto bg-white'
                  key={index}
                >
                  <p className='justify-start mt-2 mb-2 ml-4 text-3xl font-bold'>
                    FOTO
                  </p>
                  <Link
                    key={index}
                    to={`/haberler/${news.items[item].id}`}
                    state={{
                      category: 'spor',
                      news: news.items[item],
                    }}
                  >
                    <img
                      src={txt[0].imageContent[item]}
                      className='box-border w-full h-max'
                      alt='sportimage'
                    />
                    <p
                      className='box-border absolute bottom-0 w-full p-2 font-sans text-4xl font-bold text-center text-white h-28'
                      style={{
                        background:
                          'linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)',
                      }}
                    >
                      {txt[0].textContent[item]}
                    </p>
                  </Link>
                </div>
              ))}
            </>
          ) : null}
        </div>
        <div className='relative grid w-full h-auto grid-cols-3 col-span-3 grid-rows-1 row-span-1'>
          {txt[0] ? (
            <>
              {
                <>
                  <button
                    type='button'
                    className='absolute mt-10 cursor-default'
                  >
                    <span
                      onClick={() => handleClickPrev2()}
                      className='inline-flex w-8 h-10 bg-sky-800'
                    >
                      <svg
                        className='text-white'
                        fill='white'
                        version='1.1'
                        id='Capa_1'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 451.847 451.847'
                      >
                        <path
                          d='M97.141,225.92c0-8.095,3.091-16.192,9.259-22.366L300.689,9.27c12.359-12.359,32.397-12.359,44.751,0
                                    c12.354,12.354,12.354,32.388,0,44.748L173.525,225.92l171.903,171.909c12.354,12.354,12.354,32.391,0,44.744
                                    c-12.354,12.365-32.386,12.365-44.745,0l-194.29-194.281C100.226,242.115,97.141,234.018,97.141,225.92z'
                        />
                      </svg>
                    </span>
                  </button>
                  <button
                    type='button'
                    className='absolute right-0 mt-10 cursor-default'
                  >
                    <span
                      onClick={() => handleClickNext2()}
                      className='inline-flex w-8 h-10 bg-sky-800'
                    >
                      <svg
                        className='text-white'
                        fill='white'
                        version='1.1'
                        id='Capa_2'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 451.846 451.846'
                      >
                        <path
                          d='M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744
                                    L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284
                                    c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z'
                        />
                      </svg>
                    </span>
                  </button>
                </>
              }
            </>
          ) : null}
          {txt[0] ? (
            <>
              {order9.map((item, index) => (
                <Link
                  key={index}
                  to={`/haberler/${news.items[item].id}`}
                  state={{
                    category: 'spor',
                    news: news.items[item],
                  }}
                >
                  <div
                    className='grid w-full h-full grid-cols-2 row-span-3 p-3 bg-white'
                    key={index}
                  >
                    {/* <a href={`${txt[0].linkContent[item]}`}> */}
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='w-full h-full row-span-1 bg-gray-200 bg-contain'
                    ></img>
                    {/* </a> */}
                    <p className='w-full h-full px-2 text-xs font-bold text-left text-black duration-300 bg-gray-200 hover:ease-in hover:bg-sky-800 hover:text-white'>
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </Link>
              ))}
            </>
          ) : null}
        </div>
        <div className='grid grid-cols-3 col-span-3 gap-4 mt-2 row-span-auto'>
          {txt[0] ? (
            <>
              {order1.map((item, index) => (
                <div
                  className='flex grid flex-col items-center justify-center w-full h-full col-span-3 grid-rows-3 row-span-1 mx-auto bg-white md:col-span-1 sm:col-span-3'
                  key={index}
                >
                  <Link
                    key={index}
                    to={`/haberler/${news.items[item].id}`}
                    state={{
                      category: 'spor',
                      news: news.items[item],
                    }}
                    className='w-full h-full row-span-2 bg-contain'
                  >
                    {/* <a
                      href={`${txt[0].linkContent[item]}`}
                      className='w-full h-full row-span-2 bg-contain'
                    > */}
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='w-full h-full row-span-2 bg-contain'
                    ></img>
                    {/* </a> */}
                  </Link>
                  <p className='row-span-1 px-2 my-auto font-bold text-center text-blue-900'>
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
              <div className='flex items-center justify-around mt-10 bg-sky-900 h-14'>
                <a href='/' className=''>
                  <img
                    className='mr-12'
                    src='https://www.ntv.com.tr/img/SporSkorLogo--footer.svg'
                    alt='ntv.com.tr'
                  ></img>
                </a>
                <a href='https://ntv.com.tr'>
                  <span className='text-sm font-semibold text-white'>
                    &#169; Copyrigth 2022 | Tüm Hakları Saklıdır.
                  </span>
                </a>
              </div>
            }
          </>
        ) : null}
      </div>
    </div>
  );
}

export default Sport;
