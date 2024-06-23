import React from "react";
import styled from "styled-components";
import { DashboardCard, DashboardWrapper } from "../../styled-components";
import { AccountBalanceAndActions } from "./account-bal-and-actions";
import { AccountBalanceChart } from "./account-bal-chart";
import { RESPONSIVE_SIZE } from "../../../utils/constants";

export const DashboardAccountBalanceSummary = () => {
  return (
    <Wrapper>
      <Card>
        <AccountBalanceAndActions />
        <AccountBalanceChart />
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled(DashboardWrapper)``;

const Card = styled(DashboardCard)`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${RESPONSIVE_SIZE.LG}) and (min-width: ${RESPONSIVE_SIZE.SM}) {
    flex-direction: column;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZE.LSM}) {
    flex-direction: column;
  }
`;
