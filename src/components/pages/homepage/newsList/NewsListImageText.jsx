const NewsListImageText = ({ text }) => {
  return (
    <div className='relative h-[50px] z-10 px-4 bottom-[50px] bg-black/50 flex flex-row items-center'>
      <p className='text-white font-black text-16-19 lg:text-20-22 line-clamp-1'>
        {text}
      </p>
    </div>
  );
};
export default NewsListImageText;
