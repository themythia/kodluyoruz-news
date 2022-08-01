import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ArtCard from '../ArtCard';
import { parseFeed } from 'htmlparser2';

const Art = () => {
  const [rssText, setRssText] = useState('');
  const [news, setNews] = useState([]);

  const fetchNews = async () => {
    const response = await fetch(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/sanat.rss'
    );

    const data = await response.text();
    const parsedData = await parseFeed(data);

    setRssText(parsedData);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (rssText) {
      setNews(rssText.items);
    }
  }, [rssText]);

  return (
    <div className='bg-white px-2 lg:container lg:mx-auto lg:px-0'>
      <div className='py-4'>
        <Link className='text-textGray font-bold' to='/'>
          Haberler
        </Link>
        <span className='text-textDark'> / </span>
        <Link className='text-textDark' to='/art'>
          Sanat Haberleri
        </Link>
      </div>

      <div className=' md:grid md:grid-cols-2 md:gap-2 lg:grid-cols-3'>
        {news.length > 0 ? (
          news.map((item) => <ArtCard content={item} />)
        ) : (
          <p className='font-bold'>Yükleniyor...</p>
        )}
      </div>
    </div>
  );
};

export default Art;
