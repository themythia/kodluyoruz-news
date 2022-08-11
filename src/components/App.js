import '../index.css';
import Astrology from './pages/Astroloji/Astrology';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tourism from './pages/tourism/Tourism';
import Art from '../components/pages/artpage/Art';
import NotFound from './pages/NotFound';
import HomePage from './pages/homepage/HomePage';
import Economy from './pages/economy/Economy';
import NewsDetail from './pages/newsDetail/NewsDetail';
import Technology from './pages/technology/Technology';
import Sport from './pages/sport/Sport';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/turizm' element={<Tourism />} />
        <Route path='/ekonomi' index element={<Economy />} />
        <Route path='/haberler/:newsId' element={<NewsDetail />} />
        <Route path='/sanat' element={<Art />} />
        <Route path='/teknoloji' element={<Technology />} />
        <Route path='/spor' element={<Sport />} />
        <Route path='/magazin' element={<Astrology />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
