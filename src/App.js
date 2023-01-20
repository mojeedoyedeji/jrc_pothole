import React, {useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';

import logo from './logo.svg';
import history from './history';
import './App.css';
import { useDispatch, useSelector, useStore } from "react-redux";
import { Backdrop, Button, CircularProgress} from '@mui/material';
import {globalStyles} from './styles/global.js';
//Account


import Notify from './components/page/Notify';
import Home from './screens/main/Home';
import Default from './screens/main/Default';
import Detector from './screens/main/Detector';
import {THEME} from './styles/theme.js'

import Mobile from './Mobile';
import Web from './Web';




function App() {
  const loading = useSelector(state => state.app.loading);
  const dispatch = useDispatch();

  useEffect(() => {
  }, []);
  
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={THEME}>    
       <Router history={history}> 
       
           <Notify />
           <Mobile />
           <Web />
           
         
       
         </Router>
       </ThemeProvider>
       </StyledEngineProvider>
  );
}

export default App;
