import NewsListImageText from './NewsListImageText';
import { Link } from 'react-router-dom';

const NewsListImage = ({ image, alt, link, news }) => {
  return (
    <Link to={`/news/${news?.id}`} state={{ category: news?.category, news }}>
      <div className='aspect-4/3 w-full h-auto overflow-hidden'>
        <img src={image} className='w-full h-full object-cover' alt={alt} />
        <NewsListImageText text={alt} />
      </div>
    </Link>
  );
};
export default NewsListImage;
