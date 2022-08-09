import { useContext } from 'react';
import { HomeContext } from '../../../../contexts/HomeContext';
import useDynamicContext from '../../../../utils/hooks/useDynamicContext';

const MobileText = ({ index, type }) => {
  const news = useDynamicContext(type);

  return (
    <div
      className={`w-full ${
        type === 'home'
          ? 'bg-carouselMobileBg'
          : type === 'econ'
          ? 'bg-economy'
          : ''
      } pt-2.5 px-[15px] text-white font-bold text-20-22 text-center h-[95px] md:hidden`}
    >
      <p className='w-full h-full flex flex-row items-center justify-center'>
        {news?.items?.[index + 10]?.title}
      </p>
    </div>
  );
};
export default MobileText;
