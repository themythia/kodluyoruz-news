import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Art from '../components/pages/Art';
import NotFound from './pages/NotFound';
import HomePage from './pages/homepage/HomePage';
import Economy from './pages/economy/Economy';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/economy' index element={<Economy />} />
        <Route path='/art' element={<Art />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
