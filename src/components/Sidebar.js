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
  .header span {
    position: absolute;
    border-radius: 50%;
    font-size: 2rem;
    border: 0.5px solid;
    height: 2rem;
    width: 2rem;
    right: 1rem;
    top: 0.5rem;
    text-align: center;
  }
  .header h1 {
    margin: 1rem 0;
  }
  .burger-btn {
    margin-right: 1rem;
  }
  .header div {
    border: 1px solid black;
    display: flex;
    align-items: center;
  }
  .header span:hover {
    background-color: lightgray;
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
              <div>
                <span onClick={() => setShowSidebar(false)}>&times;</span>
              </div>
            </div>
            {children}
          </div>
        </>
      )}
    </Wrapper>
  );
}
