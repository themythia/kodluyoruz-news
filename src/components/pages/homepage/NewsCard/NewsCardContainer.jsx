import useDynamicContext from '../../../../utils/hooks/useDynamicContext';
import NewsCard from './NewsCard';
const NewsCardContainer = ({ size, type }) => {
  const news = useDynamicContext(type);
  return (
    <div
      className={`${
        type === 'home' ? 'hidden md:grid md:grid-cols-3' : ''
      } grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-2.5 w-full mb-2.5`}
      data-testid={
        size === 3 ? 'top-news-card-container' : 'bottom-news-card-container'
      }
    >
      {[...Array(size)].map((_, index) => (
        <NewsCard
          key={index}
          news={news?.items?.[size === 3 ? index + 30 : index + 33]}
          page={type}
        />
      ))}
    </div>
  );
};
export default NewsCardContainer;
