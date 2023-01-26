import { LOGIN_USER_REQUEST, LOGIN_USER_RESET, SET_USER } from "../actionTypes";
import { LoginPayload, LoginRequest } from "./types";
import { User } from "../../@types/user";


export  const loginRequest = (payload: LoginPayload): LoginRequest => ({
    type: LOGIN_USER_REQUEST,
    payload,
  });

  export const loginReset = () => ({
    type: LOGIN_USER_RESET,
  });

  export const setUser = (payload:User) => ({
    type: SET_USER,
    payload,
  });

 
