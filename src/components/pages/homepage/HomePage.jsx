import BreakingNews from './breaking/BreakingNews';
import Carousel from './carousel/Carousel';
import Container from './Container';
import InnerContainer from './InnerContainer';
import NewsCard from './newsCardCarousel/NewsCard';

const HomePage = () => {
  return (
    <Container>
      <BreakingNews />
      <InnerContainer>
        <Carousel />
        <NewsCard />
      </InnerContainer>
    </Container>
  );
};
export default HomePage;
