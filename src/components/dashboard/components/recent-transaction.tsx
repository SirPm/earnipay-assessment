import React from "react";
import styled from "styled-components";
import GreenArrowUp from "../../../assets/svg/green-arrow-circle.svg";
import RedArrowUp from "../../../assets/svg/red-arrow-circle.svg";
import { capitalizeFirstLetter } from "../../../utils/helpers";

type TransactionType = "debit" | "credit";
type TransactionStatus = "successful" | "pending" | "declined";

export interface RecentTransactionItem {
  name: string;
  date: string;
  status: TransactionStatus;
  amount: string;
  type: TransactionType;
}

interface RecentTransactionProps extends RecentTransactionItem {}

export const RecentTransaction = (props: RecentTransactionProps) => {
  const { name, date, status, amount, type } = props;

  return (
    <Wrapper>
      <TransactionInfoAndIcon>
        <IconWrapper>
          <Icon
            src={type === "credit" ? GreenArrowUp : RedArrowUp}
            alt={type === "credit" ? "green arrow up" : "red arrow up"}
          />
        </IconWrapper>
        <TransactionDateAndName>
          <TransactionName>{name}</TransactionName>
          <TransactionDate>{date}</TransactionDate>
        </TransactionDateAndName>
      </TransactionInfoAndIcon>
      <TransactionAmountAndStatus>
        <Amount>
          {type === "credit" ? "+" : "-"}&nbsp;
          {amount}
        </Amount>
        <Status $status={status}>{capitalizeFirstLetter(status)}</Status>
      </TransactionAmountAndStatus>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.7rem;
`;

const TransactionInfoAndIcon = styled.div`
  display: flex;
  align-items: center;
`;

const TransactionDateAndName = styled.div`
  margin-left: 7px;
`;

const IconWrapper = styled.div``;

const Icon = styled.img``;

const TransactionName = styled.p`
  color: #374151;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const TransactionDate = styled.p`
  color: #667085;
  font-size: 13px;
`;

const TransactionAmountAndStatus = styled.div``;

const Amount = styled.p`
  color: #101828;
  font-size: 14px;
  text-align: right;
`;

const Status = styled.p<{ $status: TransactionStatus }>`
  background-color: ${(props) =>
    props.$status === "pending"
      ? "#FFFAEB"
      : props.$status === "successful"
      ? "#ECFDF3"
      : "#FEF2F2"};
  color: ${(props) =>
    props.$status === "pending"
      ? "#B54708"
      : props.$status === "successful"
      ? "#027A48"
      : "#DC2626"};
  font-size: 11px;
  font-weight: 500;
  border-radius: 16px;
  padding: 2px 8px;
  margin-top: 5px;
  text-align: center;
`;
