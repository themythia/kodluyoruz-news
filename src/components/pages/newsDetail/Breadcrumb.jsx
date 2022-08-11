import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({ type, newsTitle }) => {
  const navigate = useNavigate();
  const categories = {
    ekonomi: {
      path: '/ekonomi',
      str: 'Ekonomi Haberleri',
    },
    ntvpara: {
      path: '/ekonomi',
      str: 'Ekonomi Haberleri',
    },
    spor: {
      path: '/spor',
      str: 'Spor Haberleri',
    },
    sporskor: {
      path: '/spor',
      str: 'Spor Haberleri',
    },
    teknoloji: {
      path: '/teknoloji',
      str: 'Teknoloji Haberleri',
    },
    sanat: {
      path: '/sanat',
      str: 'Sanat Haberleri',
    },
    turizm: {
      path: '/turizm',
      str: 'Turizm Haberleri',
    },
    magazin: {
      path: '/magazin',
      str: 'Magazin Haberleri',
    },
    'n-life': {
      path: '/magazin',
      str: 'Magazin Haberleri',
    },
  };
  return (
    <div className='text-xs font-bold  flex flex-row my-[14px] md:my-[15px] lg:my-4 justify-center'>
      <div className='flex flex-row px-2.5 lg:px-0 w-full lg:w-[1000px]'>
        <p className='line-clamp-1'>
          <span
            className='text-[#909090] hover:text-textDark duration-200 cursor-pointer'
            onClick={() => navigate('/')}
          >
            Haberler
          </span>
          {categories.hasOwnProperty(type) && (
            <span
              className='ml-1 text-[#909090] hover:text-textDark duration-200 cursor-pointer'
              onClick={() => navigate(categories?.[type]?.path || '/')}
            >{`/ ${categories?.[type]?.str || `${type} Haberleri`}`}</span>
          )}
          <span className='ml-1 text-textDark cursor-pointer'>{`/ ${newsTitle}`}</span>
        </p>
      </div>
    </div>
  );
};
export default Breadcrumb;
