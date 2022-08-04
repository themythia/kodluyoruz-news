import NewsCardImage from './NewsCardImage';
import NewsCardTitle from './NewsCardTitle';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
  return (
    <Link
      to={`/news/${news?.id}`}
      state={{ category: news?.category, news }}
      className='flex flex-col text-textDark font-bold h-auto md:h-auto w-full'
      data-testid='newsCard'
    >
      <NewsCardImage image={news?.media} alt={news?.title} />
      <NewsCardTitle text={news?.title} />
    </Link>
  );
};
export default NewsCard;
