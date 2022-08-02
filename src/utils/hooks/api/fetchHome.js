import { parseFeed } from 'htmlparser2';

const fetchHome = async () => {
  const corsProxy = 'https://pacific-caverns-96128.herokuapp.com/';
  const rssFeeds = [
    'https://www.ntv.com.tr/son-dakika.rss',
    'https://www.ntv.com.tr/teknoloji.rss',
    'https://www.ntv.com.tr/dunya.rss',
    'https://www.ntv.com.tr/turkiye.rss',
  ];

  // fetches RSS feed & formats the response
  const handleFetch = async (index) => {
    try {
      const response = await fetch(corsProxy + rssFeeds[index]);
      const text = await response.text();
      const parse = parseFeed(text);
      const formattedParse = {
        description: parse.description,
        items: parse.items.map((item) => ({
          title: item.title,
          link: item.link,
          media: item.description
            .split('<img src="')[1]
            .split('?width=1200')[0],
          description: item.description.split('<p>')[1].split('</p>')[0],
        })),
      };
      return formattedParse;
    } catch (error) {
      console.error(`Fetching RSS Feed: ${rssFeeds[index]} failed!`, error);
    }
  };

  // fetches every RSS feed in rssFeeds array
  const fetchEverything = await Promise.all([
    handleFetch(0),
    handleFetch(1),
    handleFetch(2),
    handleFetch(3),
  ]);

  return {
    breaking: fetchEverything[0],
    tech: fetchEverything[1],
    world: fetchEverything[2],
    turkey: fetchEverything[3],
  };
};

export default fetchHome;
