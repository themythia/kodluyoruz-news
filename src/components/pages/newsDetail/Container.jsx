const Container = ({ children }) => {
  return (
    <div className='w-full lg:w-[1020px] lg:px-2.5 flex flex-col lg:flex-row m-auto font-roboto text-textDark'>
      {children}
    </div>
  );
};
export default Container;
