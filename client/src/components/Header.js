import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalState } from '../GlobalState';

function Header() {
  const {
    connectWallet
  } = useContext(GlobalState)

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);  

  return (
    <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-gray-200 blur shadow-lg'}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link to="/" className={`block flex text-gray-100 items-center font-bold ${!top && 'text-gray-900'}`} aria-label="Cruip">
            <img className="mr-3" src={require('../images/logo.png').default} width='50' height="50" alt="I-Lira Logo" />I-LIRA
            </Link>
          </div>

          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {/* <li>
                <Link to="/signin" className="font-medium text-gray-500 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Whitepaper</Link>
              </li> */}
              <li>
                <button onClick={connectWallet}  className="btn-sm text-white bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Connect Wallet</span>
                                   
                </button>
              </li>
            </ul>

          </nav>

        </div>
      </div>
    </header>
  );
}

export default Header;
