import SocialButton from './SocialButton';
import Text from './Text';

const Socials = () => {
  return (
    <div className='flex flex-row items-center h-9 lg:h-full gap-x-4 md:gap-x-2'>
      <Text text='Paylaş' />
      <div className='flex flex-row text-white gap-x-4 md:gap-x-2'>
        <SocialButton type='twitter' />
        <SocialButton type='facebook' />
        <SocialButton type='whatsapp' />
        <SocialButton type='flipboard' />
      </div>
    </div>
  );
};
export default Socials;
