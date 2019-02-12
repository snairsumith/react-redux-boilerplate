import { fork, all } from 'redux-saga/effects';

import loginSagas from './loginSagas'


export default function* sagas() {
    yield all([fork(loginSagas)]);
   
}


