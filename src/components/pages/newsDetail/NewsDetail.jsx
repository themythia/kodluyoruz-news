import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Container from './Container';
import News from './News';

const NewsDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log('location', location);
  // if data doesnt exist, redirect to homepage
  useEffect(() => {
    if (!location.state) navigate('/');
  }, [location.state, navigate]);

  if (!location.state) return null;

  return (
    <Container>
      <News news={location.state.news} category={location.state.category} />
    </Container>
  );
};
export default NewsDetail;
