import EconContextWrapper from '../../../contexts/EconContext';
import Container from '../homepage/Container';
import InnerContainer from '../homepage/InnerContainer';
import Carousel from '../homepage/carousel/Carousel';
import CurrencyContainer from './currency/CurrencyContainer';
import NewsCardContainer from '../homepage/NewsCard/NewsCardContainer';
import TitleBar from './TitleBar';

const Economy = () => {
  return (
    <EconContextWrapper>
      <Container>
        <TitleBar />
        <InnerContainer>
          <Carousel type='econ' />
          <CurrencyContainer />
          <NewsCardContainer type='econ' size={30} />
        </InnerContainer>
      </Container>
    </EconContextWrapper>
  );
};
export default Economy;
