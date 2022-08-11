import { createContext, useContext, useEffect, useState } from 'react';
import { getPosts } from '../services/posts';

const InfoContext = createContext();

const InfoContextWrapper = ({ children }) => {
  const [category, setCategory] = useState('ANA SAYFA');
  const [weathers, setWeathers] = useState();

  useEffect(() => {
    getPosts('weather')?.then((data) => setWeathers(data));
  }, []);
  const state = {
    category,
    setCategory,
    weathers,
  };
  console.log(category,weathers);
  return (
    <InfoContext.Provider value={{ state, weathers }}>
      {children}
    </InfoContext.Provider>
  );
};

export const useCategory = () => useContext(InfoContext);

export default InfoContextWrapper;
