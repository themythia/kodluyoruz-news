import EconContextWrapper from '../../../contexts/EconContext';
import Container from '../homepage/Container';
import InnerContainer from '../homepage/InnerContainer';
import Breadcrumb from './Breadcrumb';
import Carousel from './carousel/Carousel';
import TitleBar from './TitleBar';

const Economy = () => {
  return (
    <EconContextWrapper>
      <Container>
        <TitleBar />
        <Breadcrumb />
        <InnerContainer>
          <Carousel />
        </InnerContainer>
      </Container>
    </EconContextWrapper>
  );
};
export default Economy;
