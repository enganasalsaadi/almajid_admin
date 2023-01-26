import {
  LOADING,
  SUCCESS,
  FAILURE,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_SUCCESS,
  GET_PRODUCTS_LIST_FAIL,
  GET_PRODUCTS_LIST_RESET,
  SET_PRODUCT_TO_EDIT,
} from "../actionTypes";
import { addProductActions, ProductStatus } from "./types";
import {
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_RESET,
} from "../actionTypes";

const INITIAL_STATE: ProductStatus = {
  isLoadingActionAddProduct: false,
  statusAddProduct: "",
  errorAddProduct: "",
  productList: [],
  productSelected:{
    product_id:0,
    title:'',
    description:'',
    price:0,
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  state = INITIAL_STATE,
  { type, payload }: addProductActions
) => {
  switch (type) {
    case ADD_PRODUCT_LOADING:
      return {
        ...state,
        isLoadingActionAddProduct: true,
        statusAddProduct: LOADING,
        errorAddProduct: null,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoadingActionAddProduct: false,
        statusAddProduct: SUCCESS,
        errorAddProduct: null,
        userDetails: payload.data,
      };
    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        isLoadingActionAddProduct: false,
        statusAddProduct: FAILURE,
        errorAddProduct: payload.error,
      };

    case ADD_PRODUCT_RESET:
      return {
        ...state,
        isLoadingActionAddProduct: false,
        statusAddProduct: "",
        errorAddProduct: null,
      };

    case GET_PRODUCTS_LIST_LOADING:
      return {
        ...state,
        isLoadingActionAddProduct: true,
        statusAddProduct: LOADING,
        errorAddProduct: null,
      };

    case GET_PRODUCTS_LIST_SUCCESS:
      return {
        ...state,
        isLoadingActionAddProduct: false,
        statusAddProduct: SUCCESS,
        errorAddProduct: null,
        productList: payload.data,
      };
    case GET_PRODUCTS_LIST_FAIL:
      return {
        ...state,
        isLoadingActionAddProduct: false,
        statusAddProduct: FAILURE,
        errorAddProduct: payload.error,
      };

    case GET_PRODUCTS_LIST_RESET:
      return {
        ...state,
        isLoadingActionAddProduct: false,
        statusAddProduct: "",
        errorAddProduct: null,
      };
      case SET_PRODUCT_TO_EDIT:
        console.log(payload)
        return {
          ...state,
          productSelected:payload
        };
      
    default:
      return state;
  }
};
