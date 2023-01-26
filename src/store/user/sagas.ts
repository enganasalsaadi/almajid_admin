import { takeLatest, call, put } from "redux-saga/effects";
import {
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_LOADING,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_FAIL,
} from "../actionTypes";
import { requestAction } from "../../api";
import {
} from "../actionTypes";

function* getUserAction(action: any): any {
  try {
    yield put({ type: GET_USERS_LIST_LOADING });

    var requestConfig = {
      type: "get",
      url: `users/all`,
    };
    const response = yield call(requestAction, requestConfig);

    console.log("response response response users")

    console.log(response)
    if (response.status === 200) {
      yield put({
        type: GET_USERS_LIST_SUCCESS,
        payload: { data: response.data },
      });
    } else {
      yield put({
        type: GET_USERS_LIST_FAIL,
        payload: {
          error: response.meta.message,
        },
      });
    }
  } catch (error: any) {
    yield put({
      type: GET_USERS_LIST_FAIL,
      payload: {
        data: "Something wrong try again",
      },
    });
  }
}

export default function* watcherSaga() {
  yield takeLatest(GET_USERS_LIST_REQUEST, getUserAction);
}
