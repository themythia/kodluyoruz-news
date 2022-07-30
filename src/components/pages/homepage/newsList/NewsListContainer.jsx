import NewsList from './NewsList';

const NewsListContainer = () => {
  return (
    <div className='gap-x-5 gap-y-2.5 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <NewsList type='tech' />
      <NewsList type='world' />
      <NewsList type='turkiye' />
    </div>
  );
};
export default NewsListContainer;
