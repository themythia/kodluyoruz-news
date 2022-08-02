import ListItem from './ListItem';

const List = ({ news }) => {
  return (
    <div className='flex flex-col w-full h-auto px-5 py-[15px]'>
      {[...Array(5)].map((_, index) => (
        <ListItem
          key={index}
          index={index}
          text={news?.[index + 1]?.title}
          link={news?.[index + 1]?.link}
        />
      ))}
    </div>
  );
};
export default List;
