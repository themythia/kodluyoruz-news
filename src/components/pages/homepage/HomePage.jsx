import BreakingNews from './breaking/BreakingNews';
import Carousel from './carousel/Carousel';
import Container from './Container';
import InnerContainer from './InnerContainer';
import NewsCardContainer from './NewsCard/NewsCardContainer';
import NewsCardCarousel from './newsCardCarousel/NewsCardCarousel';

const HomePage = () => {
  return (
    <Container>
      <BreakingNews />
      <InnerContainer>
        <NewsCardContainer size={3} />
        <Carousel />
        <NewsCardCarousel />
        <NewsCardContainer size={6} />
      </InnerContainer>
    </Container>
  );
};
export default HomePage;
