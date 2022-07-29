const CarouselimageText = ({ text, index }) => {
  return (
    <div className='mx-4 flex flex-col items-center justify-center relative z-10 bottom-24 text-white font-black leading-[34px] text-20-34'>
      <span className='py-[6px] px-2 bg-textRed line-clamp-2 text-center'>
        {`LOREM IPSUM DOLOR IPSUM LOREMLOREM LOREM: ${index}`}
      </span>
    </div>
  );
};
export default CarouselimageText;
