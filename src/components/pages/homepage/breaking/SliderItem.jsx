const SliderItem = ({ news }) => {
  return (
    <a
      href={news?.link}
      className='md:text-14-16 md:h-[42px] lg:h-[50px] flex items-center'
      target='_blank'
      rel='noreferrer'
    >
      {news?.title}
    </a>
  );
};
export default SliderItem;
