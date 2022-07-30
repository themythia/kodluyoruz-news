const ListItem = ({ index }) => {
  return (
    <div
      className={`${
        index !== 4 && 'border-b border-b-[#E1E1E1]'
      } py-2 md:py-2.5`}
    >
      <p className={`font-bold text-14-20 text-textDark h-10`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
    </div>
  );
};
export default ListItem;
