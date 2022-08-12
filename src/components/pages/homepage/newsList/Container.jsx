const Container = ({ children }) => {
  return (
    <div
      className='w-full h-full bg-white mt-2.5 md:mt-0'
      data-testid='news-list'
    >
      {children}
    </div>
  );
};
export default Container;
