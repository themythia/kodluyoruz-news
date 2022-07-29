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
        />
      ) : (
        <IoIosArrowDropupCircle
          size={20}
          onClick={() => handleArrows('prev')}
        />
      )}
    </>
  );
};
export default Arrow;
