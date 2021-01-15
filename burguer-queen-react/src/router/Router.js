import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from '../pages/Login/Login.js';
import Home from '../pages/Home/Home.js'
import ChefPending from '../pages/ChefPending/ChefPending.js'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/home' component={Home}/> 
                <Route exact path='/chefPending' component={ChefPending}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
