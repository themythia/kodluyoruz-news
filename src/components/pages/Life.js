import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Life = () => {
  return (
    <>
      <Link to='details'>
        Yaşam Sayfası
        <Outlet />
      </Link>
    </>
  );
};

export default Life;
