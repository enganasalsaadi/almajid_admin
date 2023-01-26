import { productItem } from "../../@types/product";
import {
  ADD_PRODUCT_REQUEST,
  EDIT_PRODUCT_REQUEST,
  GET_PRODUCTS_LIST_REQUEST,
  REMOVE_PRODUCT_REQUEST,
  SET_PRODUCT_TO_EDIT,
} from "../actionTypes";
import {
  addProductPayload,
  addProductRequest as AddProductRequest,
  editProductPayload,
  editProductRequest,
  getProductListRequest,
} from "./types";

export const addProductRequest = (
  payload: addProductPayload
): AddProductRequest => ({
  type: ADD_PRODUCT_REQUEST,
  payload,
});

export const EditProductRequest = (
  payload: editProductPayload
): editProductRequest => ({
  type: EDIT_PRODUCT_REQUEST,
  payload,
});

export const removeProductRequest = (payload: any): any => ({
  type: REMOVE_PRODUCT_REQUEST,
  payload,
});

export const getProducsRequest = (): getProductListRequest => ({
  type: GET_PRODUCTS_LIST_REQUEST,
});

export const setProductToEdit = (payload: productItem | null): any => ({
  type: SET_PRODUCT_TO_EDIT,
  payload,
});
