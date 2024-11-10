// pages/index.js
import React from 'react';
import Header from '../components/Header';  // Assuming these components exist
import MainSection from '../components/MainSection';
import Opportunities from '../components/Opportunities';

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />
      <Opportunities />
    </div>
  );
};

export default Home;
