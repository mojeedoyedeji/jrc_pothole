import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";



import Notify from './components/page/Notify';
import Home from './screens/mobile/Home';
import Def from './screens/mobile/Default';
import Detector from './screens/mobile/Detector';
import {THEME} from './styles/theme.js'



const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }

export default function Main(){
    return(
        <Mobile>
            <Switch>
             <Route exact path="/" component={Detector} />
             <Route exact path="/default" component={Def} />
             <Route exact path="/detector" component={Detector} />
            </Switch>
        </Mobile>
    )
}
