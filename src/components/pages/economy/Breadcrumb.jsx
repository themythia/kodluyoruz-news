import { useNavigate } from 'react-router-dom';

const Breadcrumb = () => {
  const navigate = useNavigate();
  return (
    <div className='text-xs font-bold  flex flex-row mt-[14px] md:mt-[15px] lg:mt-4 mb-[4px] md:mb-[5px] lg:mb-[6px] justify-center'>
      <div className='flex flex-row px-2.5 lg:px-0 w-full lg:w-[1000px]'>
        <p
          className='text-[#909090] hover:text-textDark duration-200 cursor-pointer'
          onClick={() => navigate('/')}
        >
          Haberler
        </p>
        <p
          className='ml-1 text-textDark cursor-pointer'
          onClick={() => navigate('/ekonomi')}
        >
          / Ekonomi Haberleri
        </p>
      </div>
    </div>
  );
};
export default Breadcrumb;
