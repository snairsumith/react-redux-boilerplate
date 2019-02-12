import React, { Component } from "react";
import { browserHistory } from "react-router";

export default class TopNavigation extends Component {


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
                <h1>Top Bar</h1>

                <li>
                    <a onClick={() => this.logout()}>
                        Logout
                                    </a>
                </li>
            </div>



        )
    }
}