import '../index.css';
import NewsRouter from './NewsRouter';
import InfoContextWrapper from '../contexts/InfoContext';

function App() {
  return (
    <>
      <InfoContextWrapper>
        <NewsRouter />
      </InfoContextWrapper>
    </>
  );
}

export default App;
