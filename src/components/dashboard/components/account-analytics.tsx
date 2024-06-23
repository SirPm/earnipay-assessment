import React from "react";
import styled from "styled-components";
import { DashboardWrapper } from "../../styled-components";
import { AccountYield } from "./account-yield";
import { AccountInflowOutflow } from "./account-inflow-outflow";
import { AccountSpendings } from "./account-spendings";
import { RESPONSIVE_SIZE } from "../../../utils/constants";

export const AccountAnalytics = () => {
  return (
    <Wrapper>
      <Section>
        <AccountYield />
        <AccountInflowOutflow />
      </Section>
      <AccountSpendingsSection>
        <AccountSpendings />
      </AccountSpendingsSection>
    </Wrapper>
  );
};

const Wrapper = styled(DashboardWrapper)`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
    flex-direction: column;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 56.3%;

  @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
    max-width: 100%;
  }
`;

const AccountSpendingsSection = styled.section`
  width: 100%;
  max-width: 41.5%;

  @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
    max-width: 100%;
    margin-top: 2rem;
  }
`;
