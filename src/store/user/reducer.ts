import {
  LOADING,
  SUCCESS,
  FAILURE,
  GET_USERS_LIST_LOADING,
  GET_USERS_LIST_SUCCESS,
  GET_USERS_LIST_FAIL,
} from "../actionTypes";
import { UserStatus } from "./types";
import { GET_USERS_LIST_RESET } from '../actionTypes';
 

const INITIAL_STATE: UserStatus = {
  isLoadingActionUsers: false,
  statusUsers: "",
  errorUsers: "",
  usersList: [],
 
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = INITIAL_STATE,
  { type, payload }: any
) => {
  switch (type) {
    
    case GET_USERS_LIST_LOADING:
      return {
        ...state,
        isLoadingActionUsers: true,
        statusUsers: LOADING,
        errorUsers: null,
      };

    case GET_USERS_LIST_SUCCESS:
      return {
        ...state,
        isLoadingActionUsers: false,
        statusUsers: SUCCESS,
        errorUsers: null,
        usersList: payload.data,
      };
    case GET_USERS_LIST_FAIL:
      return {
        ...state,
        isLoadingActionUsers: false,
        statusUsers: FAILURE,
        errorUsers: payload.error,
      };

    case GET_USERS_LIST_RESET:
      return {
        ...state,
        isLoadingActionUsers: false,
        statusUsers: "",
        errorUsers: null,
      };
      
    default:
      return state;
  }
};
