import { Outlet } from 'react-router-dom';
import './styles.css';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import NavBarCategoryLane from './NavBarCategoryLane';
import NavBarInfoLane from './NavBarInfoLane';
import NavBarWeatherLane from './NavBarWeatherLane';
import { useCategory } from '../../../contexts/InfoContext';

const Header = () => {
  const { category } = useCategory();
  const categories = {
    Ekonomi: 'Ekonomi',
    Yasam: 'Yaşam',
    Astroloji: 'Astroloji',
    Spor: 'Spor',
    Otomobil: 'Otomobil',
    Sanat: 'Sanat',
    Turkiye: 'Türkiye',
    Saglik: 'Sağlık',
    Teknoloji: 'Teknoloji',
    Magazin: 'Magazin',
    Turizm: 'Turizm',
    Egitim: 'Eğitim',
    Dunya: 'Dünya',
    Anasayfa: 'ANA SAYFA',
  };

  return (
    <>
      {/* Header */}
      <nav>
        {/* NavBar ilk alan: logo ve Hava durumu */}
        <NavBarWeatherLane />
        {/* NavBar ikinci alan: driwer menu ve kategoriler */}
        <NavBarCategoryLane categories={categories} />
        {/* NavBar ikinci alan: Ana sayfaysa NavBar kırmızı çizgi ve bulunduğu kategori başlığı başlık değilse sadece bulunduğu kategori başlığı */}
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
