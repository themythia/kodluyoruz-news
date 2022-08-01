import { useContext } from 'react';
import { HomeContext } from '../../../../contexts/HomeContext';
import Container from './Container';
import List from './List';
import NewsListImage from './NewsListImage';
import NewsListTitle from './NewsListTitle';

const NewsList = ({ type }) => {
  const contextData = useContext(HomeContext);

  return (
    <Container>
      <NewsListTitle type={type} />
      <NewsListImage
        image={contextData?.[type]?.items?.[0]?.media}
        alt={contextData?.[type]?.items?.[0]?.title}
      />
      <List news={contextData?.[type]?.items} />
    </Container>
  );
};
export default NewsList;
