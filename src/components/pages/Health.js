import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Health = () => {
  return (
    <>
      <Link to='details'>
        Yaşam
        <Outlet />
      </Link>
    </>
  );
};

export default Health;
