/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions";
import { useNavigate } from "react-router-dom";
import { config } from "../api";

const InitPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const user_ = localStorage.getItem("user");
    if (user_) {
      const prsedUser = JSON.parse(user_);
      console.log(prsedUser);
      dispatch(setUser(prsedUser));
      config.headers.Authorization = "Bearer " + prsedUser.token;
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, []);

  return <></>;
};

export default InitPage;
