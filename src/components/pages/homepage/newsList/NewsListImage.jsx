import NewsListImageText from './NewsListImageText';

const NewsListImage = () => {
  return (
    <div className='aspect-4/3 w-full h-auto overflow-hidden'>
      <img
        src='https://cdn1.ntv.com.tr/gorsel/6v3BJXHeZUKqUZqbu5tv9w.jpg'
        className='w-full h-full object-cover'
        alt=''
      />
      <NewsListImageText />
    </div>
  );
};
export default NewsListImage;
