import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  :hover {
    cursor: pointer;
  }
  .header {
    height: 3rem;
    display: flex;
    justify-content: space-between;
    margin: 0 1rem;
    padding: 0 0.4rem;
    align-items: center;
  }

  .header h1 {
    margin: 1rem 0;
  }
  .burger-btn {
    margin-right: 1rem;
  }

  .burger-btn div {
    width: 1.5em;
    height: 5px;
    background-color: black;
    margin: 0.2rem;
  }
  .menu-items {
    display: flex;
    flex-direction: column;
    position: absolute;
    left: 0;
    top: 0;
    background-color: white;
    border-right: 1px solid black;
    height: 100vh;
    overflow: auto;
    width: 100%;
    z-index: 1111111;
  }
  .menu-items.show {
  }
  a {
    padding: 1rem;
  }
  a:hover {
    background-color: lightblue;
    border-left: 6px solid blue;
  }
  .close-btn {
    position: relative;

    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .close-btn div {
    position: absolute;
    transform: rotate(45deg);
    width: 1.5em;
    height: 5px;
    background-color: black;
    margin: 0.2rem;
  }
  .close-btn div:nth-of-type(2) {
    transform: rotate(135deg);
  }
  @media (min-width: 991px) {
    .menu-items {
      width: 20rem;
    }
  }
`;
export default function Sidebar({ children }) {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <Wrapper>
      <div
        onClick={() => setShowSidebar(!showSidebar)}
        className={"burger-btn"}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      {showSidebar && (
        <>
          <div className={`menu-items ${showSidebar ? "show" : ""}`}>
            <div className="header">
              <h1>Shop</h1>
              <div className="close-btn" onClick={() => setShowSidebar(false)}>
                <div></div>
                <div></div>
              </div>
            </div>
            {children}
          </div>
        </>
      )}
    </Wrapper>
  );
}
