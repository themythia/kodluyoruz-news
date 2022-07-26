import { createContext, useEffect, useState } from 'react';
import fetchHome from '../utils/api/fetchHome';

export const HomeContext = createContext();

const HomeContextWrapper = ({ children }) => {
  const [news, setNews] = useState({});
  const [tech, setTech] = useState({});
  const [world, setWorld] = useState({});
  const [turkey, setTurkey] = useState({});

  useEffect(() => {
    fetchHome().then((data) => {
      setNews(data.breaking);
      setTech(data.tech);
      setWorld(data.world);
      setTurkey(data.turkey);
    });
  }, []);

  return (
    <HomeContext.Provider value={{ news, tech, world, turkey }}>
      {children}
    </HomeContext.Provider>
  );
};

export default HomeContextWrapper;
