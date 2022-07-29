import useWindowSize from '../../../../utils/hooks/useWindowSize';

const Container = ({ children }) => {
  const { width } = useWindowSize();
  return (
    <div className='hidden md:flex md:flex-row w-full left-0 relative md:h-[42px] lg:h-[50px] bg-breakingRed'></div>
  );
};
export default Container;
