const Container = ({ children }) => {
  return (
    <div className='w-screen min-h-screen bg-bg '>
      <main className='p-2.5 pt-[100px] md:pt-[90px] md:max-w-[1020px] font-roboto m-auto'>
        {children}
      </main>
    </div>
  );
};
export default Container;
