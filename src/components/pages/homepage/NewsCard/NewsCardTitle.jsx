const NewsCardTitle = ({ text }) => {
  return (
    <div className='h-[94px] w-full md:w-full md:h-[74px] bg-textRed flex flex-row justify-center items-center px-2.5 lg:p-[15px]'>
      <p className='text-14-16 md:text-20-22 max-h-full line-clamp-2'>{text}</p>
    </div>
  );
};
export default NewsCardTitle;
