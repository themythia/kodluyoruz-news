import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';
import formatRSSFeed from '../../utils/api/formatRSSFeed';
import dataList from './DataList';

const BottomPage = () => {
  const [itemList, setItemList] = useState({});
  const [newDataList, setNewDataList] = useState([]);
  const [showMore, setShowMore] = useState(12);
  // state to handle news details
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    dataList().then((api) => {
      setDetail(formatRSSFeed({ items: api }).items);
      let textDatas = api.map((item) => ({
        imageData: item.description.split('<img src="')[1].split('?width')[0],
        titleData: item.title,
        hrefData: item.link,
      }));
      setItemList(textDatas);
    });
  }, []);

  useEffect(() => {
    console.log('test');

    if (Object.keys(itemList).length > 0) {
      console.log('test123123');
      let newArray = [];
      for (let i = 0; i < showMore; i++) {
        newArray.push(itemList[i]);
      }
      setNewDataList(newArray);
    }
    console.log('test');
  }, [showMore, itemList]);

  console.log(newDataList);

  const newList = newDataList?.map(function (value, index) {
    return (
      <li
        className='bg-white relative h-64 w-100/3  box-border items-center justify-center'
        key={index}
      >
        <Link
          to={`/haberler/${detail[index].id}`}
          state={{ category: 'otomobil', news: detail[index] }}
        >
          <img
            src={value.imageData}
            alt={value.titleData}
            className='min-h-11 cursor-pointer'
          ></img>
        </Link>
        <div className='block items-center justify-center p-4 text-16-19 font-bold line-clamp-2 '>
          {value.titleData}
        </div>
      </li>
    );
  });

  return (
    <>
      <div className=' mx-3 bg-bg pt-10'>
        <div className=' relative mx-auto max-w-screen-lg  w-full'>
          <ul className='relative box-border gap-4 clear-both flex flex-wrap items-center justify-between '>
            {newList}
          </ul>
        </div>
      </div>
      <div className='font-roboto bg-bg px-60 flex'>
        <div className='block pt-12 pb-7 w-full mx-3 '>
          <div
            className='py-4 bg-white justify-center  flex text-16-19 cursor-pointer'
            onClick={() => setShowMore((x) => x + 9)}
          >
            DAHA FAZLA GÖSTER
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomPage;
