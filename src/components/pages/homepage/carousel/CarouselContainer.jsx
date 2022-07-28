import CarouselImage from './CarouselImage';
import CarouselTitle from './CarouselTitle';

const CarouselContainer = () => {
  return (
    <div className='w-full h-auto flex flex-col'>
      <CarouselImage />
      <CarouselTitle />
    </div>
  );
};
export default CarouselContainer;
