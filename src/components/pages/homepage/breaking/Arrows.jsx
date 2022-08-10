import Arrow from './Arrow';

const Arrows = ({ goTo, handleArrows }) => {
  return (
    <div className='flex flex-row items-center justify-center gap-x-[5px] md:pr-[15px] pr-[30px]'>
      <Arrow type='prev' handleArrows={handleArrows} />
      <Arrow type='next' handleArrows={handleArrows} />
    </div>
  );
};
export default Arrows;
