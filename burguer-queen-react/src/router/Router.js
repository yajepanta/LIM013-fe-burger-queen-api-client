import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login/Login.js';
import Home from '../pages/Home/Home.js'
import Card from '../pages/commons/Card/components/Card.js'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/home' component={Home}/> 
                <Route exact path='/card' component={Card}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
