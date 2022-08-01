import { useContext } from 'react';
import { HomeContext } from '../../../../contexts/HomeContext';
import CarouselimageText from './CarouselImageText';

const CarouselImage = ({ index }) => {
  const { breaking } = useContext(HomeContext);
  const news = breaking?.items?.[index + 10];

  return (
    <div className='w-full md:max-w-[1000px] aspect-4/3 md:aspect-40/23 overflow-hidden'>
      <img
        src={news?.media}
        alt={news?.title}
        className='w-full h-full object-cover'
      />
      <CarouselimageText text={news?.title} />
    </div>
  );
};
export default CarouselImage;
