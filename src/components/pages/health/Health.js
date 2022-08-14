import React, { useState, useEffect } from 'react';
import './Health.css';
import Carousel from './Carousel';
import { parseFeed } from 'htmlparser2';
import axios from 'axios';

const Health = (arr2 = {}) => {
  const [getData, setGetData] = useState({});
  const [loadMore, setLoadMore] = useState(62);
  const [dataPull2, setDataPull2] = useState(null);

  async function request() {
    const dataUrl = await axios.get(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/saglik.rss'
    );
    const array = parseFeed(dataUrl.data).items;
    return array;
  }

  useEffect(() => {
    request()?.then((data) => setGetData(data));
  }, []);

  useEffect(() => {
    let newsArray = Array(loadMore).fill();
    for (const key in newsArray) {
      newsArray[key] = getData[key];
    }
    setDataPull2({ arr2: newsArray });
  }, [getData, loadMore]);

  return (
    <>
      <div className='slickSlider'>
        <Carousel carouselItemList={dataPull2?.arr2} />
      </div>
      {/* <div className='slider2'>2. slider</div> */}

      <div className='list'>
        <div className='list1'>
          <a href={dataPull2?.arr2?.[0]?.id} target='_blank'>
            <img
              src={dataPull2?.arr2?.[0]?.description.substring(
                10,
                dataPull2?.arr2?.[0]?.description.indexOf(' ', 10) - 1
              )}
            ></img>
            <div className='cardListTitle'>{dataPull2?.arr2?.[0]?.title}</div>
          </a>
        </div>
        <div className='list2'>
          <a href={dataPull2?.arr2?.[1]?.id} target='_blank'>
            <img
              src={dataPull2?.arr2?.[1]?.description.substring(
                10,
                dataPull2?.arr2?.[1]?.description.indexOf(' ', 10) - 1
              )}
            ></img>
            <div className='cardListTitle'>{dataPull2?.arr2?.[1]?.title}</div>
          </a>
        </div>
      </div>
      <div className='multiple'>
        <div className='multipleIn'>
          <div className='newsDivDis'>
            {dataPull2?.arr2?.map((value, index) => {
              return (
                <div className='newsDivhealth' key={index}>
                  <a href={value?.id} target='_blank' textDecoration='none'>
                    <img
                      src={value?.description.substring(
                        10,
                        value?.description.indexOf(' ', 10) - 1
                      )}
                      className='newsimage'
                    ></img>
                    <div className='newstitlehealth'>
                      {value?.title.substring(0, 80) + '...'}
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className='showMorehealt'>Daha Fazla Göster</div>
      <div className='footerCopyRighthealth'>NTV icon copyright</div>
      <div className='footerhealth'>Kurumsal</div>
      <div className='footerIconshealth'>Ntv'yi Keşfet</div>
    </>
  );
};

export default Health;
