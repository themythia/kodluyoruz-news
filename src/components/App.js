import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Art from '../components/pages/artpage/Art';
import NotFound from './pages/NotFound';
import HomePage from './pages/homepage/HomePage';

import Life from './pages/Life';
import EconomyDetails from './pages/details/EconomyDetails';
import Economy from './pages/Economy';
import LifeDetails from './pages/details/LifeDetails';
import Technology from './pages/Technology';
import TechnologyDetails from './pages/details/TechnologyDetails';
import Astrology from './pages/Astrology';
import AstrologyDetails from './pages/details/AstrologyDetails';
import Sport from './pages/Sport';
import SportDetails from './pages/details/SportDetails';
import Health from './pages/Health';
import HealthDetails from './pages/details/HealthDetails';
import Tourism from './pages/tourism/Tourism';
import Turkey from './pages/turkey/Turkey';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/economy'>
        <Route index={true} element={<Economy />} />
        <Route path='details' element={<EconomyDetails />} />
      </Route>
      <Route path='/life'>
        <Route index={true} element={<Life />} />
        <Route path='details' element={<LifeDetails />} />
      </Route>
      <Route path='/astrology'>
        <Route index={true} element={<Astrology />} />
        <Route path='details' element={<AstrologyDetails />} />
      </Route>
      <Route path='/sport'>
        <Route index={true} element={<Sport />} />
        <Route path='details' element={<SportDetails />} />
      </Route>
      {/* Otomobil sayfası */}
      <Route path='/art'>
        <Route index={true} element={<Art />} />
      </Route>
      <Route path='/turkey'>
        <Route index={true} element={<Turkey />} />
        <Route path='details' element={<HealthDetails />} />
      </Route>
      <Route path='/health'>
        <Route index={true} element={<Health />} />
        <Route path='details' element={<HealthDetails />} />
      </Route>
      <Route path='/turizm'>
        <Route index={true} element={<Tourism />} />
        <Route path='details' element={<HealthDetails />} />
      </Route>
      <Route path='/technology'>
        <Route index={true} element={<Technology />} />
        <Route path='details' element={<TechnologyDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
