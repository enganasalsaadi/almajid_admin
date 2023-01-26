import { fork } from "redux-saga/effects";
import authSagas from "./auth/sagas";

import productSagas from "./product/sagas";
import userSagas from "./user/sagas";

export default function* root() {
  yield fork(authSagas);
  yield fork(productSagas);
  yield fork(userSagas);
}
