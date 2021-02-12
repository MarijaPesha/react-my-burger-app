import { takeEvery } from "redux-saga/effects";

import * as actionsTypes from "../actions/actionsTypes";
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from "./auth";


export function* watchAuth() {
    yield takeEvery(actionsTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionsTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionsTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionsTypes.AUTH_CHECK_STATE, authCheckStateSaga)
}