import { useContext, useEffect, useState } from 'react';
import { EconContext } from '../../../../contexts/EconContext';

const ListItem = ({ type, currency }) => {
  const { prevRates, currentRates } = useContext(EconContext);
  const [diff, setDiff] = useState(0);
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(0);

  useEffect(() => {
    // if api is fetched
    if (prevRates && currentRates) {
      const currentTRY = currentRates.TRY;
      const prevTRY = prevRates.TRY;

      setCurrent(currentTRY / currentRates[currency]);
      setPrev(prevTRY / prevRates[currency]); // currency rate from yesterday

      if (current > prev) {
        setDiff(((current - prev) / prev) * 100);
      } else if (current < prev) {
        setDiff(((current - prev) / prev) * 100);
      } else setDiff(0);
    }
  }, [currency, current, currentRates, prev, prevRates]);

  const currencies = {
    currency: {
      USD: 'Dolar',
      EUR: 'Euro',
      GBP: 'Sterlin',
      JPY: 'Japon Yeni',
      SAR: 'Suudi Arabistan Riyali',
      NOK: 'Norveç Kronu',
    },
    crypto: {
      BTC: 'Bitcoin',
      ETH: 'Ethereum',
      XRP: 'Ripple',
      DOGE: 'Dogecoin',
      ADA: 'Cardano',
      DOT: 'Polkadot',
    },
  };

  return (
    <div className='flex flex-row justify-between items-center gap-x-4 font-bold text-textDark px-2 py-2.5 text-14-16 odd:bg-[#f3f3f3]'>
      <p>{currencies?.[type]?.[currency]}</p>
      <div className='text-right'>
        <p>{current.toFixed(3)}</p>
        <p
          className={`${
            diff > 0
              ? 'text-green-700'
              : diff < 0
              ? 'text-red-700'
              : 'text-textDark'
          } text-xs`}
        >{`% ${diff.toFixed(3)}`}</p>
      </div>
    </div>
  );
};
export default ListItem;
