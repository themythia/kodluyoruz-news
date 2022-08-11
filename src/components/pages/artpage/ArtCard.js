import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ArtCard = (props) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const data = props?.content?.description;

    const src = data.split('src="')[1].split('"')[0];

    setImageSrc(src);
  }, []);

  return (
    <Link
      to={`/news/${props.detail.id}`}
      state={{ category: props.detail.category, news: props.detail }}
    >
      <div className='shadow-md mt-2'>
        <img
          width='100%'
          className='h-[16.5625rem] object-cover'
          src={imageSrc}
          alt={props?.content?.title}
        />
        <div className='p-3 bg-[#bb1919] h-24'>
          <h2 className='text-[#FFF] font-bold'>{props?.content?.title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ArtCard;
