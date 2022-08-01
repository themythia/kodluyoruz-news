import NewsListImageText from './NewsListImageText';

const NewsListImage = ({ image, alt, link }) => {
  return (
    <a href={link} target='_blank' rel='noreferrer'>
      <div className='aspect-4/3 w-full h-auto overflow-hidden'>
        <img src={image} className='w-full h-full object-cover' alt={alt} />
        <NewsListImageText text={alt} />
      </div>
    </a>
  );
};
export default NewsListImage;
