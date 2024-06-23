import React, { useState } from "react";
import styled from "styled-components";
import { DashboardCard } from "../../styled-components";
import { CustomSelect, CustomSelectOption } from "../../custom-select";
import { AccountInflowOutflowChart } from "./account-inflow-outflow-chart";
import { RESPONSIVE_SIZE } from "../../../utils/constants";

const OPTIONS: CustomSelectOption[] = [
  {
    label: "Daily",
    value: "1",
  },
  {
    label: "Weekly",
    value: "2",
  },
  {
    label: "Monthly",
    value: "3",
  },
  {
    label: "Yearly",
    value: "4",
  },
];

export const AccountInflowOutflow = () => {
  const [selectedOption, setSelectedOption] = useState<CustomSelectOption>({
    label: "Weekly",
    value: "2",
  });

  const handleOptionSelect = (value: CustomSelectOption) => {
    setSelectedOption(value);
  };
  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>Inflow v. Outflow</Title>
        <CustomSelectWrapper>
          <CustomSelect
            options={OPTIONS}
            handleOptionSelect={handleOptionSelect}
            label={selectedOption.label}
          />
        </CustomSelectWrapper>
      </HeaderWrapper>
      <AccountInflowOutflowChart />
    </Wrapper>
  );
};

const Wrapper = styled(DashboardCard)`
  width: 100%;
  margin-top: 0.8rem;

  @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
    margin-top: 2rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid #d1d5db;
  align-items: center;
  padding-bottom: 13px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #374151;
`;

const CustomSelectWrapper = styled.div`
  width: 150px;
`;
