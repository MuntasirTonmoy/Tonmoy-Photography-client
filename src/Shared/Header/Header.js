import React from "react";
import "./Header.css";
import logo from "../../logo.gif";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <nav className="nav-bar">
      <h1 className="logo-text">
        <img src={logo} alt="" /> Tonmoy Photography
      </h1>

      <div className="nav-menu">
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/blog">Blog</CustomLink>
        <CustomLink to="/aboutMe">About Me</CustomLink>
        <CustomLink to="/signIn">SignIn</CustomLink>
        <CustomLink to="/signUp">SignUp</CustomLink>
      </div>
    </nav>
  );
};

export default Header;
