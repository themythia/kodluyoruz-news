import { useContext } from 'react';
import { EconContext } from '../../contexts/EconContext';
import { HomeContext } from '../../contexts/HomeContext';

const useDynamicContext = (type) => {
  const { news } = useContext(type === 'home' ? HomeContext : EconContext);
  return news;
};
export default useDynamicContext;
