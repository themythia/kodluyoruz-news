import '../index.css';
import { Routes, Route } from 'react-router-dom';
import Art from '../components/pages/Art';
import Homepage from '../components/pages/Homepage';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' index element={<Homepage />} />
        <Route path='/art' element={<Art />} />
      </Routes>
    </div>
  );
}

export default App;
