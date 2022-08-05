import HomeContextWrapper from '../../../contexts/HomeContext';
import BreakingNews from './breaking/BreakingNews';
import Carousel from './carousel/Carousel';
import Container from './Container';
import InnerContainer from './InnerContainer';
import NewsCardContainer from './NewsCard/NewsCardContainer';
import NewsCardCarousel from './newsCardCarousel/NewsCardCarousel';
import NewsListContainer from './newsList/NewsListContainer';

const HomePage = () => {
  return (
    <HomeContextWrapper>
      <Container>
        <BreakingNews />
        <InnerContainer>
          <NewsCardContainer size={3} />
          <Carousel type='home' />
          <NewsCardCarousel />
          <NewsCardContainer size={6} />
          <NewsListContainer />
        </InnerContainer>
      </Container>
    </HomeContextWrapper>
  );
};
export default HomePage;
