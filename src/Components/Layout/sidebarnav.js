import React, {Component} from "react";

import {Link, browserHistory} from 'react-router'

export default class SideBarNav extends Component {
    constructor(props) {
        super(props)

    }
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1? "active": "";
    }

    logout = () => {
        console.log("logout")
        sessionStorage.removeItem('token')
        browserHistory.push({
            pathname: '/',
        })

    }
    render() {
        return (
            <div>
                <h1>Side Bar</h1>
                <Link to="/home">
                                        dashboard
                </Link>
                <Link to="/" onClick={()=>this.logout()} >
                                        
                                    </Link>
                
            </div>
        )
    }
}