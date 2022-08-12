import { Link } from 'react-router-dom';

const SliderItem = ({ news }) => {
  return (
    <Link
      to={`/news/${news?.id}}`}
      state={{
        category: news?.category,
        news: news,
      }}
      className='md:text-14-16 md:h-[42px] lg:h-[50px] flex items-center'
      data-testid='slider-item'
    >
      {news?.title}
    </Link>
  );
};
export default SliderItem;
