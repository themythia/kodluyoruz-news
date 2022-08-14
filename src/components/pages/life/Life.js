import axios from 'axios';
import { parseFeed } from 'htmlparser2';
import React, { useState, useEffect } from 'react';
import Carousel from './Carousel';
import './Life.css';

const Life = (arr = {}) => {
  const [dataPull, setDataPull] = useState(null);
  const [getData, setGetData] = useState({});
  const [loadMore, setLoadMore] = useState(30);

  async function request() {
    const dataUrl = await axios.get(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/yasam.rss'
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
    setDataPull({ arr: newsArray });
  }, [getData, loadMore]);

  return (
    <div className='life'>
      <div className='slickSlider'>
        <Carousel carouselItemList={dataPull?.arr} />
      </div>
      <div className='listItem'>
        <div className='listItem2'>
          <a href={dataPull?.arr?.[0]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='listItem2'>
          <a href={dataPull?.arr?.[1]?.id} target='_blank'>
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
          </a>
        </div>

        <div className='listItem2'>
          <a href={dataPull?.arr?.[2]?.id} target='_blank'>
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
          </a>
        </div>
      </div>

      {/* 2li card */}

      <div className='card'>
        <div className='card1'>
          <a href={dataPull?.arr?.[3]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='card2'>
          <a href={dataPull?.arr?.[4]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
      </div>

      <div className='lifecontent'>
        <div className='contentAll'>
          <a href={dataPull?.arr?.[5]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='contentAll'>
          <a href={dataPull?.arr?.[6]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='contentAll'>
          <a href={dataPull?.arr?.[7]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
      </div>
      <div className='redCard'>
        <div className='redCardIn'>
          <a href={dataPull?.arr?.[8]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='redCardIn'>
          <a href={dataPull?.arr?.[9]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='redCardIn'>
          <a href={dataPull?.arr?.[10]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='redCardIn'>
          <a href={dataPull?.arr?.[11]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='redCardIn'>
          <a href={dataPull?.arr?.[12]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
        <div className='redCardIn'>
          <a href={dataPull?.arr?.[13]?.id} target='_blank' rel='noreferrer'>
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
          </a>
        </div>
      </div>
      <div className='ntvContent'>
        <ul className='ulCard'>
          <li className='listCard'>
            <a href={dataPull?.arr?.[14]?.id} target='_blank' rel='noreferrer'>
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
            </a>
          </li>
          <li className='listCard'>
            <a href={dataPull?.arr?.[15]?.id} target='_blank' rel='noreferrer'>
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
            </a>
          </li>
          <li className='listCard'>
            <a href={dataPull?.arr?.[16]?.id} target='_blank' rel='noreferrer'>
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
            </a>
          </li>
        </ul>
      </div>

      <div className='bigImg'>
        <a href={dataPull?.arr?.[14]?.id} target='_blank' rel='noreferrer'>
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
        </a>
      </div>

      {/* multiple ıtems */}
      <div className='innerContent'>
        <div className='innerContentIn'>
          <div className='newsDivDis'>
            {dataPull?.arr.map((value, index) => {
              return (
                <div className='newsDiv' key={index}>
                  <a
                    href={value?.id}
                    target='_blank'
                    textDecoration='none'
                    rel='noreferrer'
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
                  </a>
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
