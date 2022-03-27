import React from 'react';

function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div style={{backgroundColor:'#3671E9'}} className="relative bg-gray-900 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#fff" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Stay Up To Date</h3>
                <p className="text-gray-300 text-lg mb-6">Join the  E-LIRA community  to get the latest news and start your journey to financial freedom today.</p>
                <div>
                  <a className="btn rounded-full text-black bg-gray-100 hover:bg-gray-200 w-full sm:w-auto sm:mb-0" href="https://t.me/i_lira" target="_blank"><svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path transform="scale(0.2)" fill-rule="evenodd" clip-rule="evenodd" d="M10.335 50.6277C49.836 34.1163 76.1762 23.231 89.3556 17.9718C126.985 2.95554 134.804 0.347062 139.901 0.260928C141.022 0.241984 143.528 0.508502 145.152 1.77235C146.522 2.83952 146.9 4.28112 147.08 5.29291C147.26 6.30471 147.485 8.60961 147.307 10.4106C145.267 30.9667 136.444 80.8508 131.955 103.874C130.056 113.616 126.316 116.882 122.695 117.202C114.826 117.897 108.851 112.213 101.23 107.42C89.304 99.9197 82.5667 95.2508 70.9907 87.932C57.6126 79.4739 66.285 74.8252 73.9092 67.2278C75.9044 65.2396 110.574 34.9847 111.245 32.2401C111.329 31.8968 111.407 30.6173 110.615 29.9417C109.823 29.2661 108.653 29.4971 107.809 29.6809C106.613 29.9413 87.5617 42.0226 50.6547 65.9246C45.247 69.4873 40.3488 71.2231 35.9602 71.1321C31.1222 71.0318 21.8157 68.5076 14.8973 66.35C6.41163 63.7036 -0.332631 62.3045 0.254643 57.81C0.560532 55.4691 3.92065 53.075 10.335 50.6277Z" fill="url(#paint0_linear_226_1088)"/>
                    <defs>
                    <linearGradient id="paint0_linear_226_1088" x1="144.933" y1="1.04001" x2="68.3056" y2="87.9249" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#2AABEE"/>
                    <stop offset="1" stop-color="#229ED9"/>
                    </linearGradient>
                    </defs>
                    </svg>
                    &nbsp;&nbsp;Join Telegram Group
                  </a>
                </div>
                <p className="mt-5 text-gray-300 text-lg">Subscribe To Our Newsletter:</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-md lg:mx-0">
                    <input type="email" className="w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email" aria-label="Your email…" />
                    <a className="btn text-white bg-gray-600 hover:bg-gray-700 shadow" href="#0">Subscribe</a>
                  </div>
                </form>
                
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
