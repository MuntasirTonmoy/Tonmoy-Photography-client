import React, { useState } from "react";
import "./Header.css";
import logo from "../../logo.gif";
import CustomLink from "../CustomLink/CustomLink";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Navbar
        bg="light"
        expand="lg"
        className="w-100 px-lg-5 px-3 py-0 d-flex justify-content-between mb-3 mb-lg-0"
      >
        <Navbar.Brand
          className="d-flex align-items-center gap-3"
          as={Link}
          to="/"
        >
          <img src={logo} style={{ height: "2.5rem" }} alt="" />
          <h1
            className="fs-4 mt-3 font-family"
            style={{ fontFamily: "fantasy" }}
          >
            Tonmoy<p>Photography</p>
          </h1>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-0 ms-lg-auto pe-3 semi-bold text-uppercase">
            <Nav.Link className="me-lg-4 mx-auto" as={CustomLink} to="/">
              Home
            </Nav.Link>
            <Nav.Link className="me-lg-4 mx-auto" as={CustomLink} to="/blog">
              Blog
            </Nav.Link>
            <Nav.Link className="me-lg-4 mx-auto" as={CustomLink} to="/aboutMe">
              About Me
            </Nav.Link>

            <button className="px-5 px-lg-3 my-3 mx-auto my-lg-0 btn outline semi-bold round me-lg-4 text-uppercase bg-gradient">
              Log In
            </button>
            <button className="px-5 px-lg-3 mb-4 mx-auto mb-lg-0 btn me-lg-4  background text-white round text-uppercase bg-gradient">
              Sign Up
            </button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
