import useDynamicContext from '../../../../utils/hooks/useDynamicContext';
import Text from './Text';

const CarouselImage = ({ index, type }) => {
  const news = useDynamicContext(type);

  return (
    <div className='w-full md:max-w-[1000px] aspect-4/3 md:aspect-40/23 overflow-hidden'>
      <img
        src={news?.items?.[index + 10]?.media}
        alt={news?.items?.[index + 10]?.title}
        className='w-full h-full object-cover'
      />
      <Text text={news?.items?.[index + 10]?.title} type={type} />
    </div>
  );
};
export default CarouselImage;
