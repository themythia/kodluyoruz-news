import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Art from '../components/pages/artpage/Art';
import NotFound from './pages/NotFound';
import HomePage from './pages/homepage/HomePage';

import Home from './pages/Home';
import Life from './pages/Life';
import EconomyDetails from './pages/details/EconomyDetails';
import Economy from './pages/Economy';
import LifeDetails from './pages/details/LifeDetails';
import Page404 from './pages/Page404';
import Technology from './pages/Technology';
import TechnologyDetails from './pages/details/TechnologyDetails';
import Astrology from './pages/Astrology';
import AstrologyDetails from './pages/details/AstrologyDetails';
import Web3 from './pages/Web3';
import Web3Details from './pages/details/Web3Details';
import Sport from './pages/Sport';
import SportDetails from './pages/details/SportDetails';
import Health from './pages/Health';
import HealthDetails from './pages/details/HealthDetails';
import Tourism from './pages/tourism/Tourism';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/economy'>
        <Route index={true} element={<Economy />} />
        <Route path='details' element={<EconomyDetails />} />
      </Route>
      <Route path='/life'>
        <Route index={true} element={<Life />} />
        <Route path='details' element={<LifeDetails />} />
      </Route>
      <Route path='/technology'>
        <Route index={true} element={<Technology />} />
        <Route path='details' element={<TechnologyDetails />} />
      </Route>
      <Route path='/astrology'>
        <Route index={true} element={<Astrology />} />
        <Route path='details' element={<AstrologyDetails />} />
      </Route>
      <Route path='/web3'>
        <Route index={true} element={<Web3 />} />
        <Route path='details' element={<Web3Details />} />
      </Route>
      <Route path='/sport'>
        <Route index={true} element={<Sport />} />
        <Route path='details' element={<SportDetails />} />
      </Route>
      <Route path='/health'>
        <Route index={true} element={<Health />} />
        <Route path='details' element={<HealthDetails />} />
      </Route>
      <Route path='*' element={<Page404 />} />
      <Route path='/turizm'>
        <Route index={true} element={<Tourism />} />
        <Route path='details' element={<HealthDetails />} />
      </Route>
      <Route path='/art'>
        <Route index={true} element={<Tourism />} />
        <Route path='details' element={<HealthDetails />} />
      </Route>
    </Routes>
  );
}

export default App;
