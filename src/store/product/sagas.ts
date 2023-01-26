import { takeLatest, call, put } from "redux-saga/effects";
import { ADD_PRODUCT_REQUEST, GET_PRODUCTS_LIST_REQUEST, GET_PRODUCTS_LIST_LOADING, GET_PRODUCTS_LIST_FAIL, GET_PRODUCTS_LIST_SUCCESS, EDIT_PRODUCT_REQUEST, EDIT_PRODUCT_LOADING, EDIT_PRODUCT_SUCCESS, EDIT_PRODUCT_FAIL, REMOVE_PRODUCT_REQUEST, REMOVE_PRODUCT_LOADING, REMOVE_PRODUCT_SUCCESS, REMOVE_PRODUCT_FAIL } from '../actionTypes';
import { requestAction } from "../../api";
import {
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
} from "../actionTypes";

function* addProductAction(action: any): any {
  try {
    yield put({ type: ADD_PRODUCT_LOADING });

    var requestConfig = {
      type: "post",
      url: `products/add`,
      payload: action.payload.values,
    };
    const response = yield call(requestAction, requestConfig);
 
    if (response.status === 200) {

        action.payload.callback()
      yield put({
        type: ADD_PRODUCT_SUCCESS,
        payload: { data: response.data },
      });
    } else {
      yield put({
        type: ADD_PRODUCT_FAIL,
        payload: {
          error: response.meta.message,
        },
      });
    }
  } catch (error: any) {

    yield put({
      type: ADD_PRODUCT_FAIL,
      payload: {
        data: "Something wrong try again",
      },
    });
  }
}


function* editProductAction(action: any): any {
  try {
    yield put({ type: EDIT_PRODUCT_LOADING });

    var requestConfig = {
      type: "post",
      url: `products/edit`,
      payload: action.payload.values,
    };
    const response = yield call(requestAction, requestConfig);
 
    if (response.status === 200) {

        action.payload.callback()
      yield put({
        type: EDIT_PRODUCT_SUCCESS,
        payload: { data: response.data },
      });
    } else {
      yield put({
        type: EDIT_PRODUCT_FAIL,
        payload: {
          error: response.meta.message,
        },
      });
    }
  } catch (error: any) {

    yield put({
      type: EDIT_PRODUCT_FAIL,
      payload: {
        data: "Something wrong try again",
      },
    });
  }
}

function* removeProductAction(action: any): any {
  try {
    yield put({ type: REMOVE_PRODUCT_LOADING });

    var requestConfig = {
      type: "post",
      url: `products/remove`,
      payload: action.payload,
    };
    const response = yield call(requestAction, requestConfig);
 
    if (response.status === 200) {
 
      yield put({
        type: REMOVE_PRODUCT_SUCCESS,
        payload: { data: response.data },
      });
      yield put({
        type: GET_PRODUCTS_LIST_REQUEST,
        payload: {},
      });
      
    } else {
      yield put({
        type: REMOVE_PRODUCT_FAIL,
        payload: {
          error: response.meta.message,
        },
      });
    }
  } catch (error: any) {

    yield put({
      type: REMOVE_PRODUCT_FAIL,
      payload: {
        data: "Something wrong try again",
      },
    });
  }
}



function* getProductAction(action: any): any {
 
    try {
      yield put({ type: GET_PRODUCTS_LIST_LOADING });

      var requestConfig = {
        type: "get",
        url: `products/all`,
      };
      const response = yield call(requestAction, requestConfig);
   
  
      if (response.status === 200) {

        yield put({
          type: GET_PRODUCTS_LIST_SUCCESS,
          payload: { data: response.data },
        });
      } else {
        yield put({
          type: GET_PRODUCTS_LIST_FAIL,
          payload: {
            error: response.meta.message,
          },
        });
      }
    } catch (error: any) {
      yield put({
        type: GET_PRODUCTS_LIST_FAIL,
        payload: {
          data: "Something wrong try again",
        },
      });
    }
  }

export default function* watcherSaga() {
  yield takeLatest(GET_PRODUCTS_LIST_REQUEST, getProductAction);
  yield takeLatest(ADD_PRODUCT_REQUEST, addProductAction);

  yield takeLatest(EDIT_PRODUCT_REQUEST, editProductAction);
  yield takeLatest(REMOVE_PRODUCT_REQUEST, removeProductAction);

  
  
}
