import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Art from '../components/pages/art/Art';
import Tourism from './pages/tourism/Tourism';
import NotFound from './pages/NotFound';
import HomePage from './pages/homepage/HomePage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/sanat' element={<Art />} />
        <Route path='/turizm' element={<Tourism />} />
        <Route path='/' index element={<HomePage />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
