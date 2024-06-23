import React, { useState } from "react";
import styled from "styled-components";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartOptions,
  ChartData,
  Plugin,
} from "chart.js";
import { DashboardCard } from "../../styled-components";
import { useMediaQuery } from "@mui/material";
import { RESPONSIVE_SIZE } from "../../../utils/constants";
import { CustomSelect, CustomSelectOption } from "../../custom-select";

const WEEK_OPTIONS: CustomSelectOption[] = [
  {
    label: "This Week",
    value: "1",
  },
  {
    label: "Last Week",
    value: "2",
  },
  {
    label: "Two Weeks Ago",
    value: "3",
  },
];

ChartJS.register(ArcElement, Tooltip, Legend);
export const AccountSpendings = () => {
  const isExtraLargeScreen = useMediaQuery(`(min-width:${RESPONSIVE_SIZE.LG})`);
  const [selectedWeekOption, setSelectedWeekOption] =
    useState<CustomSelectOption>({
      label: "This Week",
      value: "1",
    });

  const handleOptionSelect = (value: CustomSelectOption) => {
    setSelectedWeekOption(value);
  };

  const centerTextPlugin: Plugin<"doughnut"> = {
    id: "centerText",
    beforeDraw: (chart) => {
      const { width, height, ctx } = chart;
      ctx.save();

      const labelFontSize = (height / 350).toFixed(2);
      const amountFontSize = (height / 200).toFixed(2);
      ctx.textBaseline = "middle";

      const labelText = "Total Expenses";
      ctx.font = `${labelFontSize}em Aeonik`;
      const labelTextX = Math.round(
        (width - ctx.measureText(labelText).width) / 2
      );
      const labelTextY = (height - 90) / 2 - 10;

      ctx.fillText(labelText, labelTextX, labelTextY);

      const amountText = "N780,000";
      ctx.font = `${amountFontSize}em Aeonik`;
      const amountTextX = Math.round(
        (width - ctx.measureText(amountText).width) / 2
      );

      const amountTextY = labelTextY + (isExtraLargeScreen ? 30 : 20);
      ctx.fillText(amountText, amountTextX, amountTextY);
      ctx.restore();
    },
  };

  const data: ChartData<"doughnut"> = {
    labels: [
      "Payroll",
      "Transfer",
      "Electricity",
      "Airtime",
      "Cable TV",
      "Data",
    ],
    datasets: [
      {
        data: [0.23, 0.21, 0.29, 0.055, 0.09, 0.0421].map((x) => x * 780000),
        backgroundColor: [
          "#DC2626",
          "#00535C",
          "#72B3B8",
          "#F49D1B",
          "#ADB6B780",
          "#34A853",
        ],
        hoverBackgroundColor: [
          "#DC2626",
          "#00535C",
          "#72B3B8",
          "#F49D1B",
          "#ADB6B780",
          "#34A853",
        ],
        borderWidth: 4,
        borderColor: "#fff",
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    cutout: isExtraLargeScreen ? "80%" : "75%",
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 15,
          boxWidth: 5,
          boxHeight: 5,
          generateLabels: function (chart) {
            const data = chart.data;
            if (data.labels && data.datasets.length) {
              return data.labels.map((label, i) => {
                const value = data.datasets[0].data[i] as number;
                const total = (data.datasets[0].data as number[]).reduce(
                  (a, b) => a + b,
                  0
                );
                const percentage = ((value / total) * 100).toFixed(1) + "%";

                const backgroundColor = data.datasets[0].backgroundColor;
                const fillColor = Array.isArray(backgroundColor)
                  ? (backgroundColor[i] as string)
                  : "#000";

                const meta = chart.getDatasetMeta(0).data[i] as any;
                const hidden =
                  meta && meta.hidden !== undefined ? meta.hidden : false;

                return {
                  text: `${label}: ${percentage}`,
                  fillStyle: fillColor,
                  strokeStyle: fillColor,
                  lineWidth: 0,
                  pointStyle: "circle",
                  pointRadius: 5,
                  hidden: hidden,
                  index: i,
                };
              });
            }
            return [];
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || "";

            if (label) {
              label += ": ";
            }
            if (context.raw !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "NGN",
              }).format(context.raw as number);
            }
            return label;
          },
        },
      },
    },
    elements: {
      arc: {
        borderRadius: isExtraLargeScreen ? 20 : 10,
      },
    },
  };

  return (
    <Wrapper>
      <HeaderWrapper>
        <Title>How you spent</Title>
        <CustomSelectWrapper>
          <CustomSelect
            options={WEEK_OPTIONS}
            handleOptionSelect={handleOptionSelect}
            label={selectedWeekOption.label}
          />
        </CustomSelectWrapper>
      </HeaderWrapper>
      <SpendingsChartWrapper>
        <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />
      </SpendingsChartWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(DashboardCard)`
  width: 100%;
  height: 100%;
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: #374151;
`;

const CustomSelectWrapper = styled.div`
  width: 150px;
`;

const SpendingsChartWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: calc(100% - 50px);
  align-items: center;
`;
