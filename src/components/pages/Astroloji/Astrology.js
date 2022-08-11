import React, { useEffect, useState } from 'react';
import { parseFeed } from 'htmlparser2';
import formatRSSFeed from '../../../utils/api/formatRSSFeed';
import { Link } from 'react-router-dom';

const Astrology = () => {
  const style1 =
    'bg-red-500 text-white border-2 mr-3 text-base px-1 py-1 rounded-full';
  const style2 =
    'border-2 mr-3 bg-black text-base font-black px-1 py-1 rounded-full';
  const style3 =
    'border-2 mr-3 bg-black text-base font-black px-1 py-1 rounded-full';
  const style4 =
    'border-2 mr-3 text-base font-black px-1 py-1 rounded-full bg-red-500 text-white';
  const style5 =
    'border-2 mr-3 text-base font-black px-1 py-1 rounded-full bg-red-500 text-white';

  const [text, setText] = useState('');
  const [txt, setTxt] = useState({
    textContent: '',
    imageContent: '',
    linkContent: '',
    headContent: '',
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

  const order1 = [10, 11, 12];
  const order2 = [13, 14];
  const order3 = [15, 16, 17];
  const order4 = [18, 19, 20, 21, 22, 23];
  const order5 = [24, 25, 26];
  const order6 = [27];
  const order7 = Array.from(Array(moreNumbers).keys(), (x) => x + 28);

  const [news, setNews] = useState([]);
  console.log('news', news);

  function more() {
    if (moreNumbers <= 60) {
      setMoreNumbers(moreNumbers + 12);
    }
  }

  useEffect(() => {
    fetch(
      'https://pacific-caverns-96128.herokuapp.com/http://www.ntv.com.tr/n-life.rss'
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
        { textContent: [], imageContent: [], linkContent: [], headContent: [] },
      ];
      if (feed) {
        for (let i = 0; i < 100; i++) {
          textContents[0].linkContent.push(feed.items[i].link);
          textContents[0].textContent.push(
            feed.items[i].description.split('alt="')[1].split('" /><p>')[0]
          );
          textContents[0].imageContent.push(
            feed.items[i].description.split('<img src="')[1].split('?width')[0]
          );
          let head = feed.items[i].id.split('n-life/')[1];
          let head2 = feed.items[i].id.split('galeri/')[1];
          let head3 = feed.items[i].id.split('ntv.com.tr/')[1];
          if (head) {
            if (
              head.split('/')[0].toUpperCase().split('-').join(' ').length > 20
            ) {
              textContents[0].headContent.push('N LIFE');
            } else {
              if (
                head.split('/')[0].toUpperCase().split('-').join(' ') ===
                'KULTUR VE SANAT'
              ) {
                textContents[0].headContent.push('KÜLTÜR VE SANAT');
              } else if (
                head.split('/')[0].toUpperCase().split('-').join(' ') ===
                'MAGAZIN'
              ) {
                textContents[0].headContent.push('MAGAZİN');
              } else if (
                head.split('/')[0].toUpperCase().split('-').join(' ') === 'GEZI'
              ) {
                textContents[0].headContent.push('GEZİ');
              } else if (
                head.split('/')[0].toUpperCase().split('-').join(' ') ===
                'MODA VE GUZELLIK'
              ) {
                textContents[0].headContent.push('MODA VE GÜZELLİK');
              } else if (
                head.split('/')[0].toUpperCase().split('-').join(' ') ===
                'SAGLIKLI YASAM'
              ) {
                textContents[0].headContent.push('SAĞLIKLI YAŞAM');
              } else if (
                head.split('/')[0].toUpperCase().split('-').join(' ') ===
                'YASAM'
              ) {
                textContents[0].headContent.push('YAŞAM');
              } else {
                textContents[0].headContent.push(
                  head.split('/')[0].toUpperCase().split('-').join(' ')
                );
              }
            }
          } else if (head2) {
            if (
              head2.split('/')[0].toUpperCase().split('-').join(' ') === 'DUNYA'
            ) {
              textContents[0].headContent.push('DÜNYA');
            } else if (
              head2.split('/')[0].toUpperCase().split('-').join(' ') === 'YASAM'
            ) {
              textContents[0].headContent.push('YAŞAM');
            } else {
              textContents[0].headContent.push(
                head2.split('/')[0].toUpperCase().split('-').join(' ')
              );
            }
          } else if (head3) {
            textContents[0].headContent.push(
              head3.split('/')[0].toUpperCase().split('-').join(' ')
            );
          } else {
            textContents[0].headContent.push('YAŞAM');
          }
        }
        setTxt(textContents);
      }
      console.log(textContents[0].headContent);
    }
  }, [text]);

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

  return (
    <div className='w-full mx-auto'>
      <div className='flex bg-red-600 justify-around h-16 w-full items-center'>
        <a href='/' className=''>
          <img
            className='mr-36 w-32'
            src='https://cdn.ntv.com.tr/img/KadinLeftLogo.svg?v=6429z'
            alt='ntv.com.tr'
          ></img>
        </a>
        <a href='https://ntv.com.tr'>
          <span className='text-white text-sm font-semibold'>
            NTV.COM.TR'ye geri dön &#8594;
          </span>
        </a>
      </div>
      <div className='flex border-2 justify-center flex-wrap h-18 items-center '>
        <a
          href='https://www.ntv.com.tr/n-life/moda-ve-guzellik'
          className='m-5 font-bold'
        >
          MODA&GÜZELLİK
        </a>
        <a
          href='https://www.ntv.com.tr/n-life/anne-ve-cocuk'
          className='m-5 font-bold'
        >
          ANNE&ÇOCUK
        </a>
        <a
          href='https://www.ntv.com.tr/n-life/saglikli-yasam'
          className='m-5 font-bold'
        >
          SAĞLIKLI YAŞAM
        </a>
        <a
          href='https://www.ntv.com.tr/n-life/kultur-ve-sanat'
          className='m-5 font-bold'
        >
          KÜLTÜR&SANAT
        </a>
        <a
          href='https://www.ntv.com.tr/n-life/magazin'
          className='m-5 font-bold'
        >
          MAGAZİN
        </a>
        <a
          href='https://www.ntv.com.tr/n-life/lifestyle'
          className='m-5 font-bold'
        >
          LİFE STYLE
        </a>
        <a
          href='https://www.ntv.com.tr/n-life/ask-ve-iliski'
          className='m-5 font-bold'
        >
          AŞK&İLİŞKİ
        </a>
        <a
          href='https://www.ntv.com.tr/n-life/n-lezzetler'
          className='m-5 font-bold'
        >
          N-LEZZETLER
        </a>
        <a href='https://www.ntv.com.tr/n-life/gezi' className='m-5 font-bold'>
          GEZİ
        </a>
      </div>
      <div className='grid grid-cols-3 grid-rows-7 gap-1 px-2 mx-auto lg:w-3/4 mx-auto h-auto md:w-full sm:w-full mt-4'>
        <div className='col-span-3 row-span-4 w-full h-full mx-auto lg:col-span-3 row-span-4 w-full h-full md:col-span-3 row-span-4 w-full h-full  sm:col-span-3 row-span-6 w-full h-full '>
          {txt[0] ? (
            <div className='w-full h-full bg-white flex flex-col justify-center relative'>
              <Link
                to={`/news/${news.items[count].id}`}
                state={{
                  category: 'magazin',
                  news: news.items[count],
                }}
              >
                {/* <a href={`${txt[0].linkContent[count]}`}> */}
                <img
                  src={txt[0].imageContent[count]}
                  className='bg-cover bg-center w-full h-full'
                  alt='sportimage'
                />
                {/* </a> */}
              </Link>
              <p className='w-full absolute text-center bg-white font-bold font-sans p-2 box-border text-black lg:text-2xl bottom-45 md:text-lg bottom-25 sm:text-sm bottom-10'>
                {txt[0].textContent[count]}
              </p>
              <button
                type='button'
                className='flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
              >
                <span
                  onClick={() => handleClickPrev()}
                  className='inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'
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
                className='flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none'
              >
                <span
                  onClick={() => handleClickNext()}
                  className='inline-flex justify-center items-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none'
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
              <ul className='bottom-0 absolute flex justify-center flex-nowrap w-full cursor-pointer p-4 bg-white lg:p-5 md:p-4 sm:p-4 '>
                <li onClick={() => numbers(1)} className={numberClass[0]}></li>
                <li onClick={() => numbers(2)} className={numberClass[1]}></li>
                <li onClick={() => numbers(3)} className={numberClass[2]}></li>
                <li onClick={() => numbers(4)} className={numberClass[3]}></li>
                <li onClick={() => numbers(5)} className={numberClass[4]}></li>
                <li onClick={() => numbers(6)} className={numberClass[5]}></li>
                <li onClick={() => numbers(7)} className={numberClass[6]}></li>
                <li onClick={() => numbers(8)} className={numberClass[7]}></li>
                <li onClick={() => numbers(9)} className={numberClass[8]}></li>
                <li onClick={() => numbers(10)} className={numberClass[9]}></li>
              </ul>
            </div>
          ) : (
            <div className='flex justify-center' role='status'>
              <svg
                aria-hidden='true'
                className='mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600'
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='currentColor'
                ></path>
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentFill'
                ></path>
              </svg>
              <span className='sr-only'>Loading...</span>
            </div>
          )}
        </div>

        <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4'>
          {txt[0] ? (
            <>
              {order1.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col justify-center items-start col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto pb-3'
                  style={{ borderBottom: '1px solid black' }}
                >
                  <Link
                    to={`/news/${news.items[item].id}`}
                    state={{
                      category: 'magazin',
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
                  <div className='row-span-1 pb-1 mt-2'>
                    <p
                      className='w-full h-full my-auto px-3 text-red-700 font-normal text-lg text-left uppercase'
                      style={{ borderLeft: '3px solid rgb(185 28 28)' }}
                    >
                      {txt[0].headContent[item]}
                    </p>
                    <p className='w-full h-full  my-auto text-black font-normal text-lg text-left'>
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className='col-span-3 mt-2 grid grid-cols-2 gap-4'>
          {txt[0] ? (
            <>
              {order2.map((item, index) => (
                <div
                  key={index}
                  className='col-span-2 row-span-2 w-full h-full relative mx-auto object-contain bg-white flex justify-center lg:col-span-1 md:col-span-1 sm:col-span-2 row-span-2 w-full h-full'
                >
                  <Link
                    to={`/news/${news.items[item].id}`}
                    state={{
                      category: 'magazin',
                      news: news.items[item],
                    }}
                  >
                    {/* <a href={`${txt[0].linkContent[item]}`}> */}
                    <img
                      src={txt[0].imageContent[item]}
                      className='bg-cover bg-center bg-origin-padding bg-origin-border w-full h-full'
                      alt='sportimage'
                    />
                    {/* </a> */}
                  </Link>
                  <p
                    className='w-full h-24 bottom-0 absolute text-center font-bold font-sans p-2 box-border text-white text-xl'
                    style={{
                      background:
                        'linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)',
                    }}
                  >
                    {txt[0].textContent[item]}
                  </p>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4'>
          {txt[0] ? (
            <>
              {order3.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col justify-center items-start col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto'
                  style={{ borderBottom: '1px solid black' }}
                >
                  <Link
                    to={`/news/${news.items[item].id}`}
                    state={{
                      category: 'magazin',
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
                  <div className='row-span-1 pb-1 mt-2'>
                    <p
                      className='w-full h-full px-3 text-red-700 font-normal text-lg text-left uppercase'
                      style={{ borderLeft: '3px solid rgb(185 28 28)' }}
                    >
                      {txt[0].headContent[item]}
                    </p>
                    <p className='w-full h-full  text-black font-normal text-lg text-left'>
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>

        {/* kırmızı backgroundlu yer */}
        {txt[0] ? (
          <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4 bg-red-600 p-5'>
            <span
              className='text-white font-bold pl-3'
              style={{
                borderLeft: '3px solid rgb(185 28 28)',
                borderColor: 'white',
              }}
            >
              MODA & GÜZELLİK
            </span>
            <span
              className='text-white font-bold pl-3 '
              style={{
                borderLeft: '3px solid rgb(185 28 28)',
                borderColor: 'white',
              }}
            >
              AŞK & İLİŞKİ
            </span>
            <span
              className='text-white font-bold pl-3'
              style={{
                borderLeft: '3px solid rgb(185 28 28)',
                borderColor: 'white',
              }}
            >
              N-LEZZETLER
            </span>
            {txt[0] ? (
              <>
                {order4.map((item, index) => (
                  <div
                    key={index}
                    className='flex flex-col justify-center items-center col-span-3 md:col-span-1 row-span-1 w-full h-full sm:col-span-3 mx-auto '
                  >
                    <Link
                      to={`/news/${news.items[item].id}`}
                      state={{
                        category: 'magazin',
                        news: news.items[item],
                      }}
                      className='w-full h-full bg-contain relative'
                    >
                      {/* <a
                      href={`${txt[0].linkContent[item]}`}
                      className='w-full h-full bg-contain relative'
                    > */}
                      <img
                        src={txt[0].imageContent[item]}
                        alt=''
                        className='w-full h-full bg-contain'
                      ></img>
                      <p
                        className='absolute bottom-0 p-2 my-auto text-white font-bold text-left'
                        style={{
                          background:
                            'linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)',
                        }}
                      >
                        {txt[0].textContent[item]}
                      </p>
                      {/* </a> */}
                    </Link>
                  </div>
                ))}
              </>
            ) : null}
          </div>
        ) : null}

        {/* kırmızı backgroundlu yer */}

        <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4'>
          {txt[0] ? (
            <>
              {order5.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col justify-center items-start col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto'
                  style={{ borderBottom: '1px solid black' }}
                >
                  <Link
                    to={`/news/${news.items[item].id}`}
                    state={{
                      category: 'magazin',
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
                  <div className='row-span-1 pb-1 mt-2'>
                    <p
                      className='w-full h-full px-3 text-red-700 font-normal text-lg text-left uppercase'
                      style={{ borderLeft: '3px solid rgb(185 28 28)' }}
                    >
                      {txt[0].headContent[item]}
                    </p>
                    <p className='w-full h-full  text-black font-normal text-lg text-left'>
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className='col-span-3 mt-2 grid'>
          {txt[0] ? (
            <>
              {order6.map((item, index) => (
                <div
                  key={index}
                  className='relative w-full mx-auto h-full bg-white'
                >
                  <p className='text-3xl mt-2 mb-2 ml-4 font-bold justify-start'>
                    FOTO
                  </p>
                  <Link
                    to={`/news/${news.items[item].id}`}
                    state={{
                      category: 'magazin',
                      news: news.items[item],
                    }}
                  >
                    {/* <a href={`${txt[0].linkContent[item]}`}> */}
                    <img
                      src={txt[0].imageContent[item]}
                      className='w-full h-max box-border'
                      alt='sportimage'
                    />
                    {/* </a> */}
                  </Link>
                  <p
                    className='w-full h-28 bottom-0 absolute text-center font-bold font-sans p-2 box-border text-white text-4xl'
                    style={{
                      background:
                        'linear-gradient(0deg, rgba(2,0,36,0.6) 50%, transparent 100%)',
                    }}
                  >
                    {txt[0].textContent[item]}
                  </p>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className='col-span-3 row-span-auto mt-2 grid grid-cols-3 gap-4 mb-3'>
          {txt[0] ? (
            <>
              {order7.map((item, index) => (
                <div
                  key={index}
                  className='flex flex-col justify-center items-start col-span-3 md:col-span-1 row-span-1 w-full h-full bg-white grid grid-rows-3 sm:col-span-3 mx-auto'
                  style={{ borderBottom: '1px solid black' }}
                >
                  {' '}
                  <Link
                    to={`/news/${news.items[item].id}`}
                    state={{
                      category: 'magazin',
                      news: news.items[item],
                    }}
                    className='row-span-2 w-full h-full'
                  >
                    {/* <a
                    href={`${txt[0].linkContent[item]}`}
                    className='row-span-2 w-full h-full'
                  > */}
                    <img
                      src={txt[0].imageContent[item]}
                      alt=''
                      className='row-span-2 w-full h-full bg-cover bg-center'
                    ></img>
                    {/* </a> */}
                  </Link>
                  <div className='row-span-1 pb-1 mt-2'>
                    <p
                      className='w-full h-full px-3 text-red-700 font-normal text-lg text-left uppercase'
                      style={{ borderLeft: '3px solid rgb(185 28 28)' }}
                    >
                      {txt[0].headContent[item]}
                    </p>
                    <p className='w-full h-full  text-black font-normal text-lg text-left'>
                      {txt[0].textContent[item]}
                    </p>
                  </div>
                </div>
              ))}
            </>
          ) : null}
        </div>

        <div className='col-span-3'>
          {txt[0] ? (
            <>
              {
                <div className='col-span-3 bg-white h-12 flex justify-center'>
                  <button
                    onClick={() => more()}
                    className='w-full text-gray, border-2'
                  >
                    DAHA FAZLA GÖSTER
                  </button>
                </div>
              }
            </>
          ) : null}
        </div>
      </div>
      {/* footer */}
      <div className='mt-3'>
        {txt[0] ? (
          <>
            {
              <div className='flex bg-black justify-around h-16 items-center px-6'>
                <a href='/' className=''>
                  <img
                    className='mr-5 w-32'
                    src='https://cdn.ntv.com.tr/img/KadinLeftLogo.svg?v=6429z'
                    alt='ntv.com.tr'
                  ></img>
                </a>
                <p className='text-white mr-auto'>
                  İletişim: n-life@ntv.com.tr
                </p>
                <a href='https://ntv.com.tr'>
                  <span className='text-white text-sm font-semibold'>
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
};

export default Astrology;
