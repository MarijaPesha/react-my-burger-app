import { takeEvery } from "redux-saga/effects";

import * as actionsTypes from "../actions/actionsTypes";
import { checkAuthTimeout } from "../actions/auth";
import { logoutSaga, checkAuthTimeoutSaga } from "./auth";


export function* watchAuth() {
    yield takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
}