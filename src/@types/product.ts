
export interface productItem {
  product_id: number;
  title: string;
  description: string;
  price: number;
}

export type ProductContextType = {
  addProduct: (event: any) => void;
  setProductToEditAction: (item: any) => void;
  productSelected: productItem;
  editProduct: (event: any) => void;

  removeProduct: (item: productItem) => void;
};
