import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {

  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();

  // getting user from localstorage & assigning it to loginUser state
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);


  // logout & navigate to login
  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

            {/* expense management */}
            <Link className="navbar-brand" to="/">
              <h3 style={{ color: "rgb(26, 3, 3)" }}>Expense Management</h3>
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

              {/* if user is logged in then showing his name in header */}
              <li className="nav-item">
                {" "}
                <p className="nav-link" id="nameInParagraph" >{loginUser && loginUser.name}</p>{" "}
              </li>

              {/* logout button */}
              <li className="nav-item" style={{ marginTop: "10px", marginRight: "20px" }}>
                <button className="btn btn-primary" onClick={logoutHandler}>
                  Logout
                </button>
              </li>

            </ul>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;