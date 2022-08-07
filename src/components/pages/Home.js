import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer';

const Home = () => {
  return (
    <>
      <Header />
      Ana Sayfa
      <Footer />
      <Outlet />
    </>
  );
};

export default Home;
