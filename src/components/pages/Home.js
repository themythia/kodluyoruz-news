import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const Home = () => {
  return (
    <>
      <Header name={'SON HABERLER'} />
      Ana Sayfa
      <Footer />
      <Outlet />
    </>
  );
};

export default Home;
