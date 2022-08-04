import '../index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Art from '../components/pages/Art';
import NotFound from './pages/NotFound';
import HomePage from './pages/homepage/HomePage';
import Economy from './pages/economy/Economy';
import NewsDetail from './pages/newsDetail/NewsDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' index element={<HomePage />} />
        <Route path='/economy' index element={<Economy />} />
        <Route path='/art' element={<Art />} />
        <Route path='/news/:newsId' element={<NewsDetail />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
