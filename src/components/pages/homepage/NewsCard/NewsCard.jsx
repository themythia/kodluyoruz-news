import NewsCardImage from './NewsCardImage';
import NewsCardTitle from './NewsCardTitle';

const NewsCard = () => {
  return (
    <div className='flex flex-col text-white font-bold w-[calc((100vw-32px)/2.22)] h-auto md:w-[calc((100vw-40px)/3)] md:h-auto lg:w-80 mr-[5px] md:mr-0'>
      <NewsCardImage />
      <NewsCardTitle />
    </div>
  );
};
export default NewsCard;
