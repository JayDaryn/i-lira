import React from 'react';

import Header from '../partials/Header';
import HeroHome from '../partials/HeroHome';
import Features from '../partials/Features';
import ELIRA from '../partials/ELIRA';
import Newsletter from '../partials/Newsletter';
import Footer from '../partials/Footer';

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