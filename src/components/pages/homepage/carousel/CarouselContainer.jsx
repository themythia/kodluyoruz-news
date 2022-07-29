import CarouselImage from './CarouselImage';
import CarouselTitle from './CarouselTitle';

const CarouselContainer = ({ index }) => {
  return (
    <div className='w-full h-auto flex flex-col'>
      <CarouselImage index={index} />
      <CarouselTitle />
    </div>
  );
};
export default CarouselContainer;
