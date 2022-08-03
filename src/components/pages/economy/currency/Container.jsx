const Container = ({ children }) => {
  return (
    <div className='w-full bg-white' data-testid='currency-list'>
      {children}
    </div>
  );
};
export default Container;
