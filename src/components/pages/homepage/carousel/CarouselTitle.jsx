import { useContext } from 'react';
import { HomeContext } from '../../../../contexts/HomeContext';

const CarouselTitle = ({ index }) => {
  const { breaking } = useContext(HomeContext);
  const news = breaking?.items?.[index + 10];

  return (
    <div className='w-full bg-carouselMobileBg pt-2.5 px-[15px] text-white font-bold text-20-22 text-center h-[95px] md:hidden'>
      <p className='w-full h-full flex flex-row items-center justify-center'>
        {news?.title}
      </p>
    </div>
  );
};
export default CarouselTitle;
