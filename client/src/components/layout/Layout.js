import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="content" style={{minHeight : "80vh", background : ""}}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout; 