import { useContext } from 'react';
import { EconContext } from '../../../../contexts/EconContext';
import CarouselImage from './CarouselImage';
import CarouselTitle from './CarouselTitle';

const CarouselContainer = ({ index }) => {
  const { economy } = useContext(EconContext);
  return (
    <a
      href={economy?.items?.[index].link}
      target='_blank'
      rel='noreferrer'
      data-testid='carousel-item'
    >
      <div className='w-full h-auto flex flex-col'>
        <CarouselImage index={index} />
        <CarouselTitle index={index} />
      </div>
    </a>
  );
};
export default CarouselContainer;
