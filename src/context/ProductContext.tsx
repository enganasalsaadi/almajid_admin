import React, { createContext, FC, ReactNode } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductContextType, productItem } from "../@types/product";
import { addProductRequest, getProducsRequest } from "../store/actions";
import { EditProductRequest, removeProductRequest, setProductToEdit } from "../store/product/actions";

export const ProductContext = createContext<ProductContextType | null>(null);

type ProductProviderType = {
  children: ReactNode;
};
const ProductProvider: FC<ProductProviderType> = ({ children }) => {
  const dispatch = useDispatch();

  const { productSelected } = useSelector((state: any) => state.product);

  const addProduct = (event: any) => {
    event.preventDefault();

    // let title = event.target.title.value;
    // let description = event.target.description.value;
    // let price = event.target.price.value;

    const data = productSelected;
    dispatch(
      addProductRequest({
        values: data,
        callback: () => {
            dispatch(setProductToEdit({
                product_id:0,
                title:'',
                description:'',
                price:0,
              }));
          dispatch(getProducsRequest());
        },
      })
    );
  };

  const editProduct = (event: any) => {
    event.preventDefault();

    // let title = event.target.title.value;
    // let description = event.target.description.value;
    // let price = event.target.price.value;

    const data = productSelected;
    dispatch(
      EditProductRequest({
        values: data,
        callback: () => {
          dispatch(setProductToEdit({
            product_id:0,
            title:'',
            description:'',
            price:0,
          }));
          dispatch(getProducsRequest());
        },
      })
    );
  };

  const setProductToEditAction = (product: productItem) => {
    dispatch(setProductToEdit(product));
  };

  const removeProduct = (product:productItem) => {

    
    dispatch(removeProductRequest({product_id:product.product_id}));
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        setProductToEditAction,
        productSelected,
        editProduct,
        removeProduct
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
