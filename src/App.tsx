import React from 'react';
import logo from './logo.svg';
// import './App.css';
import { useLocation, Switch } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion'
import { renderRoutes } from 'react-router-config';
import { ROUTE } from 'config/index.config'

function App() {
  // use location
  const location = useLocation() 

  return (
    // <AnimatePresence exitBeforeEnter initial={false}>
      <Switch location={location}>
        {renderRoutes([ROUTE])}
      </Switch>
    // </AnimatePresence>
  );
}

export default App;
