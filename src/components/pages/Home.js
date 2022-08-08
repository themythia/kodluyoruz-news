import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer';
import { getPosts } from '../../services/posts';

const Home = () => {
  const [weatherList, setWeatherList] = useState({});
  useEffect(() => {
    getPosts('weather')?.then((data) => setWeatherList(data));
  }, []);
  return (
    <>
      <Header weathers={weatherList} />
      Ana Sayfa
      <Footer />
      <Outlet />
    </>
  );
};

export default Home;
