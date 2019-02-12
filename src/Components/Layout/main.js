import React, { Component } from "react";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { browserHistory } from "react-router";

import reducers from '../../Reducers/index'
import sagas from '../../Sagas'

import TopNavigation from './topnav'
import SidebarNavigation from './sidebarnav'
import Footer from './footer'

// //Setup Saga Middleware
const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger, thunk))
sagaMiddleware.run(sagas)
store.subscribe(() => {
    console.log('store updated', store.getState())
})


export default class Main extends Component {

    render() {
        return (
            //  begin #pvr-container 
            <Provider store={store}>
            
                <div className="container">
                
                    {/* check if user logined or not  */}
                    {
                        sessionStorage.getItem('token') != null ?

                            <div>
                                <TopNavigation />
                                <SidebarNavigation location={this.props.location} history={this.props.history} />
                            </div>
                            : ''

                    }
                    {
                        this.props.location.pathname == "/" ?
                        this.props.children :
                        <div id="container">
                            {this.props.children}
                        </div>

                    }
                    <Footer/>
                </div>
            </Provider>
        )
    }
}