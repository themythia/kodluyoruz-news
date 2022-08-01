import { useContext } from 'react';
import { EconContext } from '../../../../contexts/EconContext';

const CarouselTitle = ({ index }) => {
  const { economy } = useContext(EconContext);
  const news = economy?.items?.[index + 10];

  return (
    <div className='w-full bg-economy pt-2.5 px-[15px] text-white font-bold text-20-22 text-center h-[95px] md:hidden'>
      <p className='w-full h-full flex flex-row items-center justify-center'>
        {news?.title}
      </p>
    </div>
  );
};
export default CarouselTitle;
