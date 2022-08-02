import { createContext, useEffect, useState } from 'react';
import { parseFeed } from 'htmlparser2';
import formatRSSFeed from '../utils/api/formatRSSFeed';
import fetchCurrencies from '../utils/api/fetchCurrencies';

export const EconContext = createContext();

const EconContextWrapper = ({ children }) => {
  const [economy, setEconomy] = useState({});
  const [currentRates, setCurrentRates] = useState(null);
  const [prevRates, setPrevRates] = useState(null);

  useEffect(() => {
    // fetches RSS feed
    fetch(
      'https://pacific-caverns-96128.herokuapp.com/https://www.ntv.com.tr/ekonomi.rss'
    )
      .then((res) => res.text())
      .then((data) => parseFeed(data))
      .then((parsedData) => setEconomy(formatRSSFeed(parsedData)))
      .catch((e) => console.warn(e));

    fetchCurrencies().then((data) => {
      setCurrentRates(data.current);
      setPrevRates(data.prev);
    });
  }, []);

  return (
    <EconContext.Provider value={{ economy, currentRates, prevRates }}>
      {children}
    </EconContext.Provider>
  );
};

export default EconContextWrapper;
