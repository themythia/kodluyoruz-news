import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Astrology = () => {
  return (
    <>
      <Header name={'Astrology'} />
      <Link to='details'>
        Astroloji
        <Outlet />
      </Link>
      <Footer />
    </>
  );
};

export default Astrology;
