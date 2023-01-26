import {
  GET_PRODUCTS_LIST_RESET,
  GET_USERS_LIST_FAIL,
  GET_USERS_LIST_LOADING,
  GET_USERS_LIST_REQUEST,
  GET_USERS_LIST_SUCCESS,
} from "../actionTypes";

export interface UserStatus {
  isLoadingActionUsers: boolean;
  statusUsers: string;
  errorUsers: string;
  usersList: any[] | [];
}

export interface getUsersListRequest {
  type: typeof GET_USERS_LIST_REQUEST;
}

export interface UsersLoading {
  type: typeof GET_USERS_LIST_LOADING;
  payload: any;
}

export interface UsersSuccess {
  type: typeof GET_USERS_LIST_SUCCESS;
  payload: any;
}
export interface UsersFailure {
  type: typeof GET_USERS_LIST_FAIL;
  payload: any;
}

export interface UsersReset {
  type: typeof GET_PRODUCTS_LIST_RESET;
  payload: any;
}

export type addProductActions =
  | getUsersListRequest
  | UsersLoading
  | UsersSuccess
  | UsersFailure
  | UsersReset;
