import useWindowSize from '../../../../utils/hooks/useWindowSize';
import NewsCardImage from './NewsCardImage';
import NewsCardTitle from './NewsCardTitle';

const NewsCard = ({ news, type }) => {
  const { width } = useWindowSize();
  return (
    <a
      href={news?.link}
      target='_blank'
      className='flex flex-col text-white font-bold w-[calc((100vw-32px)/2.22)] h-auto md:w-[calc((100vw-40px)/3)] md:h-auto lg:w-80 mr-[5px] md:mr-0'
      rel='noreferrer'
      data-testid={type === 'mobile' ? 'mobile-newsCard' : 'newsCard'}
    >
      <NewsCardImage image={news?.media} alt={news?.title} />
      <NewsCardTitle text={news?.title} />
    </a>
  );
};
export default NewsCard;
