import { parseFeed } from 'htmlparser2';
import { createContext, useEffect, useState } from 'react';

export const HomeContext = createContext();

const HomeContextWrapper = ({ children }) => {
  const [feed, setFeed] = useState('');
  useEffect(() => {
    const corsProxy = 'https://pacific-caverns-96128.herokuapp.com/';
    const rssFeeds = [
      'https://www.ntv.com.tr/son-dakika.rss',
      'https://www.ntv.com.tr/gundem.rss',
    ];

    const fetchRSS = async (url) => {
      try {
        const response = await fetch(url);
        const text = await response.text();
        const parse = parseFeed(text);
        const formatParse = {
          description: parse.description,
          items: parse.items.map((item) => ({
            title: item.title,
            link: item.link,
            media: item.description
              .split('<img src="')[1]
              .split('?width=1200')[0],
          })),
        };
        setFeed(formatParse);
      } catch (error) {
        console.error(`Fetching RSS Feed: ${url} failed!`, error);
      }
    };

    fetchRSS(corsProxy + rssFeeds[0]);
  }, []);

  return (
    <HomeContext.Provider value={{ feed }}>{children}</HomeContext.Provider>
  );
};

export default HomeContextWrapper;
