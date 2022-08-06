import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Art from '../components/pages/Art';
import NotFound from './pages/NotFound';
import Otomobil from './pages/Otomobil';

function App() {
  return (
    <div className='App'>
      <Routes>
        
        <Route path='/' index element={<Otomobil />} />
        <Route path='/art' element={<Art />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
