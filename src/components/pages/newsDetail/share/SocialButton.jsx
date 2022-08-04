import { ImTwitter, ImFacebook, ImWhatsapp } from 'react-icons/im';
import { FaFlipboard } from 'react-icons/fa';

const SocialButton = ({ type }) => {
  const background = {
    twitter: 'bg-twitter',
    facebook: 'bg-facebook',
    whatsapp: 'bg-whatsapp',
    flipboard: 'bg-flipboard',
  };
  const icon = {
    twitter: ImTwitter,
    facebook: ImFacebook,
    whatsapp: ImWhatsapp,
    flipboard: FaFlipboard,
  };

  const Icon = icon[type];

  return (
    <button
      className={`w-7 h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center ${background[type]}`}
    >
      <Icon className={type === 'flipboard' && 'rounded-full'} />
    </button>
  );
};
export default SocialButton;
