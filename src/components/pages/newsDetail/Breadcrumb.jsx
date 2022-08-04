import { useNavigate } from 'react-router-dom';

const Breadcrumb = ({ type, newsTitle }) => {
  console.log('type:', type);
  console.log('newsTitle:', newsTitle);
  const navigate = useNavigate();
  const categories = {
    saglik: {
      path: '/saglik',
      str: 'Sağlık Haberleri',
    },
    yasam: {
      path: '/yasam',
      str: 'Yaşam Haberleri',
    },
    web: {
      path: '/web',
      str: 'Web Haberleri',
    },
    tarih: {
      path: '/tarih',
      str: 'Tarih Haberleri',
    },
    ekonomi: {
      path: '/economy',
      str: 'Ekonomi Haberleri',
    },
    spor: {
      path: '/spor',
      str: 'Spor Haberleri',
    },
    teknoloji: {
      path: '/teknoloji',
      str: 'Teknoloji Haberleri',
    },
    otomobil: {
      path: '/otomobil',
      str: 'Otomobil Haberleri',
    },
    egitim: {
      path: '/egitim',
      str: 'Eğitim Haberleri',
    },
    sanat: {
      path: '/sanat',
      str: 'Sanat Haberleri',
    },
    turizm: {
      path: '/turizm',
      str: 'Turizm Haberleri',
    },
    turkiye: {
      path: '/turkiye',
      str: 'Türkiye Haberleri',
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
          <span
            className='ml-1 text-[#909090] hover:text-textDark duration-200 cursor-pointer'
            onClick={() => navigate(categories[type].path)}
          >{`/ ${categories[type].str}`}</span>
          <span className='ml-1 text-textDark cursor-pointer'>{`/ ${newsTitle}`}</span>
        </p>
      </div>
    </div>
  );
};
export default Breadcrumb;
