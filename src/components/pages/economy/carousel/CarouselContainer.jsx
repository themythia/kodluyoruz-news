import { useContext } from 'react';
import { EconContext } from '../../../../contexts/EconContext';
import CarouselImage from './CarouselImage';
import CarouselTitle from './CarouselTitle';
import { Link } from 'react-router-dom';

const CarouselContainer = ({ index }) => {
  const { economy } = useContext(EconContext);
  return (
    <Link
      to={`/news/${economy?.items?.[index]?.id}`}
      state={{
        category: economy?.items?.[index]?.category,
        news: economy?.items?.[index],
      }}
      data-testid='carousel-item'
    >
      <div className='w-full h-auto flex flex-col'>
        <CarouselImage index={index} />
        <CarouselTitle index={index} />
      </div>
    </Link>
  );
};
export default CarouselContainer;
