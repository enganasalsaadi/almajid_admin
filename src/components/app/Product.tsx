import React, { FC, useContext } from "react";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { ProductContext } from "../../context/ProductContext";
interface Props {
  item?: any;
}

const Product: FC<Props> = ({ item }) => {
  const context = useContext(ProductContext);
 
  return (
    <>
      <Col>
        <Card className="mb-4 mt-4" style={{ width: "18rem", padding: "10px" }}>
          <Card.Body>
            <Card.Title style={{ color: "black" }}>{item.title}</Card.Title>
            <Card.Text className="mb-2 text-muted">
              {item.description}
            </Card.Text>

            <Card.Title style={{ color: "black" }}>{item.price}$</Card.Title>
            <Button
              variant="success"
              type="button"
              onClick={() => {
                console.log(item)
                context?.setProductToEditAction(item);
             
              }}
            >
              Edit
            </Button>
 
            <Button
              variant="danger"
              type="button"
              onClick={() => {
                console.log(item)
                context?.removeProduct(item);
             
              }}
            >
              Remove
            </Button> 
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Product;
