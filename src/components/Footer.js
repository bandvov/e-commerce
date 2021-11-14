import React from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  padding: 1rem;
  background-color: rgba(35, 72, 87, 0.918);
  color: white;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;
export default function Footer() {
  return (
    <Wrapper>
      &copy; {new Date().getFullYear() + " All rights reserved"}
    </Wrapper>
  );
}
