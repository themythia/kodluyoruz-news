import Title from './Title';
import Container from './Container';
import List from './List';

const Currency = ({ type }) => {
  const title =
    type === 'currency' ? 'DÖVİZ' : type === 'crypto' ? 'KRİPTO PARA' : '';
  return (
    <Container>
      <Title text={title} />
      <List type={type} />
    </Container>
  );
};
export default Currency;
