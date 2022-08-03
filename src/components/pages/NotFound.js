const NotFound = () => {
  return (
    <div className='absolute w-full h-screen bg-slate-200'>
      <div className='mt-20'>
        <div className='font-bold text-center text-20-28'>404</div>
        <p className='font-medium text-center p-16 text-20-28 text-gray-600'>
          Malesef, istediğiniz sayfa mevcut değil. Eski bir bağlantıyı izlemiş
          olabilirsiniz veya bir URL’yi yanlış yazmış olabilirsiniz. Bunun bir
          hata olduğunu düşünüyorsanız, lütfen bize bildirin.
        </p>
      </div>
    </div>
  );
};

export default NotFound;
