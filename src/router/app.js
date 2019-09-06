import "@babel/polyfill";
var ReactDOM = require("react-dom");
import React, { Component } from 'react';
import {Router,Route} from 'dva/router';
import "../styles/app.scss";
import Weather from '../page/weather';
import Counter from '../page/counter';
import Home from '../page/home';
import dva, { connect } from 'dva';


import weatherModel from '@/models/weather'
import counterModel from '@/models/counter'
const app = dva();
app.model(weatherModel);
app.model(counterModel);
// 4. Router

app.router(({history})=>(
    <Router history={history}>
        <>
            <Route path="/" exact={true} component={Home}/>
            <Route path="/counter" component={Counter}/>
            <Route path="/weather" component={Weather}/>
        </>
    </Router>
));
// 5. Start
app.start('#root');