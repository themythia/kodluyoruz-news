import Currency from './Currency';

const CurrencyContainer = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-2.5 mb-2.5'>
      <Currency type='currency' />
      <Currency type='crypto' />
    </div>
  );
};
export default CurrencyContainer;
