import React from "react";
import styled from "styled-components";

interface LegendProps {
  value: string;
  label: string;
  bgColor: string;
  amount: string;
  decimal: string;
}
interface AccountInflowOutflowChartLegendProps {
  legends: LegendProps[];
}

export const AccountInflowOutflowChartLegend = (
  props: AccountInflowOutflowChartLegendProps
) => {
  const { legends } = props;

  return (
    <Wrapper>
      {legends.map(({ label, bgColor, amount, decimal }, index: number) => (
        <Legend key={`${label}-${index}`}>
          <LegendLabelWrapper>
            <Bullet $bgcolor={bgColor} />
            <LegendLabel>{label}</LegendLabel>
          </LegendLabelWrapper>
          <LegendText>
            {amount}
            <LegendTextMini>{decimal}</LegendTextMini>
          </LegendText>
        </Legend>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
`;

const Legend = styled.div`
  position: relative;

  &:after {
    content: "";
    position: absolute;
    background-color: #d1d5db;
    top: 0;
    right: -25%;
    height: 100%;
    width: 1px;
  }

  &:last-child {
    &:after {
      display: none;
    }
  }
`;

const Bullet = styled.div<{ $bgcolor: string }>`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: 10px;
  background-color: ${(props) => props.$bgcolor};
`;

const LegendLabelWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;

const LegendLabel = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #4a5564;
`;

const LegendText = styled.p`
  font-size: 18px;
  font-weight: 600;
  color: #1a202c;
`;

const LegendTextMini = styled.span`
  color: #737373;
`;
