import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/LoginPage.css";

const Login = () => {

  const img = "https://images.unsplash.com/photo-1593538312308-d4c29d8dc7f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //form submit
  const submitHandler = async (values) => {
    try {

      // sending data to backend
      setLoading(true);
      const { data } = await axios.post("/api/v1/users/login", values);
      setLoading(false);

      message.success("login success");

      // setting data in localstorage
      localStorage.setItem("user", JSON.stringify({ ...data.user, password: "" }));
      navigate("/");
    }
    catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  // if user alredy logged in then it will sent to home page
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      {/* if loading is true it will show spinner */}
      <div className="login-page">
        {loading && <Spinner />}
        <div className="row container">

          <h1>Expense Managment System - MERN STACK</h1>

          {/* login image is here */}
          <div className="col-md-6">
            <img src={img} alt="login-img" width={"100%"} height="100%" />
          </div>

          <div className="col-md-4 login-form">

            <Form layout="vertical" onFinish={submitHandler}>
              <h1>Login Form</h1>

              {/* email input */}
              <Form.Item label="Email" name="email">
                <Input type="email" required />
              </Form.Item>

              {/* password input */}
              <Form.Item label="Password" name="password">
                <Input type="password" required />
              </Form.Item>

              {/* login button */}
              <div className="d-flex justify-content-between">
                <Link to="/register">
                  Not a user ? Click Here to regsiter !
                </Link>
                <button className="btn">Login</button>
              </div>

            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;