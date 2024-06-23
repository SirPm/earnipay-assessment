import React from "react";
import styled from "styled-components";
import { Button } from "../../styled-components";
import ArrowUpGreen from "../../../assets/svg/arrow-up-green.svg";
import FundIcon from "../../../assets/svg/plus-icon-white.svg";
import TransferIcon from "../../../assets/svg/send-icon.svg";
import { RESPONSIVE_SIZE } from "../../../utils/constants";

export const AccountBalanceAndActions = () => {
  return (
    <Wrapper>
      <TotalBalanceLabel>Total Balance</TotalBalanceLabel>
      <TotalBalance>
        ₦450,000.<BalanceMini>00</BalanceMini>
      </TotalBalance>
      <TotalBalanceInsightsWrapper>
        <TotalBalanceInsightsIcon
          src={ArrowUpGreen}
          alt="green arrow up icon"
        />
        <TotalBalanceInsights>+23% more than last month</TotalBalanceInsights>
      </TotalBalanceInsightsWrapper>
      <AccountActionsWrapper>
        <FundButton>
          <ButtonIconWrapper>
            <ButtonIcon src={FundIcon} alt="plus icon" />
          </ButtonIconWrapper>
          <ButtonText>Fund</ButtonText>
        </FundButton>
        <TransferButton>
          <ButtonIconWrapper>
            <ButtonIcon src={TransferIcon} alt="send icon" />
          </ButtonIconWrapper>
          <ButtonText>Transfer</ButtonText>
        </TransferButton>
      </AccountActionsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 33.9%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: ${RESPONSIVE_SIZE.LG}) and (min-width: ${RESPONSIVE_SIZE.SM}) {
    max-width: 100%;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZE.LSM}) {
    max-width: 100%;
  }
`;

const TotalBalanceLabel = styled.p`
  font-size: 16px;
  color: #374151;
`;

const TotalBalance = styled.p`
  font-weight: 700;
  font-size: 32px;
  color: #1a202c;
  margin: 0.5rem 0;

  @media screen and (max-width: ${RESPONSIVE_SIZE.LG}) {
    margin: 0.8rem 0;
  }
`;

const BalanceMini = styled.span`
  font-size: 18px;
`;

const TotalBalanceInsightsWrapper = styled.div`
  background-color: #ecfdf3;
  padding: 4px 10px 4px 12px;
  border-radius: 16px;
  height: 28px;
  display: flex;
  align-items: center;
  width: fit-content;
`;

const TotalBalanceInsightsIcon = styled.img`
  width: 12px;
  height: 12px;
`;

const TotalBalanceInsights = styled.p`
  font-size: 14px;
  color: #027a48;
  margin-left: 5px;
`;

const AccountActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const ButtonIconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;

const ButtonIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const FundButton = styled(Button)`
  background-color: #00535c;
  color: #ffffff;
  border-radius: 8px;
  position: relative;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 48%;
`;

const TransferButton = styled(FundButton)`
  border: 1px solid #cadfe1;
  background-color: #00535c14;
  color: #00535c;
`;

const ButtonText = styled.span`
  margin-left: 5px;
`;
