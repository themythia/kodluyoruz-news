const NewsCardImage = ({ image, alt }) => {
  return (
    <div className='w-full aspect-4/3 md:w-full md:h-auto lg:aspect-auto lg:h-[182px]'>
      <img src={image} alt={alt} className='h-full w-full object-cover' />
    </div>
  );
};
export default NewsCardImage;
