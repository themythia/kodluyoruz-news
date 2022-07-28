import CarouselimageText from './CarouselImageText';

const CarouselImage = () => {
  return (
    <div className='w-full aspect-4/3 overflow-hidden'>
      <img
        src='https://cdn1.ntv.com.tr/gorsel/6v3BJXHeZUKqUZqbu5tv9w.jpg'
        alt=''
        className='w-full h-full'
      />
      <CarouselimageText />
    </div>
  );
};
export default CarouselImage;
