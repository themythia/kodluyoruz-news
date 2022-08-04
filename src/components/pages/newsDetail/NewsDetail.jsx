import { useLocation } from 'react-router-dom';
import Container from './Container';
import News from './News';

const NewsDetail = () => {
  const location = useLocation();

  return (
    <Container>
      <News news={location.state.news} />
      <div className='w-full basis-1/3'></div>
    </Container>
  );
};
export default NewsDetail;
