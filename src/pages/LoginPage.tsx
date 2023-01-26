/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { useDispatch } from "react-redux";
import { loginRequest } from "../store/actions";
import { useSelector } from "react-redux";
import { FAILURE } from "../store/actionTypes";
import { useNavigate } from "react-router-dom";
import { config } from "../api";
const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { statusAuth, errorAuth } = useSelector((state: any) => state.auth);

  const onHandleLogin = (event: any) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email,
      password,
      type: "admin",
    };

    dispatch(
      loginRequest({
        values: data,
        callback: (item: any) => {
          console.log(item.token);
          config.headers.Authorization = "Bearer " + item.token;
          navigate("../dashboard", { replace: true });
        },
      })
    );
  };

  return (
    <div className="App">
      <header className="App-header">
        <Form onSubmit={onHandleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="float-left">Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="float-left">Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        {statusAuth === FAILURE && (
          <Alert variant={"danger"} className="mt-3">
            {errorAuth}
          </Alert>
        )}
      </header>
    </div>
  );
};

export default LoginPage;
