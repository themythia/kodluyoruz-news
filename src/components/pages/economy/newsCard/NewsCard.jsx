import NewsCardImage from './NewsCardImage';
import NewsCardTitle from './NewsCardTitle';

const NewsCard = ({ news }) => {
  return (
    <a
      href={news?.link}
      target='_blank'
      className='flex flex-col text-textDark font-bold h-auto md:h-auto w-full'
      rel='noreferrer'
      data-testid='newsCard'
    >
      <NewsCardImage image={news?.media} alt={news?.title} />
      <NewsCardTitle text={news?.title} />
    </a>
  );
};
export default NewsCard;
