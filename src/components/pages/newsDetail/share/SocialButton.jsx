import { ImTwitter, ImFacebook, ImWhatsapp } from 'react-icons/im';
import { FaFlipboard } from 'react-icons/fa';

const SocialButton = ({ type, link }) => {
  const iconType = {
    twitter: {
      bg: 'bg-twitter',
      icon: ImTwitter,
      shareLink: 'https://twitter.com/intent/tweet?url=',
    },
    facebook: {
      bg: 'bg-facebook',
      icon: ImFacebook,
      shareLink: 'https://www.facebook.com/sharer/sharer.php?u=',
    },
    whatsapp: {
      bg: 'bg-whatsapp',
      icon: ImWhatsapp,
      shareLink: 'https://api.whatsapp.com/send?text=',
    },
    flipboard: {
      bg: 'bg-flipboard',
      icon: FaFlipboard,
      shareLink: 'https://share.flipboard.com/bookmarklet/popout?v=2&url=',
    },
  };

  const Icon = iconType[type].icon;

  return (
    <a
      href={iconType[type].shareLink + link}
      target='_blank'
      rel='noreferrer'
      className={`w-7 h-7 md:w-5 md:h-5 lg:w-6 lg:h-6 rounded-full flex items-center justify-center ${iconType[type].bg}`}
    >
      <Icon className={type === 'flipboard' && 'rounded-full'} />
    </a>
  );
};
export default SocialButton;
