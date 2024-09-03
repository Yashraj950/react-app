import React from "react";
import styled from "styled-components";
import { Button } from "./styles/Button";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <Wrapper>
      <img
        src="https://static.vecteezy.com/system/resources/previews/002/006/374/non_2x/modern-flat-design-illustration-of-404-error-page-free-vector.jpg"

        width="70%"
        alt="error"
      />
      <NavLink to="/">
      <Button className="btn"> Go back</Button>
      </NavLink>
    </Wrapper>
  );
};

const Wrapper = styled.section` 

display: flex;
flex-direction: column;
justify-content: center;
align-items: center

`;

export default Error;
