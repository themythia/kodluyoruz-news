import NewsCard from './NewsCard';
const NewsCardContainer = ({ size }) => {
  return (
    <div className='hidden  md:flex md:flex-row md:justify-between mb-2.5 flex-wrap gap-y-2.5'>
      {[...Array(size)].map((_, index) => (
        <NewsCard key={index} />
      ))}{' '}
    </div>
  );
};
export default NewsCardContainer;
