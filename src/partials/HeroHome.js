import React, { useState } from 'react';
import Modal from '../utils/Modal';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
    <section className="relative">
      <div className="absolute right-40 top-0 pointer-events-none hidden lg:block" aria-hidden="true">
      <svg width="928" height="606" viewBox="0 0 928 606" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="60" y="605.863" width="120" height="1002.26" transform="rotate(-120 60 605.863)" fill="url(#paint0_linear_1_1289)"/>
        <defs>
        <linearGradient id="paint0_linear_1_1289" x1="132.423" y1="610.168" x2="119.891" y2="1608.12" gradientUnits="userSpaceOnUse">
        <stop stop-color="white" stop-opacity="0"/>
        <stop offset="0.387874" stop-color="white" stop-opacity="0.04"/>
        <stop offset="1" stop-color="white" stop-opacity="0"/>
        </linearGradient>
        </defs>
      </svg>

      </div>

{/* Section header */}
      <div className="pt-32 lg:flex lg:justify-between">
          <div className="px-5 lg:px-28 pt-10 flex-1" >
            <h1 className="text-5xl font-extrabold leading-tighter tracking-tighter text-white" data-aos="zoom-y-out">
              I-LIRA STAKES 
              
            </h1>
            <h1 className="text-5xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" data-aos="zoom-y-out" data-aos-delay="50">40% APY</h1>
            <div>
              <p className="text-xl text-white mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                E-LIRA is liquidtating locked funds that the lebanese people desperatly need.
              </p>
              
              <div className=" max-w-xs mx-auto sm:max-w-none sm:flex sm:flex-wrap" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="mt-5 btn rounded-full text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mb-0" href="#0"> STAKE <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
                  </a>
                </div>
                <div>
                  <a className="mt-5 btn rounded-full text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">BUY <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
                  </a>
                </div>
                <div>
                  
                  <button className="mt-5 btn rounded-full text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" onClick={(e) => { e.preventDefault(); e.stopPropagation(); setVideoModalOpen(true); }} aria-controls="modal">
                    <svg className="w-6 h-6 fill-current text-gray-400 group-hover:text-blue-600 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0 2C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z" />
                  <path d="M10 17l6-5-6-5z" />
                </svg> &nbsp;Learn More  
                  </button>
                </div>
              </div>

              
            </div>
          
          </div>

          <div className="px-5 lg:px-28 flex-1">
            <img className="mx-auto" src={require('../images/hero-image.png').default} width='100%' alt="Hero" />
          </div>

      </div>

 {/*Section Infoblocks */}       
      <div className="mt-10 lg:flex lg:justify-between text-white" >
        <div className="p-5 lg:p-20 flex-1 flex">
          <img className='w-8 h-8 mr-2' src={require('../images/IconGraph.png').default} alt="icon" />
          <div>
            <h1 className="text-3xl font-extrabold leading-tighter pb-5">40% APY</h1>
            <p>By locking any amount of I-LIRA you choose for any period of time (between 1 and 5,555 days),you “stake” your deposit and gain interest every single day. </p>
          </div>
        </div>
        <div className="p-5 lg:p-20 flex-1 flex">
        <img className='w-8 h-8 mr-2' src={require('../images/IconPerson.png').default} alt="icon" />
          <div>
            <h1 className="text-3xl font-extrabold leading-tighter pb-5">75%  Staked</h1>
            <p>75% Of Hodlers are Staked for an avg 6 months per stake . Staking i-lira is like having free mining hardware that  earns you a passive income while allowing you to create a long-term plan for financial freedom. </p>
          </div>
        </div>
        <div className="p-5 lg:p-20 flex-1 flex">
        <img className='w-8 h-8 mr-2' src={require('../images/IconGlobe.png').default} alt="icon" />
          <div>
            <h1 className="text-3xl font-extrabold leading-tighter pb-5">Globaly Accepted</h1>
            <p>Can be exchanged globaly on multiple exchanges.</p>
          </div>
        </div>
      </div>
{/* Section Why */}
      <div className="lg:flex lg:justify-between">
        <div className="p-5 lg:p-20 flex-1">
          <img className="mx-auto" src={require('../images/WhyImg.png').default} width='100%' alt="Hero" />
        </div>
        <div className="p-5 lg:p-20 flex-1" >
          <h1 className="text-4xl font-extrabold leading-tighter tracking-tighter text-white" data-aos="zoom-y-out">
          Why you should choose E-LIRA &amp; I-LIRA
          </h1>
          <div>
            <p className="text-white mt-8" data-aos="zoom-y-out" data-aos-delay="150">
            The Future Of Investing Is Here.
            The tokenomics of the I-LIRA is similar to a certificate of deposit where collateralized funds held in frozen banks accounts are transferred in an escrow-style format  THROUGH E-LIRA CASH that allows for a conversion of frozen funds to be transferred into the form of an Binance Smart Chain blockchain token called the I-LIRA. I-LIRA works to provide a replacement option for those seeking to diversify their holdings into blockchain cryptocurrency and re-secure their assets in the form of I-LIRA. The E-LIRA is advantageous to the Lebanese people, and outside investors, because of it’s high interest staking platform options with the I-LIRA. It is estimated that 100 Billion dollars of funds are locked in Lebanese accounts, creating an opportunity for freedom, liberation, and financial independence through the tokenized E-LIRA transfer opportunity.
            </p>
            
          </div>
        </div>
      </div>
 {/* Modal */}
      <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
        <div className="relative pb-9/16">
          <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
        </div>
      </Modal>
    </section>
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-2/3 md:mt-24 lg:mt-0 bg-gray-100 pointer-events-none" aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="mx-auto text-center">
            <h2 className="h3 mb-5 text-white">Check how much passive income you can earn by staking I-LIRA</h2>
            <p className="text-xl text-gray-600 mb-5 mx-auto max-w-lg">Let’s check  today’s  share  price  to see how much you will earn if you stake  today</p>
          </div>

          <div>
            <div className="relative p-6 bg-white rounded shadow-xl">
              
              <input className='w-full m-2 border border-indigo-100 border-b-indigo-500' type='number' placeholder='Enter Your Investment Amount'/>
              <input className='w-full m-2 border border-indigo-100 border-b-indigo-500' type='number' placeholder={"Today's Raw-Share Price"}/>
              <div>
                  <a className="mt-5 btn rounded-full text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="#0"> Calculate <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
                  </a>
                </div>
            </div>

           

          </div>

        </div>
      </div>
    </section>
    </>
  );
}

export default HeroHome;