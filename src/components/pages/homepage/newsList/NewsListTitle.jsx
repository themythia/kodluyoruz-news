const NewsListTitle = ({ type }) => {
  const barColor =
    type === 'tech'
      ? 'bg-tech'
      : type === 'world'
      ? 'bg-world'
      : type === 'turkiye'
      ? 'bg-textRed'
      : '';
  const text =
    type === 'tech'
      ? 'TEKNOLOJİ'
      : type === 'world'
      ? 'DÜNYA'
      : type === 'turkiye'
      ? 'TÜRKİYE'
      : '';

  return (
    <div className='bg-newsListBg h-[38px] md:h-12 flex flex-row items-center'>
      <div
        className={`w-[5px] h-3 md:h-[13px] ml-4 lg:ml-5 mr-2.5 ${barColor}`}
      ></div>
      <span className='text-textDark text-14-22 md:text-18-28 font-black'>
        {text}
      </span>
    </div>
  );
};
export default NewsListTitle;
