import '../index.css';
import { Routes, Route } from 'react-router-dom'
import Otomobil from './pages/Otomobil';
import { createContext, useState } from 'react';

export const ThemeContext = createContext(null)


function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {

    setTheme((current) => (current === 'light' ? 'dark' : 'light' ));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
    <div className='App' id={theme}>
      <Routes>
      
        <Route path='/' index element={<Otomobil />} />
      
      </Routes>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;
