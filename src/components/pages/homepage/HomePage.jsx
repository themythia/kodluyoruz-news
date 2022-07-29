import BreakingNews from './breaking/BreakingNews';
import Carousel from './carousel/Carousel';
import Container from './Container';
import InnerContainer from './InnerContainer';
import NewsCardCarousel from './newsCardCarousel/NewsCardCarousel';

const HomePage = () => {
  return (
    <Container>
      <BreakingNews />
      <InnerContainer>
        <Carousel />
        <NewsCardCarousel />
      </InnerContainer>
    </Container>
  );
};
export default HomePage;
