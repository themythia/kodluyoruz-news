import NewsCardImage from './NewsCardImage';
import NewsCardTitle from './NewsCardTitle';
import { Link } from 'react-router-dom';

const NewsCard = ({ news, type, page }) => {
  return (
    <Link
      to={`/news/${news?.id}`}
      state={{ category: news?.category, news }}
      className={`flex flex-col text-white font-bold ${
        page === 'home' ? 'w-[calc((100vw-32px)/2.22)]' : 'w-full'
      }  h-auto md:w-full md:h-auto mr-[5px] md:mr-0`}
      data-testid={type === 'mobile' ? 'mobile-newsCard' : 'newsCard'}
    >
      <NewsCardImage image={news?.media} alt={news?.title} />
      <NewsCardTitle text={news?.title} type={page} />
    </Link>
  );
};
export default NewsCard;
