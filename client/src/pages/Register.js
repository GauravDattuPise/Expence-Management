
import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";
import "../styles/RegisterPage.css";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  //form submit
  const submitHandler = async (values) => {
    try {

      // sending values to backend from form
      setLoading(true);
      await axios.post("/api/v1/users/register", values);

      message.success("Registeration Successfull");

      // on successfull registration sending to login page
      setLoading(false);
      navigate("/login");

    } catch (error) {
      setLoading(false);
      message.error("something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>

      {/* if loading is true show spinner */}
      <div className="register-page ">
        {loading && <Spinner />}

        <Form className="register-form" layout="vertical" onFinish={submitHandler} >

          <h2>Register Form</h2>

          {/* name input */}
          <Form.Item label="Name" name="name">
            <Input type="text" required />
          </Form.Item>

          {/* email input */}
          <Form.Item label="Email" name="email">
            <Input type="email" required />
          </Form.Item>

          {/* password input */}
          <Form.Item label="Password" name="password">
            <Input type="password" required />
          </Form.Item>

          {/* register button */}
          <div className="d-flex justify-content-between">
            <Link to="/login">Already Register? login here!</Link>
            <button className="btn ">Register</button>
          </div>

        </Form>
      </div>
    </>
  );
};

export default Register; 