import React from "react";
import styled from "styled-components";
import { DashboardCard } from "../../styled-components";
import { AccountYieldChart } from "./account-yield-chart";

export const AccountYield = () => {
  return (
    <Wrapper>
      <YieldDetails>
        <Title>Yield earned this month</Title>
        <YieldAmount>₦3,500.78</YieldAmount>
      </YieldDetails>
      <AccountYieldChart />
    </Wrapper>
  );
};

const Wrapper = styled(DashboardCard)`
  width: 100%;
  display: flex;
`;

const YieldDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h5`
  font-size: 16px;
  color: #374151;
  font-weight: 400;
`;

const YieldAmount = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #1a202c;
`;
