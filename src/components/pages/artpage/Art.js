import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArtCard from './ArtCard';
import { parseFeed } from 'htmlparser2';
import Carousel from './Carousel';
import formatRSSFeed from '../../../utils/api/formatRSSFeed';
import { CORS_PROXY } from '../../..';

const Art = () => {
  const [rssText, setRssText] = useState('');
  const [news, setNews] = useState([]);
  const [slides, setSlides] = useState([]);
  // state to handle news detail link
  const [newsDetail, setNewsDetail] = useState([]);

  const fetchNews = async () => {
    const response = await fetch(
      CORS_PROXY + 'https://www.ntv.com.tr/sanat.rss'
    );

    const data = await response.text();
    const parsedData = await parseFeed(data);

    setNewsDetail(formatRSSFeed(parsedData).items);
    setRssText(parsedData);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (rssText) {
      setNews(rssText.items);

      const slides = rssText.items.slice(0, 20).map((item) => {
        const src = item.description.split('src="')[1].split('"')[0];
        return {
          ...item,
          src,
        };
      });
      setSlides(slides);
    }
  }, [rssText]);

  return (
    <div className='px-2 lg:w-[1000px] lg:mx-auto lg:px-0'>
      <div className='py-4'>
        <Carousel className='mt-4' slides={slides} detail={newsDetail} />
      </div>
      <div className=' md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3'>
        {news.length > 0 ? (
          news.map((item, index) => (
            <ArtCard key={index} content={item} detail={newsDetail[index]} />
          ))
        ) : (
          <p className='font-bold'>Yükleniyor...</p>
        )}
      </div>
    </div>
  );
};

export default Art;
