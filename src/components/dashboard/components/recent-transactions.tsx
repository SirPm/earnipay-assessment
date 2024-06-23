import React from "react";
import styled from "styled-components";
import {
  DashboardCard,
  DashboardWrapper,
  StyledLink,
} from "../../styled-components";
import { RecentTransaction, RecentTransactionItem } from "./recent-transaction";

const RECENT_TRANSACTIONS: RecentTransactionItem[] = [
  {
    name: "Airtime Purchase",
    date: "Apr 16th, 2024 at 4:50 pm",
    status: "successful",
    amount: "N5,000.00",
    type: "debit",
  },
  {
    name: "To Roy Gozie Unachukwu",
    date: "Apr 15th, 2024 at 1:24 pm",
    status: "pending",
    amount: "N20,400.00",
    type: "debit",
  },
  {
    name: "Electricity Purchase",
    date: "Apr 16th, 2024 at 4:50 pm",
    status: "successful",
    amount: "N3,200.00",
    type: "debit",
  },
  {
    name: "Account Top Up",
    date: "Apr 12th, 2024 at 10:40 am",
    status: "successful",
    amount: "N5,000.00",
    type: "credit",
  },
  {
    name: "To Muhammad Yekini",
    date: "Apr 16th, 2024 at 4:53 pm",
    status: "successful",
    amount: "N205,000.00",
    type: "debit",
  },
  {
    name: "To Muhammad Yekini",
    date: "Apr 16th, 2024 at 4:50 pm",
    status: "declined",
    amount: "N205,000.00",
    type: "debit",
  },
];

export const RecentTransactions = () => {
  return (
    <Wrapper>
      <Card>
        <HeaderWrapper>
          <Title>Recent Transactions</Title>
          <Link to="#">View all</Link>
        </HeaderWrapper>
        <RecentTransactionsWrapper>
          {RECENT_TRANSACTIONS.map((transaction, index) => (
            <RecentTransaction
              key={`${transaction.date}-${index}`}
              {...transaction}
            />
          ))}
        </RecentTransactionsWrapper>
      </Card>
    </Wrapper>
  );
};

const Wrapper = styled(DashboardWrapper)`
  margin-top: 3rem;
`;

const Card = styled(DashboardCard)`
  padding-top: 1.5rem;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h2`
  font-weight: 700;
  font-size: 18px;
`;

const Link = styled(StyledLink)`
  text-decoration: underline;
`;

const RecentTransactionsWrapper = styled.div`
  margin-top: 2.5rem;
`;
