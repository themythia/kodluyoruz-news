import axios from 'axios';
import { parseFeed } from 'htmlparser2';
import React, { useState, useEffect } from 'react';
import formatRSSFeed from '../../../utils/api/formatRSSFeed';
import Carousel from './Carousel';
import './Life.css';
import { Link } from 'react-router-dom';

const Life = (arr = {}) => {
  const [dataPull, setDataPull] = useState(null);
  const [getData, setGetData] = useState({});
  const [loadMore, setLoadMore] = useState(30);
  const [details, setDetails] = useState([]);

  async function request() {
    const dataUrl = await axios.get(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/yasam.rss'
    );
    const array = parseFeed(dataUrl.data).items;
    return array;
  }

  useEffect(() => {
    request()?.then((data) => {
      setDetails(formatRSSFeed({ items: data }).items);
      setGetData(data);
    });
  }, []);

  useEffect(() => {
    let newsArray = Array(loadMore).fill();
    for (const key in newsArray) {
      newsArray[key] = getData[key];
    }
    setDataPull({ arr: newsArray });
  }, [getData, loadMore]);

  return (
    <div className='life'>
      <div className='slickSlider'>
        <Carousel carouselItemList={dataPull?.arr} details={details} />
      </div>
      <div className='listItem'>
        <div className='listItem2'>
          <Link
            to={`/haberler/${details?.[0]?.id}`}
            state={{ category: details?.[0]?.category, news: details?.[0] }}
          >
            <img
              src={dataPull?.arr?.[0]?.description.substring(
                10,
                dataPull?.arr?.[0]?.description.indexOf(' ', 10) - 1
              )}
              alt=''
              width='100%'
              height='100%'
            ></img>
            <div className='listItem2Title'>{dataPull?.arr?.[0]?.title}</div>
          </Link>
        </div>
        <div className='listItem2'>
          <Link
            to={`/haberler/${details?.[1]?.id}`}
            state={{ category: details?.[1]?.category, news: details?.[1] }}
          >
            <img
              src={dataPull?.arr?.[1]?.description.substring(
                10,
                dataPull?.arr?.[1]?.description.indexOf(' ', 10) - 1
              )}
              alt=''
              width='100%'
              height='100%'
            ></img>
            <div>{dataPull?.arr?.[1]?.title}</div>
          </Link>
        </div>

        <div className='listItem2'>
          <Link
            to={`/haberler/${details?.[2]?.id}`}
            state={{ category: details?.[2]?.category, news: details?.[2] }}
          >
            <img
              src={dataPull?.arr?.[2]?.description.substring(
                10,
                dataPull?.arr?.[2]?.description.indexOf(' ', 10) - 1
              )}
              alt=''
              width='100%'
              height='100%'
            ></img>
            <div>{dataPull?.arr?.[2]?.title}</div>
          </Link>
        </div>
      </div>

      {/* 2li card */}

      <div className='card'>
        <div className='card1'>
          <Link
            to={`/haberler/${details?.[3]?.id}`}
            state={{ category: details?.[3]?.category, news: details?.[3] }}
          >
            <img
              src={dataPull?.arr?.[3]?.description.substring(
                10,
                dataPull?.arr?.[3]?.description.indexOf(' ', 10) - 1
              )}
              alt=''
              width='100%'
              height='100%'
            ></img>
            <div className='cardTitle'>{dataPull?.arr?.[3]?.title}</div>
          </Link>
        </div>
        <div className='card2'>
          <Link
            to={`/haberler/${details?.[4]?.id}`}
            state={{ category: details?.[4]?.category, news: details?.[4] }}
          >
            <img
              src={dataPull?.arr?.[4]?.description.substring(
                10,
                dataPull?.arr?.[4]?.description.indexOf(' ', 10) - 1
              )}
              alt=''
              width='100%'
              height='100%'
            ></img>
            <div className='cardTitle'>{dataPull?.arr?.[4]?.title}</div>
          </Link>
        </div>
      </div>

      <div className='lifecontent'>
        <div className='contentAll'>
          <Link
            to={`/haberler/${details?.[5]?.id}`}
            state={{ category: details?.[5]?.category, news: details?.[5] }}
          >
            <img
              src={dataPull?.arr?.[5]?.description.substring(
                10,
                dataPull?.arr?.[5]?.description.indexOf(' ', 10) - 1
              )}
              alt=''
              width='100%'
              height='100%'
            ></img>
            <div>{dataPull?.arr?.[5]?.title}</div>
          </Link>
        </div>
        <div className='contentAll'>
          <Link
            to={`/haberler/${details?.[6]?.id}`}
            state={{ category: details?.[6]?.category, news: details?.[6] }}
          >
            <img
              src={dataPull?.arr?.[6]?.description.substring(
                10,
                dataPull?.arr?.[6]?.description.indexOf(' ', 10) - 1
              )}
              width='100%'
              height='100%'
              alt=''
            ></img>
            <div>{dataPull?.arr?.[6]?.title}</div>
          </Link>
        </div>
        <div className='contentAll'>
          <Link
            to={`/haberler/${details?.[7]?.id}`}
            state={{ category: details?.[7]?.category, news: details?.[7] }}
          >
            <img
              src={dataPull?.arr?.[7]?.description.substring(
                10,
                dataPull?.arr?.[7]?.description.indexOf(' ', 10) - 1
              )}
              width='100%'
              height='100%'
              alt=''
            ></img>
            <div>{dataPull?.arr?.[7]?.title}</div>
          </Link>
        </div>
      </div>
      <div className='redCard'>
        <div className='redCardIn'>
          <Link
            to={`/haberler/${details?.[8]?.id}`}
            state={{ category: details?.[8]?.category, news: details?.[8] }}
          >
            <img
              src={dataPull?.arr?.[8]?.description.substring(
                10,
                dataPull?.arr?.[8]?.description.indexOf(' ', 10) - 1
              )}
              width='100%'
              height='100%'
              alt=''
            ></img>
            <div className='redCardTitle'>{dataPull?.arr?.[8]?.title}</div>
          </Link>
        </div>
        <div className='redCardIn'>
          <Link
            to={`/haberler/${details?.[9]?.id}`}
            state={{ category: details?.[9]?.category, news: details?.[9] }}
          >
            <img
              src={dataPull?.arr?.[9]?.description.substring(
                10,
                dataPull?.arr?.[9]?.description.indexOf(' ', 10) - 1
              )}
              width='100%'
              height='100%'
              alt=''
            ></img>
            <div className='redCardTitle'>{dataPull?.arr?.[9]?.title}</div>
          </Link>
        </div>
        <div className='redCardIn'>
          <Link
            to={`/haberler/${details?.[10]?.id}`}
            state={{ category: details?.[10]?.category, news: details?.[10] }}
          >
            <img
              src={dataPull?.arr?.[10]?.description.substring(
                10,
                dataPull?.arr?.[10]?.description.indexOf(' ', 10) - 1
              )}
              width='100%'
              height='100%'
              alt=''
            ></img>
            <div className='redCardTitle'>{dataPull?.arr?.[10]?.title}</div>
          </Link>
        </div>
        <div className='redCardIn'>
          <Link
            to={`/haberler/${details?.[11]?.id}`}
            state={{ category: details?.[11]?.category, news: details?.[11] }}
          >
            <img
              src={dataPull?.arr?.[11]?.description.substring(
                10,
                dataPull?.arr?.[11]?.description.indexOf(' ', 10) - 1
              )}
              width='100%'
              height='100%'
              alt=''
            ></img>
            <div className='redCardTitle'>{dataPull?.arr?.[11]?.title}</div>
          </Link>
        </div>
        <div className='redCardIn'>
          <Link
            to={`/haberler/${details?.[12]?.id}`}
            state={{ category: details?.[12]?.category, news: details?.[12] }}
          >
            <img
              src={dataPull?.arr?.[12]?.description.substring(
                10,
                dataPull?.arr?.[12]?.description.indexOf(' ', 10) - 1
              )}
              width='100%'
              height='100%'
              alt=''
            ></img>
            <div className='redCardTitle'>{dataPull?.arr?.[12]?.title}</div>
          </Link>
        </div>
        <div className='redCardIn'>
          <Link
            to={`/haberler/${details?.[13]?.id}`}
            state={{ category: details?.[13]?.category, news: details?.[13] }}
          >
            <img
              src={dataPull?.arr?.[13]?.description.substring(
                10,
                dataPull?.arr?.[13]?.description.indexOf(' ', 10) - 1
              )}
              width='100%'
              height='100%'
              alt=''
            ></img>
            <div className='redCardTitle'>{dataPull?.arr?.[13]?.title}</div>
          </Link>
        </div>
      </div>
      <div className='ntvContent'>
        <ul className='ulCard'>
          <li className='listCard'>
            <Link
              to={`/haberler/${details?.[14]?.id}`}
              state={{ category: details?.[14]?.category, news: details?.[14] }}
            >
              <img
                src={dataPull?.arr?.[14]?.description.substring(
                  10,
                  dataPull?.arr?.[14]?.description.indexOf(' ', 10) - 1
                )}
                width='100%'
                height='100%'
                alt=''
              ></img>
              <div>{dataPull?.arr?.[14]?.title}</div>
            </Link>
          </li>
          <li className='listCard'>
            <Link
              to={`/haberler/${details?.[15]?.id}`}
              state={{ category: details?.[15]?.category, news: details?.[15] }}
            >
              <img
                src={dataPull?.arr?.[15]?.description.substring(
                  10,
                  dataPull?.arr?.[15]?.description.indexOf(' ', 10) - 1
                )}
                width='100%'
                height='100%'
                alt=''
              ></img>
              <div>{dataPull?.arr?.[15]?.title}</div>
            </Link>
          </li>
          <li className='listCard'>
            <Link
              to={`/haberler/${details?.[16]?.id}`}
              state={{ category: details?.[16]?.category, news: details?.[16] }}
            >
              <img
                src={dataPull?.arr?.[16]?.description.substring(
                  10,
                  dataPull?.arr?.[16]?.description.indexOf(' ', 10) - 1
                )}
                width='100%'
                height='100%'
                alt=''
              ></img>
              <div>{dataPull?.arr?.[16]?.title}</div>
            </Link>
          </li>
        </ul>
      </div>

      <div className='bigImg'>
        <Link
          to={`/haberler/${details?.[14]?.id}`}
          state={{ category: details?.[14]?.category, news: details?.[14] }}
        >
          <img
            src={dataPull?.arr?.[14]?.description.substring(
              10,
              dataPull?.arr?.[14]?.description.indexOf(' ', 10) - 1
            )}
            width='100%'
            height='100%'
            alt=''
          ></img>
          <div className='bigImageTitle'>{dataPull?.arr?.[14]?.title}</div>
        </Link>
      </div>

      {/* multiple ıtems */}
      <div className='innerContent'>
        <div className='innerContentIn'>
          <div className='newsDivDis'>
            {dataPull?.arr.map((value, index) => {
              return (
                <div className='newsDiv' key={index}>
                  <Link
                    to={`/haberler/${details?.[index]?.id}`}
                    state={{
                      category: details?.[index]?.category,
                      news: details?.[index],
                    }}
                  >
                    <img
                      src={value?.description.substring(
                        10,
                        value?.description.indexOf(' ', 10) - 1
                      )}
                      className='newsimage'
                      alt=''
                    ></img>
                    <div className='newstitle'>{value?.title}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='showMore'>Daha Fazla Göster</div>
      <div className='footerIcons '>Ntv'yi Keşfet</div>
    </div>
  );
};

export default Life;
