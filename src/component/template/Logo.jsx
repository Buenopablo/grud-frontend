import React from "react";
import "./Logo.css";
import logo from "../../assets/imgs/logo.png";
import { Link } from "react-router-dom";
// "http://files.cod3r.com.br/curso-web/logo.png"
export default (props) => (
  <aside className="logo">
    <Link to="/" className="logo">
      <img src={logo} alt="logo" />
    </Link>
  </aside>
);
