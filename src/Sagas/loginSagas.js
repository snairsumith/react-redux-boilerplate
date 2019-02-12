import { takeLatest, fork, all, put, call } from 'redux-saga/effects';
import {LoginAction} from '../Actions';
import {getSample} from '../api'


function* adminlogin(action){
    const loginresponse = yield call(getSample,'login.php');
    const response=loginresponse.response;
    if(loginresponse.resultCode==0){
        yield put(LoginAction.loginfail(response))
    }else{
        yield put(LoginAction.loginsucess(response))
    }
}
export default function* loginSagas(){
    yield all([fork(takeLatest, LoginAction.LOGIN_REQUEST, adminlogin)]);
}