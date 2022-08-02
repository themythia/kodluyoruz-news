import { useContext } from 'react';
import { EconContext } from '../../../../contexts/EconContext';
import NewsCard from './NewsCard';
const NewsCardContainer = () => {
  const { economy } = useContext(EconContext);
  console.log(economy);
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-2.5 w-full my-2.5'>
      {[...Array(80)].map((_, index) => (
        <NewsCard key={index} news={economy?.items?.[index + 20]} />
      ))}
    </div>
  );
};
export default NewsCardContainer;
