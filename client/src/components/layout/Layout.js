import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {

  // wrapping header & footer inside layout
  return (
    <>
      <Header />
      <div className="content" style={{minHeight : "80vh", backgroundColor : "rgba(215, 147, 147, 0.304)"}}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout; 