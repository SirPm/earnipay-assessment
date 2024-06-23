import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";
import { AccountInflowOutflowChartLegend } from "./account-inflow-outflow-chart-legend";
import { RESPONSIVE_SIZE } from "../../../utils/constants";

const formatYAxis = (tickItem: number): string => {
  if (tickItem >= 1000) {
    return `${tickItem / 1000}k`;
  }
  return String(tickItem);
};

const data = [
  { day: "Mon", value1: 3000, value2: 3500 },
  { day: "Tue", value1: 4000, value2: 3200 },
  { day: "Wed", value1: 2500, value2: 3800 },
  { day: "Thu", value1: 2000, value2: 2200 },
  { day: "Fri", value1: 1200, value2: 1500 },
  { day: "Sat", value1: 3000, value2: 3200 },
  { day: "Sun", value1: 2000, value2: 3300 },
];

export const AccountInflowOutflowChart = () => {
  const legendPayload = [
    {
      value: "Inflow",
      label: "Inflow",
      bgColor: "#398D94",
      amount: "₦19,192,293",
      decimal: ".05",
    },
    {
      value: "Outflow",
      label: "Outflow",
      bgColor: "#E5E7EB",
      amount: "₦19,192,293",
      decimal: ".05",
    },
  ];

  return (
    <Wrapper>
      <LegendWrapper>
        <Legend
          payload={legendPayload}
          content={<AccountInflowOutflowChartLegend legends={legendPayload} />}
        />
      </LegendWrapper>
      <BarChartWrapper>
        <BarChart
          width={500}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={15}
          barCategoryGap="50%"
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={formatYAxis}
          />
          <Tooltip />
          <Bar dataKey="value1" fill="#398D94" radius={[3, 3, 0, 0]} />
          <Bar dataKey="value2" fill="#E5E7EB" radius={[3, 3, 0, 0]} />
        </BarChart>
      </BarChartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  overflow: scroll hidden;

  scrollbar-width: auto; /* Firefox */
  -ms-overflow-style: auto; /* IE and Edge */
  &::-webkit-scrollbar {
    width: 8px; /* WebKit */
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

const LegendWrapper = styled.div`
  position: relative;
  height: 60px;
  margin-bottom: 10px;
  width: 100%;

  > div {
    width: 100% !important;
  }
`;

const BarChartWrapper = styled.div`
  > div {
    margin-left: -15%;

    @media screen and (min-width: 1600px) {
      margin-left: 0;
    }

    @media screen and (max-width: 1600px) and (min-width: 1200px) {
      margin-left: -10%;
    }

    @media screen and (max-width: ${RESPONSIVE_SIZE.MD}) {
      margin-left: 0;
    }
  }
`;
