import {React, useEffect, useState } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './pages/Login/Login.js';
import Home from './pages/Home/Home.js'


const Routes = () => {
    

    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login}/>
                <Route exact path='/home'> <Home></Home></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;