import Astrology from './pages/Astroloji/Astrology';
import { Routes, Route, React } from 'react-router-dom';
import Life from './pages/Life';
import Technology from './pages/technology/Technology';
import Sport from './pages/sport/Sport';
import Health from './pages/Health';
import Tourism from './pages/tourism/Tourism';
import Art from './pages/artpage/Art';
import NotFound from './pages/NotFound';
import HomePage from './pages/homepage/HomePage';
import Economy from './pages/economy/Economy';
import NewsDetail from './pages/newsDetail/NewsDetail';
import Footer from './shared/Footer';
import Header from './shared/Header/Header';
import Turkey from './pages/turkey/Turkey';

const NewsRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* <Route path='/' index element={<HomePage />} />*/}
        <Route path='/' index element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/news/:newsId' element={<NewsDetail />} />
        <Route path='/Ekonomi' index element={<Economy />} />
        <Route path='/Yasam' element={<Life />} />
        <Route path='/Magazin' element={<Astrology />} />
        <Route path='/Spor' element={<Sport />} />
        {/* Otomobil sayfası */}
        <Route path='/Sanat' element={<Art />} />
        <Route path='/Turkiye' element={<Turkey />} />
        <Route path='/Saglik' element={<Health />} />
        <Route path='/Turizm' element={<Tourism />} />
        <Route path='/Teknoloji' element={<Technology />} />
      </Routes>
      <Footer />
    </>
  );
};

export default NewsRouter;

// Sağlık: 'Sağlık',
// Astroloji: 'Astroloji',
// Spor: 'Spor',
// Otomobil: 'Otomobil',
// Sanat: 'Sanat',
// Türkiye: 'Türkiye',
// Yaşam: 'Yaşam',
// Teknoloji: 'Teknoloji',
// Magazin: 'Magazin',
// Turizm: 'Turizm',
// Eğitim: 'Eğitim',
// Dünya: 'Dünya',
// Anasayfa: 'ANA SAYFA',
