import { useContext } from 'react';
import { HomeContext } from '../../../../contexts/HomeContext';
import NewsCard from './NewsCard';
const NewsCardContainer = ({ size }) => {
  const { breaking } = useContext(HomeContext);
  return (
    <div className='hidden  md:flex md:flex-row md:justify-between mb-2.5 flex-wrap gap-y-2.5'>
      {[...Array(size)].map((_, index) => (
        <NewsCard
          key={index}
          news={breaking?.items?.[size === 3 ? index + 30 : index + 33]}
        />
      ))}
    </div>
  );
};
export default NewsCardContainer;
