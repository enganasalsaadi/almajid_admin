/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect } from "react";
import Row from "react-bootstrap/Row"; 
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getUsersRequest } from "../store/user/actions";
import User from "../components/app/User";

const UsersPage = () => {
  const dispatch = useDispatch();
  const { usersList } = useSelector(
    (state: any) => state.user
  );
  useEffect(() => {
    dispatch(getUsersRequest());
  }, []);
  return (
    <div className="App"> 
      
      <Row style={{ margin: "5%" }}>
          {usersList.map((item: any, id: React.Key | null | undefined) => (
            <User key={id} item={item} />
          ))}
        </Row>
    </div>
  );
};

export default UsersPage;
