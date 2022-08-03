import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Economy = () => {
  return (
    <>
      <Header name={'Economy'} />
      <Link to='details'>
        Ekonomi
        <Outlet />
      </Link>
      <Footer />
    </>
  );
};
export default Economy;
