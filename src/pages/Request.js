import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import '../../index.css';
import './Life.css'
import { parseFeed } from 'htmlparser2';


const Request = () => {
  const [data, setData] = useState('');
  const [holdData, setHoldData] = useState({
    imageData: ' ',
    titleData: ' ',
    hrefData: ' ',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/saglik.rss`
        );
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const parseData = parseFeed(data);
      
      let textDatas = [{ imageData: [], titleData: [], hrefData: [] }];
      if (parseData) {
        for (let i = 0; i < 100; i++) {
          textDatas[0].imageData.push(
            parseData.items[i].description
              .split('<img src="')[1]
              .split('?width')[0]
          );
          textDatas[0].titleData.push(parseData.items[i].title);
          textDatas[0].hrefData.push(parseData.items[i].link);
        }
        setHoldData(textDatas);
      }
      
    }
  }, [data]);

  let newData = [];
  for (let i = 0; i < 18; i++) {
    newData.push(holdData[0]?.imageData?.[i])
  }

  const buttonImages = newData.map((items) => {
    return 
  })
  return (
    <div> 
      {console.log(newData)}    
    {holdData[0] ? (
      <div>
        <a href={`${holdData[0].hrefData}`}>
          <img
            src={holdData[0].imageData[0]}
            className='bg-cover bg-center bg-origin-padding bg-origin-border w-full h-full'
            alt='sportimage'
          />
        </a>
        <p>{}</p>
      </div>
    ) : null}
  </div>
  );
};

export default Request;