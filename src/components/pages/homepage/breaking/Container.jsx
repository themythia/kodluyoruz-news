const Container = ({ children }) => {
  return (
    <div className='hidden md:block md:w-full lg:w-[1000px] md:h-[42px] lg:h-[50px] bg-breakingRed font-black text-white m-auto'>
      <div className='md:px-2.5 lg:p-0 w-full h-full m-auto flex flex-row items-center'>
        {children}
      </div>
    </div>
  );
};
export default Container;
