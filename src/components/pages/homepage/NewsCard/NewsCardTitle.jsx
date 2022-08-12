const NewsCardTitle = ({ text, type }) => {
  return (
    <div
      className={`h-[94px] w-full md:w-full md:h-[74px] ${
        type === 'home' ? 'bg-textRed' : 'bg-economy'
      } flex flex-row justify-center items-center px-2.5 lg:p-[15px]`}
    >
      <p className='text-14-16 md:text-20-22 max-h-full line-clamp-2'>{text}</p>
    </div>
  );
};
export default NewsCardTitle;
