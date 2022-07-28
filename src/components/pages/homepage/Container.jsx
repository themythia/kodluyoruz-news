const Container = ({ children }) => {
  return (
    <div className='bg-bg w-screen min-h-screen md:flex md:justify-center'>
      <main className='p-2.5 pt-[100px] md:pt-[90px] md:w-[1020px] font-roboto'>
        {children}
      </main>
    </div>
  );
};
export default Container;
