import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header/Header';

const Technology = () => {
  return (
    <>
      <Header name={'Technology'} />
      <Link to='details'>
        Teknoloji
        <Outlet />
      </Link>
      <Footer />
    </>
  );
};

export default Technology;
