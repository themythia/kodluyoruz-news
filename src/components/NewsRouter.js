import Astrology from './pages/Astroloji/Astrology';
import { Routes, Route, React } from 'react-router-dom';
import Life from './pages/life/Life';
import Technology from './pages/technology/Technology';
import Sport from './pages/sport/Sport';
import Health from './pages/health/Health';
import Tourism from './pages/tourism/Tourism';
import Art from './pages/artpage/Art';
import NotFound from './pages/NotFound';
import HomePage from './pages/homepage/HomePage';
import Economy from './pages/economy/Economy';
import NewsDetail from './pages/newsDetail/NewsDetail';
import Footer from './shared/Footer';
import Header from './shared/Header/Header';
import Turkey from './pages/turkey/Turkey';
import Otomobil from './pages/otomobil/Otomobil';

const NewsRouter = () => {
  const socialLinks = {
    twitter: 'https://twitter.com/ntv',
    facebook: 'https://www.facebook.com/NTV',
    instagram: 'https://www.instagram.com/ntv/',
    youtube: 'https://www.youtube.com/ntv',
    flipboard: 'https://flipboard.com/@ntv',
  };
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/haberler/:newsId' element={<NewsDetail />} />
        <Route path='/ekonomi' element={<Economy />} />
        <Route path='/magazin' element={<Astrology />} />
        <Route path='/spor' element={<Sport />} />
        <Route path='/sanat' element={<Art />} />
        <Route path='/turkiye' element={<Turkey />} />
        <Route path='/turizm' element={<Tourism />} />
        <Route path='/teknoloji' element={<Technology />} />{' '}
        <Route path='/otomobil' element={<Otomobil />} />
        <Route path='/yasam' element={<Life />} />
        <Route path='/saglik' element={<Health />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer socialLinks={socialLinks} />
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
