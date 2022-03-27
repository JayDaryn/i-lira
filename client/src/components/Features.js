import React from 'react';
import { Link } from 'react-router-dom';

function Features() {
  
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-52 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="618" viewBox="0 0 1760 618" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
          </g>
        </svg>
      </div>

      <div className=" max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          <div className="mx-auto text-center pb-12 md:pb-16">
            <h1 className="text-3xl font-extrabold leading-tighter tracking-tighter text-white" data-aos="zoom-y-out">
            I-LIRA Monetizes the Time-Value of Money in a Totally New Way.
            </h1>
            <h1 className="text-3xl font-extrabold leading-tighter tracking-tighter mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400" data-aos="zoom-y-out" data-aos-delay="50">With I-LIRA, YOU are the Bank.</h1>
          </div>

          <div className="lg:flex lg:justify-between">
            <div className="p-5 lg:p-20 flex-1" >
              <h1 className="text-4xl font-extrabold leading-tighter tracking-tighter text-white" data-aos="zoom-y-out">
              I-LIRA is the first Lebanese Blockchain CD
              </h1>
              <div>
                <p className="text-white mt-8" data-aos="zoom-y-out" data-aos-delay="150">
                CDs, known as Certificates of Deposit or Time Deposits, are worth Trillions of dollars. CDs are worth more than gold, credit card companies, and cash.
                </p>
                <div>
                  <a href="https://i-lira.notion.site/How-E-LIRA-NFT-Works-In-Lebanon-fe9e6c9a39654cf095d0b745f2cf00f7" target="_blank" rel="noopener noreferrer" className="mt-5 btn rounded-full text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mb-0" > Learn More
                  </a>
                </div>
                
              </div>
            </div>

            <div className="p-5 lg:p-20 flex-1">
              <img className="mx-auto" src={require('../images/Diamond.png').default} width='100%' alt="Hero" />
            </div>
          </div>

          <div className="lg:flex lg:flex-row-reverse lg:justify-between">
            
            <div className="p-5 lg:p-20 flex-1" >
              <h1 className="text-4xl font-extrabold leading-tighter tracking-tighter text-white" data-aos="zoom-y-out">
              Detailed Statistics
              </h1>
              <div>
                <p className="text-white mt-8" data-aos="zoom-y-out" data-aos-delay="150">
                I-LIRA is the first cryptocurrency in the world with a chart of its future locked supply. You can see when big stakes are set to expire in the future and plan around them.
                </p>
                <div>
                  <Link to="/signup" className="mt-5 btn rounded-full text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mb-0" > Visit Dashboard
                  </Link>
                </div>
                
              </div>
            </div>
            <div className="p-5 lg:p-20 flex-1">
              <img className="mx-auto" src={require('../images/Dashboard.png').default} width='100%' alt="Hero" />
            </div>
          </div>

      <div className="lg:flex lg:justify-between">
        <div className="p-5 lg:p-20 flex-1" >
          <h1 className="text-4xl font-extrabold leading-tighter tracking-tighter text-white" data-aos="zoom-y-out">
          Grow your profit and track your investments
          </h1>
          <div>
            <p className="text-white mt-8" data-aos="zoom-y-out" data-aos-delay="150">
            Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments.
            </p>
            <div>
                  <a href="https://i-lira.notion.site/Trading-I-LIRA-1c47b646b72e479b9b6c1e2d205572f5" target="_blank" rel="noopener noreferrer" className="mt-5 btn rounded-full text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mb-0" > Learn More
                  </a>
            </div>
          </div>
        </div>

        <div className="p-5 lg:p-20 flex-1">
          <img className="mx-auto" src={require('../images/Table.png').default} width='100%' alt="Hero" />
        </div>
      </div>


      <div className="lg:flex lg:flex-row-reverse lg:justify-between">
        
        <div className="p-5 lg:p-20 flex-1" >
          <h1 className="text-4xl font-extrabold leading-tighter tracking-tighter text-white" data-aos="zoom-y-out">
          I-LIRA is like free mining hardware 
          </h1>
          <div>
            <p className="text-white mt-8" data-aos="zoom-y-out" data-aos-delay="150">
            I-LIRA Pays stakers instead of miners. Staking I-LIRA is like getting free mining hardware and electricity.Some users try mining to make more cryptocurrency. Instead of sending your money to a foreign mega-corp to buy mining equipment which shows up late, used, or never at all, you can skip the depreciating asset and electricity bills and just stake your coins.
            </p>
            <div>
                  <a href="https://i-lira.notion.site/How-It-Works-Why-b6d979f0b2e0439cb41afa39ceeafebf" target="_blank" rel="noopener noreferrer" className="mt-5 btn rounded-full text-white bg-blue-600 hover:bg-blue-700 w-full sm:w-auto sm:mb-0" > Learn More
                  </a>
            </div>
          </div>
        </div>
        <div className="p-5 lg:p-20 flex-1">
          <img className="mx-auto" src={require('../images/WhyImg.png').default} width='100%' alt="Hero" />
        </div>
      </div>
        </div>
      </div>

      <div className="px-4 sm:px-2 bg-gray-200">
        <div className="max-w-6xl mx-auto my-12 md:py-20">
          <h1 className="max-w-2xl text-2xl font-extrabold leading-tighter tracking-tighter text-black pb-10" data-aos="zoom-y-out">
            OUR ROADMAP  TO DECENTRALIZE THE LEBANESE BANKING - REAL ESTATE -  INSURANCE  &amp; MEDIA SECTORS
          </h1>
          
          <img className="mx-auto" src={require('../images/timeline.png').default} width='100%' alt="Hero" />
          <div className='flex justify-center'>
          <a href="https://i-lira.notion.site/I-LIRA-COIN-E-LIRA-NFT-ec3b2bd98f8e46279c06784c3c3962ff" target="_blank" rel="noopener noreferrer" className="m-3 btn rounded-full text-white bg-blue-600 hover:bg-blue-700" > WhitePaper <svg className="w-3 h-3 fill-current text-white flex-shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg> 
           </a>
        </div>
        </div>
        
    </div>
    </section>
  );
}

export default Features;