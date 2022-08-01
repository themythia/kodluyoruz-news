import { createContext, useEffect, useState } from 'react';
import { parseFeed } from 'htmlparser2';

export const EconContext = createContext();

const EconContextWrapper = ({ children }) => {
  const [economy, setEconomy] = useState({});

  useEffect(() => {
    fetch(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/ekonomi.rss'
    )
      .then((res) => res.text())
      .then((data) => parseFeed(data))
      .then((parsedData) => {
        const formattedParse = {
          description: parsedData.description,
          items: parsedData.items.map((item) => ({
            title: item.title,
            link: item.link,
            media: item.description
              .split('<img src="')[1]
              .split('?width=1200')[0],
            description: item.description.split('<p>')[1].split('</p>')[0],
          })),
        };
        setEconomy(formattedParse);
      })
      .catch((e) => console.warn(e));
  }, []);

  return (
    <EconContext.Provider value={{ economy }}>{children}</EconContext.Provider>
  );
};

export default EconContextWrapper;
