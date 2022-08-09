import '../index.css';
import { Routes, Route } from 'react-router-dom'
import Otomobil from './pages/Otomobil';

function App() {
  return (
    <div className='App'>
      <Routes>
        
        <Route path='/asdasdas' index element={<Otomobil />} />
        <Route path='/' index element={<Otomobil />} />
      
      </Routes>
    </div>
  );
}

export default App;
