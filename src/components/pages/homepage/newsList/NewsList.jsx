import Container from './Container';
import List from './List';
import NewsListImage from './NewsListImage';
import NewsListTitle from './NewsListTitle';

const NewsList = ({ type }) => {
  return (
    <Container>
      <NewsListTitle type={type} />
      <NewsListImage />
      <List />
    </Container>
  );
};
export default NewsList;
