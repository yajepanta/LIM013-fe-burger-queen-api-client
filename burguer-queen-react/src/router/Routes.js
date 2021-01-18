import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login/Login.js';
import Home from '../pages/Home/Home.js'
import ChefDelivering from '../pages/ChefDelivering/ChefDelivering.js';
import ChefPending from '../pages/ChefPending/ChefPending.js';

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/home' component={Home}/> 
                <Route exact path='/pending' component={ChefPending}/> 
                <Route exact path='/delivering' component={ChefDelivering}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
