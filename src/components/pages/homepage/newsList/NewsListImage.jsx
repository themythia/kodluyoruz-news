import NewsListImageText from './NewsListImageText';

const NewsListImage = ({ image, alt }) => {
  return (
    <div className='aspect-4/3 w-full h-auto overflow-hidden'>
      <img src={image} className='w-full h-full object-cover' alt={alt} />
      <NewsListImageText text={alt} />
    </div>
  );
};
export default NewsListImage;
