const Title = ({ text, type }) => {
  return (
    <>
      {type === 'title' && (
        <h1 className='text-4xl md:text-3xl lg:text-[44px] lg:leading-[50px] font-black mb-4 lg:mb-5'>
          {text}
        </h1>
      )}
      {type === 'subtitle' && (
        <h2 className='text-lg leading-6 lg:text-20-28 font-black mb-3 lg:mb-[30px]'>
          {text}
        </h2>
      )}
    </>
  );
};
export default Title;
