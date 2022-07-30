import ListItem from './ListItem';

const List = () => {
  return (
    <div className='flex flex-col w-full h-auto px-5 py-[15px]'>
      {[...Array(5)].map((_, index) => (
        <ListItem key={index} index={index} />
      ))}
    </div>
  );
};
export default List;
