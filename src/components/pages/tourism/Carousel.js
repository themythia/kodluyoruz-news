import { useState } from 'react';
import IconRight from '../../icons/IconRight';
import IconLeft from '../../icons/IconLeft';
import { Link } from 'react-router-dom';

const Carousel = ({ slides, className, detail }) => {
  const [slide, setSlide] = useState(0);

  const handleLeftArrow = () => {
    if (slide === 0) {
      setSlide(slides.length - 1);
    } else {
      setSlide(slide - 1);
    }
  };

  const handleRightArrow = () => {
    if (slide === slides.length - 1) {
      setSlide(0);
    } else {
      setSlide(slide + 1);
    }
  };
  return (
    <div className={className}>
      {slides.map((item, index) => (
        <div key={index} hidden={slide !== index}>
          <Link
            to={`/haberler/${detail[index].id}`}
            state={{ category: 'turizm', news: detail[index] }}
          >
            <div className='relative h-[500px]'>
              <img className='w-full h-full' src={item.src} alt={item.title} />
              <p className='absolute text-sm p-4 bottom-0 w-full bg-[#bb1818] text-white lg:text-2xl font-bold h-20 overflow-ellipsis'>
                {item.title}
              </p>
              <button
                onClick={handleLeftArrow}
                className='absolute rounded-full w-11 h-11 bg-white bg-opacity-50 flex justify-center 
              items-center top-1/2 left-2 transform -translate-y-1/2 lg:hidden'
              >
                <IconLeft />
              </button>
              <button
                onClick={handleRightArrow}
                className='absolute rounded-full w-11 h-11 bg-white bg-opacity-50 flex justify-center 
              items-center top-1/2 right-2 transform -translate-y-1/2 lg:hidden'
              >
                <IconRight />
              </button>
            </div>
          </Link>
          <div className='bg-white py-3 px-2 flex justify-between shadow-md'>
            {slides.map((item, index) => (
              <button
                className={`hidden w-11 h-11 transition-colors  rounded-full font-bold border border-gray 
                hover:bg-[#bb1818] hover:text-white lg:block ${
                  slide === index
                    ? 'bg-[#bb1818] text-white'
                    : 'bg-white text-[#022032]'
                }`}
                key={index}
                onMouseEnter={() => setSlide(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Carousel;
