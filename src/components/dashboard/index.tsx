import React from "react";
import styled from "styled-components";
import { DashboardHeader } from "./components/dashboard-header";
import { DashboardAccountBalanceSummary } from "./components/dashboard-acct-bal-summary";
import { AdvertBanner } from "./components/advert-banner";
import { AccountAnalytics } from "./components/account-analytics";
import { RecentTransactions } from "./components/recent-transactions";

export const DashboardContainer = () => {
  return (
    <Wrapper>
      <DashboardHeader />
      <DashboardAccountBalanceSummary />
      <AdvertBanner />
      <AccountAnalytics />
      <RecentTransactions />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 95.8%;
  margin: auto;
  padding: 1.5rem 0;
`;
