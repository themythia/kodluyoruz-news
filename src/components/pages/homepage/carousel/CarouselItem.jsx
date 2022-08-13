import CarouselImage from './CarouselImage';
import { Link } from 'react-router-dom';
import MobileText from './MobileText';
import useDynamicContext from '../../../../utils/hooks/useDynamicContext';

const CarouselItem = ({ index, type }) => {
  const news = useDynamicContext(type);
  return (
    <Link
      to={`/haberler/${news?.items?.[index + 10].id}`}
      state={{
        category: news?.items?.[index + 10].category,
        news: news?.items?.[index + 10],
      }}
    >
      <div className='w-full h-auto flex flex-col' data-testid='carousel-item'>
        <CarouselImage index={index} type={type} />
        <MobileText index={index} type={type} />
      </div>
    </Link>
  );
};
export default CarouselItem;
