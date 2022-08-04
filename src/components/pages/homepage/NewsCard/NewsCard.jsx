import NewsCardImage from './NewsCardImage';
import NewsCardTitle from './NewsCardTitle';
import { Link } from 'react-router-dom';

const NewsCard = ({ news, type }) => {
  return (
    <Link
      to={`/news/${news?.id}`}
      state={{ category: news?.category, news }}
      className='flex flex-col text-white font-bold w-[calc((100vw-32px)/2.22)] h-auto md:w-[calc((100vw-40px)/3)] md:h-auto lg:w-80 mr-[5px] md:mr-0'
      data-testid={type === 'mobile' ? 'mobile-newsCard' : 'newsCard'}
    >
      <NewsCardImage image={news?.media} alt={news?.title} />
      <NewsCardTitle text={news?.title} />
    </Link>
  );
};
export default NewsCard;
