import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './Routes/routes';



ReactDOM.render(
   
        <Router history={browserHistory}>{routes}</Router>,
            document.getElementById('root')
    
);