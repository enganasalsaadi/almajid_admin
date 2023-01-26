/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import Product from "../components/app/Product";
import { getProducsRequest } from "../store/product/actions";
import { ProductContext } from "../context/ProductContext";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const DashboardPage = () => {
  const dispatch = useDispatch();
  const context = useContext(ProductContext);

  const { productList, productSelected,isLoadingActionAddProduct,errorAddProduct } = useSelector(
    (state: any) => state.product
  );

  useEffect(() => {
    dispatch(getProducsRequest());
  }, []);

  const onChangeValue = (event: any) => {
    let product = productSelected;
    product[event.target.name] = event.target.value;
    context?.setProductToEditAction(product);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form
          onSubmit={(event) => {
            if (productSelected.product_id > 0) {
              context?.editProduct(event);
            } else {
              context?.addProduct(event);
            }
          }}
          style={{
            width: "88%",
          }}
        >
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Product Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={productSelected ? productSelected.title : ""}
              onChange={onChangeValue}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Priice </Form.Label>
            <Form.Control
              type="text"
              name="price"
              value={productSelected ? productSelected.price : ""}
              onChange={onChangeValue}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Product Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="description"
              value={productSelected ? productSelected.description : ""}
              onChange={onChangeValue}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            {isLoadingActionAddProduct?'loading':'Save'}
          </Button>
          <p>{errorAddProduct?errorAddProduct:''}</p>
          
        </Form>

        <Row style={{ margin: "5%" }}>
          {productList.map((item: any, id: React.Key | null | undefined) => (
            <Product key={id} item={item} />
          ))}
        </Row>
      </header>
    </div>
  );
};

export default DashboardPage;
