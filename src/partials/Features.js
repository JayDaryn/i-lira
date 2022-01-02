import React from 'react';

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
        </div>
    </div>
    </section>
  );
}

export default Features;