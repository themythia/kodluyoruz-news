import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header/Header';

const Life = () => {
  return (
    <>
      <Header name={'Life'} />
      <Link to='details'>
        Yaşam Sayfası
        <Outlet />
      </Link>
      <Footer />
    </>
  );
};

export default Life;
