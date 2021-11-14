import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { LINKS } from "../COSTANTS";
import Sidebar from "./Sidebar";

const Wrapper = styled.section`
  display: flex;
  border-bottom: 1px solid black;
  align-items: center;
  position: relative;
  .logo {
    flex: 1;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }
  .logo h1 {
    margin: 0;
    padding: 0.5rem;
  }
  .links {
    display: flex;
    justify-content: center;
    flex: 2;
  }
  .links a {
    padding: 0.5rem 1rem;
  }
  .links a:hover {
    background-color: lightgrey;
  }
  .buttons {
    display: flex;
    justify-self: flex-end;
    padding: 0 1rem;
    width: auto;
  }
  .buttons .btn {
    color: red;
    background-color: transparent;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 1.5rem;
  }
  .buttons .btn {
    transition: all 0.2s ease-in-out;
    padding: 0.2rem;
  }
  .buttons .btn:hover {
    background-color: lightgray;
    cursor: pointer;
  }
  .header-content {
      justify-content: flex-end;
    background-color: white;
    flex-direction: row;
  }
  @media (min-width: 991px) {
    .logo {
      flex: 0;
    }
  }
`;
export default function Navbar() {
  const isDesktop = window.matchMedia("(min-width: 991px)").matches;

  return (
    <Wrapper>
      <div className="logo">
        <h1>
          <Link to="/">Shop</Link>
        </h1>
      </div>
      <div className="header-content" style={{ flex: 1, display: "flex" }}>
        {isDesktop && (
          <div className="links">
            {LINKS.map((link) => {
              return <Link to={link.href}>{link.name}</Link>;
            })}
          </div>
        )}
        <div className="buttons">
          <div className="btn">&#9825;</div>
          <div className="btn">&#9825;</div>
          <div className="btn">&#9825;</div>
        </div>
      </div>
      {!isDesktop && (
        <Sidebar>
          {LINKS.map((link) => {
            return <Link to={link.href}>{link.name}</Link>;
          })}
        </Sidebar>
      )}
    </Wrapper>
  );
}
