import BreakingNews from './breaking/BreakingNews';
import Carousel from './carousel/Carousel';
import Container from './Container';
import InnerContainer from './InnerContainer';

const HomePage = () => {
  return (
    <Container>
      <BreakingNews />
      <InnerContainer>
        <Carousel />
      </InnerContainer>
    </Container>
  );
};
export default HomePage;
