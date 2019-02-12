import {LoginAction} from '../Actions'

const intialState = {
    loginResponse:null,
    loginStatus: 0,
    token: '',
    resultCode: 0,
    isLogin: false
};

export default function (state = intialState, action) {
    switch (action.type) {
        case LoginAction.LOGIN_REQUEST:
            return {
                ...state
            }
        case LoginAction.LOGIN_REQUEST_SUCCESS:
            return {
                loginStatus: 1,
                resultCode: 1,
                isLogin: true,
                loginResponse:action.payload,
                token:action.payload.accessToken,
                state
            }
        case LoginAction.LOGIN_REQUEST_FAIL:
            return {
                loginStatus: 2,
                resultCode: 0,
                isLogin: false,
                state
            }
        default:
            return {
                ...state
            }
    }
}