import EconContextWrapper from '../../../contexts/EconContext';
import Container from '../homepage/Container';
import InnerContainer from '../homepage/InnerContainer';
import Breadcrumb from './Breadcrumb';
import Carousel from './carousel/Carousel';
import CurrencyContainer from './currency/CurrencyContainer';
import TitleBar from './TitleBar';

const Economy = () => {
  return (
    <EconContextWrapper>
      <Container>
        <TitleBar />
        <Breadcrumb />
        <InnerContainer>
          <Carousel />
          <CurrencyContainer />
        </InnerContainer>
      </Container>
    </EconContextWrapper>
  );
};
export default Economy;
