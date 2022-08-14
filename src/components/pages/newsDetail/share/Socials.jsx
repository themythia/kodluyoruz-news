import SocialButton from './SocialButton';
import Text from './Text';

const Socials = ({ link }) => {
  return (
    <div className='flex flex-row items-center h-9 lg:h-full gap-x-4 md:gap-x-2'>
      <Text text='Paylaş' />
      <div className='flex flex-row text-white gap-x-4 md:gap-x-2'>
        <SocialButton link={link} type='twitter' />
        <SocialButton link={link} type='facebook' />
        <SocialButton link={link} type='whatsapp' />
        <SocialButton link={link} type='flipboard' />
      </div>
    </div>
  );
};
export default Socials;
