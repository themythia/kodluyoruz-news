import Text from './Text';
import googleNews from '../../../../assets/google-news.svg';

const GoogleNews = () => {
  return (
    <div className='flex flex-row items-center h-9 lg:h-full'>
      <Text text='Abone ol' />
      <img
        src={googleNews}
        alt='Google News'
        className='mx-2.5 lg:mx-5 border border-[#e0e0dc] rounded-md w-[100px] h-[26px] md:w-[140px] md:h-[38px]'
      />
    </div>
  );
};
export default GoogleNews;
