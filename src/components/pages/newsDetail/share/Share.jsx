import GoogleNews from './GoogleNews';
import Socials from './Socials';

const Share = () => {
  return (
    <div className='lg:h-[52px] mt-[15px] w-full flex flex-col md:flex-row  md:justify-between md:items-center gap-y-2'>
      <GoogleNews />
      <Socials />
    </div>
  );
};
export default Share;
