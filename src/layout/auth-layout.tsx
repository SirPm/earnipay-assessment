import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { AuthAside } from "../components/auth-aside";
import { RESPONSIVE_SIZE } from "../utils/constants";

export const AuthLayout = () => {
  return (
    <Wrapper>
      <AuthAside />
      <MainContent>
        <Outlet />
      </MainContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  height: 100vh;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    flex-direction: column;
  }
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 62.4%;
  background-color: #f9fafb;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: ${RESPONSIVE_SIZE.SM}) {
    max-width: 100%;
    padding: 5rem 0;
  }
`;
