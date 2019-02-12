import React, {Component} from "react"
import {connect} from "react-redux"
import {browserHistory} from "react-router";

import {LoginAction} from '../../Actions/index'

import LaddaButton, {XS, ZOOM_OUT} from 'react-ladda';
import {toastr} from 'react-redux-toastr'

import './login.css'

class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            loading: false
        }
        
       
        this.handleChange = this
            .handleChange
            .bind(this)
        this.login = this
            .login
            .bind(this)
    }
    //bind textbox values in state
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //login function
    login = () => {
        console.log("login started");
        this
            .props
            .adminlogin({username: this.state.username, password: this.state.password});
        this.setState({loading: true})
    }
    
    componentWillReceiveProps(nextProps) {

        if (nextProps.isLogin) {
            sessionStorage.setItem('token', '1213')
            browserHistory.push({pathname: '/home'})
        }else{
            toastr.error('Error', 'Incorrect username or password')
            this.setState({loading: false})
            
        }

    }
    render() {
        return (
            <div className="row">
                                            
            <div className="col-lg-12">
                <h5 className="title f-s-20 f-w-500">Sign in to your Account</h5>
                <div className="form-group">
                    <div className="form-line-pvr">
                        <input
                            type="text"
                            onChange={this.handleChange}
                            name="username"
                            className="form-control"
                            placeholder="Username"/>
                    </div>
                </div>
                <div className="form-group-pvr form-float m-b-10">
                    <div className="form-line-pvr">
                        <input
                            type="password"
                            onChange={this.handleChange}
                            name="password"
                            className="form-control"
                            placeholder="Password"/>
                    </div>
                </div>

            </div>
            <div className="col-lg-12 m-t-10">
                
                <LaddaButton
                    loading={this.state.loading}
                    onClick={() => this.login()}
                    data-color="#eee"
                    data-size={XS}
                    data-style={ZOOM_OUT}
                    data-spinner-size={20}
                    data-spinner-color="#ddd"
                    data-spinner-lines={12}
                    className="btn btn-success ladda-button btn-wd m-r-5 m-b-5">
                   SignIn
                </LaddaButton>
            </div>
           
        </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        loginResponse: state.login.loginResponse, 
        loginStatus: state.login.loginStatus, 
        token: state.login.token, 
        resultCode: state.login.resultCode, 
        isLogin: state.login.isLogin
    }
}
export default connect(mapStateToProps, {
    ...LoginAction
})(Login)