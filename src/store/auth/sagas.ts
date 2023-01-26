import {takeLatest, call, put} from 'redux-saga/effects';
import {
    LOGIN_USER_FAIL,
    LOGIN_USER_LOADING, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS,
} from '../actionTypes';
import {requestAction} from './../../api';

function* loginAction(action: any):any {
   
    try {
        yield put({type: LOGIN_USER_LOADING});

        var requestConfig = {
            type: 'post',
            url: `auth/login`,
            payload:action.payload.values
        };
       const response= yield call(requestAction, requestConfig);

       console.log(" d d ")
       console.log(response.data)

        if (response.status === 200) {

            localStorage.setItem('token', JSON.stringify(response.data.token));
            localStorage.setItem('user', JSON.stringify(response.data) );
            // replace('')
            action.payload.callback(response.data)
            yield put({type: LOGIN_USER_SUCCESS, payload: {data: response.data}});
        } else  {
            yield put({
                type: LOGIN_USER_FAIL,
                payload: {
                    error: response.meta.message,
                },
            });
        } 
    } catch (error:any) {
        alert(error.message)
        yield put({
            type: LOGIN_USER_FAIL,
            payload: {
                data: "Something wrong try again",
            },
        });
    }
}
 

export default function* watcherSaga() {
    yield takeLatest(LOGIN_USER_REQUEST, loginAction);
}
