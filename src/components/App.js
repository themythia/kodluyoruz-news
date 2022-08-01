import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Art from '../components/pages/Art';
import Tourism from '../components/pages/Tourism';
import Homepage from '../components/pages/Homepage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Homepage />} />
        <Route path='/Sanat' element={<Art />} />
        <Route path='/Turizm' element={<Tourism />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
