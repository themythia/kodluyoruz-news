import { useContext } from 'react';
import { HomeContext } from '../../../../contexts/HomeContext';
import CarouselImage from './CarouselImage';
import CarouselTitle from './CarouselTitle';

const CarouselContainer = ({ index }) => {
  const { breaking } = useContext(HomeContext);
  return (
    <a
      href={breaking?.items?.[index + 10].link}
      target='_blank'
      rel='noreferrer'
    >
      <div className='w-full h-auto flex flex-col' data-testid='carousel-item'>
        <CarouselImage index={index} />
        <CarouselTitle index={index} />
      </div>
    </a>
  );
};
export default CarouselContainer;
