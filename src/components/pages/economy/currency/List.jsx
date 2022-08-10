import ListItem from './ListItem';

const List = ({ data, type }) => {
  const currencies = {
    currency: ['USD', 'EUR', 'GBP', 'JPY', 'SAR', 'NOK'],
    crypto: ['BTC', 'ETH', 'DOGE', 'XRP', 'ADA', 'DOT'],
  };

  return (
    <div className='bg-white w-full'>
      {currencies?.[type]?.map((currency, index) => (
        <ListItem key={index} type={type} currency={currency} />
      ))}
    </div>
  );
};
export default List;
