import { Outlet } from 'react-router-dom';
import './styles.css';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import NavBarCategoryLane from './NavBarCategoryLane';
import NavBarInfoLane from './NavBarInfoLane';
import NavBarWeatherLane from './NavBarWeatherLane';

const Header = ({ name = '', weathers = {} }) => {
  const categories = {
    Economy: 'Ekonomi',
    Health: 'Sağlık',
    Astrology: 'Astroloji',
    Sport: 'Spor',
    Car: 'Otomobil',
    Art: 'Sanat',
    Turkey: 'Türkiye',
    Life: 'Yaşam',
    Technology: 'Teknoloji',
    Magazine: 'Magazin',
    Tourism: 'Turizm',
    Education: 'Eğitim',
    World: 'Dünya',
    Extra_1: 'Ekstra 1',
    Extra_2: 'Ekstra 2',
    Extra_3: 'Ekstra 3',
    Extra_4: 'Ekstra 4',
  };

  return (
    <>
      {/* Header */}
      <nav>
        {/* NavBar ilk alan: logo ve Hava durumu */}
        <NavBarWeatherLane weathers={weathers} />
        {/* NavBar ikinci alan: driwer menu ve kategoriler */}
        <NavBarCategoryLane categories={categories} />
        {/* NavBar ikinci alan: Ana sayfaysa NavBar kırmızı çizgi ve bulunduğu kategori başlığı başlık değilse sadece bulunduğu kategori başlığı */}
        <NavBarInfoLane
          categories={categories}
          name={name}
          newsDetail={"İstanbul'da yarım ay manzaraları"}
        />
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
