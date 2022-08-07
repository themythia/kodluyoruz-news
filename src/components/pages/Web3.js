import { parseFeed } from 'htmlparser2';
import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../shared/Footer';
import Header from '../shared/Header/Header';

const Web3 = () => {
  return (
    <>
      <Header name={'Web3'} />
      Ana Sayfa
      <Footer />
      <Outlet />
    </>
  );
};

export default Web3;
