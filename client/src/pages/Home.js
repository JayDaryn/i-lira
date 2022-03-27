import React from 'react';

import Header from '../components/Header';
import HeroHome from '../components/HeroHome';
import Features from '../components/Features';
import ELIRA from '../components/ELIRA';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow" style={{backgroundColor:'#0D0D2B'}}>

        {/*  Page sections */}
        <HeroHome />
        <ELIRA />
        <Features />
        <Newsletter />

      </main>

      {/*  Site footer */}
      <Footer />

    </div>
  );
}

export default Home;