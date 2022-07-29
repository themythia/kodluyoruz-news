import NewsCardImage from './NewsCardImage';
import NewsCardTitle from './NewsCardTitle';

const NewsCard = () => {
  return (
    <div className='flex flex-col mt-28 text-white font-bold w-[172px] h-[222px] md:w-[calc((100vw-40px)/3)] md:h-auto lg:w-80'>
      <NewsCardImage />
      <NewsCardTitle />
    </div>
  );
};
export default NewsCard;
