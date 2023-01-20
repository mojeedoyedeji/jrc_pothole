import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {BrowserRouter as Router, Switch, Route, Link, BrowserRouter} from "react-router-dom";



import Notify from './components/page/Notify';
import Home from './screens/main/Home';
import Def from './screens/main/Default';
import Detector from './screens/main/Detector';
import {THEME} from './styles/theme.js'


const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
}

export default function Main(){
    return(
        <Default>
            <Switch>
             <Route exact path="/" component={Detector} />
             <Route exact path="/default" component={Def} />
             <Route exact path="/detector" component={Detector} />
            </Switch>
        </Default>
        
    )
}