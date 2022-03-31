import React, { useEffect, useContext } from 'react';
import { GlobalState } from './GlobalState';
import { Switch, Route, useLocation } from 'react-router-dom';
import Loading from 'react-fullscreen-loading';

import './css/style.scss';

import AOS from 'aos';
import { focusHandling } from 'cruip-js-toolkit';

import Home from './pages/Home'
import Dashboard from './pages/Dasboard'

function Routes() {

  const location = useLocation();
  const {
    account,
    restoringSession
  } = useContext(GlobalState)

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });
  });

  useEffect(() => {
    document.querySelector('html').style.scrollBehavior = 'auto'
    window.scroll({ top: 0 })
    document.querySelector('html').style.scrollBehavior = ''
    focusHandling('outline');
  }, [location.pathname]); // triggered on route change

  return (
    <>
    <Loading loading={restoringSession} background="#0D0D2B" loaderColor="#3498db" />
      <Switch>
        {!account
          ? (
            <>
              <Route exact path="/">
                <Home />
              </Route>
            </>
          )
          : (
            <>
              <Route path="/">
                <Dashboard />
              </Route>
            </>
          )
        }
        
      </Switch>
    </>
  );
}

export default Routes;
