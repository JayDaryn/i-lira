import React from 'react';


function ELIRA() {

  

  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>

      <div className="relative px-4 sm:px-6">
        <div className="pt-5">

          {/* Section header */}
          <div className="mx-auto text-center pb-5 max-w-6xl mx-auto ">
            <h1 className="h2 mb-4">How E-LIRA NFT Works In Lebanon</h1>
            <p className="text-sm text-gray-600">DISCLAIMER : E-LIRA IS NOT A CRYPTOCURRENCY, it is an NFT ART &amp; Represnts real world escrowed funds. Tokenizing these funds allows them to be bought and sold more efficienly in the form of art while reducing the probability of fraud. Non-fungible tokens or NFTs are cryptographic assets on a blockchain with unique identification codes and metadata that distinguish them from each other. Unlike cryptocurrencies, they cannot be traded or exchanged at equivalency.</p>
            
          </div>
          <div className="lg:flex lg:justify-between text-black max-w-6xl mx-auto text-center" >
              <div className="p-5 m-5 bg-white rounded shadow-xl flex-1 flex flex-col items-center" data-aos="zoom-y-out">
                <img src={require('../images/logo.png').default} alt="icon" />
                <h1 className="text-2xl font-extrabold leading-tighter p-5">BUY E-LIRA NFT</h1>
                <p className="text-sm text-gray-600">IN LEBANON YOU CAN BUY E-LIRA NFTs USING ESCROWED FUNDS IN FROZEN BANK ACCOUNTS BY CASHIERS CHEQUE OR USING YOUR LBP CARD </p>
              </div>
              <div className="p-5 m-5 bg-white rounded shadow-xl flex-1 flex flex-col items-center" data-aos="zoom-y-out" data-aos-delay="150">
                <img  src={require('../images/ConvertIcon.png').default} alt="icon" />
                <h1 className="text-2xl font-extrabold leading-tighter p-5">REDEEM TO I-LIRA</h1>
                <p className="text-sm text-gray-600">REDEEM YOUR E-LIRA NFT TO I-LIRA CRYPTOCURRENCY TOKENS </p>
              </div>
              <div className="p-5 m-5 bg-white rounded shadow-xl flex-1 flex flex-col items-center" data-aos="zoom-y-out" data-aos-delay="300">
                <img  src={require('../images/PigIcon.png').default} alt="icon" />
                <h1 className="text-2xl font-extrabold leading-tighter p-5">AUTO-STAKE</h1>
                <p className="text-sm text-gray-600">STAKE AND EARN PASSIVE INCOME ON YOUR INVESTMENTS</p>
              </div>
            </div>

        </div >
      </div >
    </section >
  );
}

export default ELIRA;
