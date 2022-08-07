import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header/Header';

const Health = () => {
  return (
    <>
      <Header name={'Health'} />
      <Link to='details'>
        Yaşam
        <Outlet />
      </Link>
      <Footer />
    </>
  );
};

export default Health;
