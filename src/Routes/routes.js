import React from 'react'
import { Route, Router, IndexRoute, browserHistory } from 'react-router';


import Main from '../Components/Layout/main'
import Login from '../Components/Login/index'
import HomeIndex from '../Components/Home/index'



export default (
    <Router history={browserHistory}>
        <Route path="/" component={Main} history={browserHistory}>
            <IndexRoute component={Login} />
            <Route path="/login" component={Login}> </Route>
            <Route path="/home" component={HomeIndex}> </Route>
           
            
           
        </Route>
       
    </Router>
);