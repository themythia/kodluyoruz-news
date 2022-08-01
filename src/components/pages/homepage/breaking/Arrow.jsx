import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from 'react-icons/io';

const Arrow = ({ type, handleArrows }) => {
  return (
    <>
      {type === 'next' ? (
        <IoIosArrowDropdownCircle
          size={20}
          onClick={() => handleArrows('next')}
          className='cursor-pointer'
        />
      ) : (
        <IoIosArrowDropupCircle
          size={20}
          onClick={() => handleArrows('prev')}
          className='cursor-pointer'
        />
      )}
    </>
  );
};
export default Arrow;
