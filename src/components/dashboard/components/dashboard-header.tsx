import React from "react";
import styled from "styled-components";
import CustomizeIconImg from "../../../assets/svg/customize-dashboard-icon.svg";
import { RESPONSIVE_SIZE } from "../../../utils/constants";

export const DashboardHeader = () => {
  return (
    <Wrapper>
      <GreetingsWrapper>
        <Greetings>Good morning, Laolu!</Greetings>
        <DateTime>Apr 16, 2024 • 12:35 pm</DateTime>
      </GreetingsWrapper>
      <CustomizeWrapper>
        <CustomizeIconWrapper>
          <CustomizeIcon src={CustomizeIconImg} alt="customize icon" />
        </CustomizeIconWrapper>
        <CustomizeText>Customize Dashboard</CustomizeText>
      </CustomizeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: ${RESPONSIVE_SIZE.XSM}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const GreetingsWrapper = styled.div`
  @media screen and (max-width: ${RESPONSIVE_SIZE.XSM}) {
    margin-bottom: 1.5rem;
  }
`;

const Greetings = styled.p`
  font-size: 24px;
  font-weight: 500;
  color: #1a202c;
`;

const DateTime = styled.p`
  color: #718096;
  font-size: 14px;
  margin-top: 0.6rem;
`;

const CustomizeWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CustomizeIconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 3px;
`;

const CustomizeIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const CustomizeText = styled.p`
  color: #00535c;
  font-size: 16px;
  font-weight: 500;
`;
