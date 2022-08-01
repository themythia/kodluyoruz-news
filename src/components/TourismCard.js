import { useEffect, useState } from 'react';

const TourismCard = (props) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const data = props?.content?.description;

    console.log(
      'data ---------------------------------------------------------',
      data
    );

    const src = data.split('src="')[1].split('"')[0];

    setImageSrc(src);
  }, []);

  return (
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
  );
};

export default TourismCard;
