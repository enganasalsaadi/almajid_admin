import { productItem } from "../../@types/product";
import {
  EDIT_PRODUCT_REQUEST,
  GET_PRODUCTS_LIST_FAIL,
  GET_PRODUCTS_LIST_LOADING,
  GET_PRODUCTS_LIST_RESET,
  GET_PRODUCTS_LIST_SUCCESS,
  SET_PRODUCT_TO_EDIT,
} from "../actionTypes";
import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_RESET,
  GET_PRODUCTS_LIST_REQUEST,
} from "../actionTypes";

export interface ProductStatus {
  isLoadingActionAddProduct: boolean;
  statusAddProduct: string;
  errorAddProduct: string;
  productList: any[] | [];
  productSelected:productItem|null
}
export interface addProductPayload {
  values: { title: string; description: string,price:number };
  callback: any | null;
}
export interface editProductPayload {
  values: {product_id:number, title: string; description: string ,price:number};
  callback: any | null;
}

export interface addProductRequest {
  type: typeof ADD_PRODUCT_REQUEST;
  payload: addProductPayload;
}
export interface editProductRequest {
  type: typeof EDIT_PRODUCT_REQUEST;
  payload: editProductPayload;
}
export interface getProductListRequest {
  type: typeof GET_PRODUCTS_LIST_REQUEST;
}

export interface addProductLoading {
  type: typeof ADD_PRODUCT_LOADING;
  payload: any;
}

export interface AddProductSuccess {
  type: typeof ADD_PRODUCT_SUCCESS;
  payload: any;
}
export interface AddProductFailure {
  type: typeof ADD_PRODUCT_FAIL;
  payload: any;
}

export interface AddProductReset {
  type: typeof ADD_PRODUCT_RESET;
  payload: any;
}

export interface ProductsLoading {
  type: typeof GET_PRODUCTS_LIST_LOADING;
  payload: any;
}

export interface ProductsSuccess {
  type: typeof GET_PRODUCTS_LIST_SUCCESS;
  payload: any;
}
export interface ProductsFailure {
  type: typeof GET_PRODUCTS_LIST_FAIL;
  payload: any;
}

export interface ProductsReset {
  type: typeof GET_PRODUCTS_LIST_RESET;
  payload: any;
}


export interface setProductEdit {
  type: typeof SET_PRODUCT_TO_EDIT;
  payload: any;
}

export type addProductActions =
  | addProductRequest
  | addProductLoading
  | AddProductSuccess
  | AddProductFailure
  | AddProductReset
  | ProductsLoading
  | ProductsSuccess
  | ProductsFailure
  | ProductsReset
  |setProductEdit
