const NotFound = () => {
  return (
    <div className='w-full p-16  bg-slate-200'>
      <div className='font-bold text-center text-20-28'>404</div>
      <p className='font-medium text-center p-16 text-20-28 text-gray-600'>
        Malesef, istediğiniz sayfa mevcut değil. Eski bir bağlantıyı izlemiş
        olabilirsiniz veya bir URL’yi yanlış yazmış olabilirsiniz. Bunun bir
        hata olduğunu düşünüyorsanız, lütfen bize bildirin.
      </p>
    </div>
  );
};

export default NotFound;
