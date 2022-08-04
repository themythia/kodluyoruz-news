import { useContext } from 'react';
import { HomeContext } from '../../../../contexts/HomeContext';
import CarouselImage from './CarouselImage';
import CarouselTitle from './CarouselTitle';
import { Link } from 'react-router-dom';

const CarouselContainer = ({ index }) => {
  const { breaking } = useContext(HomeContext);
  return (
    <Link
      to={`/news/${breaking?.items?.[index + 10].id}`}
      state={{
        category: breaking?.items?.[index + 10].category,
        news: breaking?.items?.[index + 10],
      }}
    >
      <div className='w-full h-auto flex flex-col' data-testid='carousel-item'>
        <CarouselImage index={index} />
        <CarouselTitle index={index} />
      </div>
    </Link>
  );
};
export default CarouselContainer;
