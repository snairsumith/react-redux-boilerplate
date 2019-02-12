import { createAction } from 'redux-actions';

export const LOGIN_REQUEST ="LOGIN_REQUEST"
export const adminlogin=createAction(LOGIN_REQUEST);

export const LOGIN_REQUEST_SUCCESS="LOGIN_REQUEST_SUCCESS"
export const loginsucess=createAction(LOGIN_REQUEST_SUCCESS);

export const LOGIN_REQUEST_FAIL="LOGIN_REQUEST_FAIL"
export const loginfail=createAction(LOGIN_REQUEST_FAIL);
