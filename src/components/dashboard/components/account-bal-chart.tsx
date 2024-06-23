import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  CategoryScale,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { CustomSelect, CustomSelectOption } from "../../custom-select";
import {
  RESPONSIVE_SIZE,
  TOTAL_AMOUNT_CHART_DATA,
} from "../../../utils/constants";
import { useMediaQuery } from "@mui/material";

const CHART_RANGE_OPTIONS: CustomSelectOption[] = [
  {
    label: "Last 3 months",
    value: "3",
  },
  {
    label: "Last 6 months",
    value: "6",
  },
  {
    label: "Last 9 months",
    value: "9",
  },
  {
    label: "Last 12 months",
    value: "12",
  },
];

interface ChartRange {
  label: string;
  value: string;
}

const RGB_VALUE = "57, 141, 148";
export const AccountBalanceChart = () => {
  const isLargeScreen = useMediaQuery(`(min-width:${RESPONSIVE_SIZE.LG})`);
  const [chartRange, setChartRange] = useState<ChartRange>({
    label: "Last 6 months",
    value: "6",
  });

  const handleOptionSelect = (value: CustomSelectOption) => {
    setChartRange(value);
  };

  ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    CategoryScale,
    Filler
  );

  const visibleChartInfo = useMemo(() => {
    const range = +chartRange.value;
    return TOTAL_AMOUNT_CHART_DATA.filter((_, index) => index + 1 <= range);
  }, [chartRange]);

  const chartLabels = useMemo(
    () => visibleChartInfo.map((info) => info.monthShort),
    [visibleChartInfo]
  );

  const data: ChartData<"line", number[], string> = useMemo(
    () => ({
      labels: visibleChartInfo.map((info) => info.monthLong),
      datasets: [
        {
          label: "Total Amount",
          data: visibleChartInfo.map((info) => info.amount),
          borderColor: `rgba(${RGB_VALUE}, 1)`,
          backgroundColor: `rgba(${RGB_VALUE}, 0.5)`,
          fill: true,
          tension: 0.6,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    }),
    [visibleChartInfo]
  );

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        display: false,
      },
      y: {
        display: false,
      },
    },
  };

  const chartRef = useRef<ChartJS<"line", number[], string>>(null);
  const repaintChart = () => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      gradient.addColorStop(0, `rgba(${RGB_VALUE}, 0.2)`);
      gradient.addColorStop(0.5, `rgba(${RGB_VALUE}, 0.1)`);
      gradient.addColorStop(1, `rgba(${RGB_VALUE}, 0)`);

      chart.data.datasets[0].backgroundColor = gradient;
      chart.update();
    }
  };

  useEffect(() => {
    repaintChart();
  }, [chartRange]);

  return (
    <Wrapper>
      <SelectWrapper>
        <CustomSelectWrapper>
          <CustomSelect
            options={CHART_RANGE_OPTIONS}
            handleOptionSelect={handleOptionSelect}
            label={chartRange.label}
          />
        </CustomSelectWrapper>
      </SelectWrapper>
      <Line
        ref={chartRef}
        data={data}
        options={options}
        height={isLargeScreen ? 60 : 90}
      />
      <ChartLabelsWrapper>
        {chartLabels.map((label, index) => (
          <ChartLabel key={`${label}-${index}`}>{label}</ChartLabel>
        ))}
      </ChartLabelsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 60.1%;

  @media screen and (max-width: ${RESPONSIVE_SIZE.LG}) and (min-width: ${RESPONSIVE_SIZE.SM}) {
    max-width: 100%;
    margin-top: 3rem;
  }

  @media screen and (max-width: ${RESPONSIVE_SIZE.LSM}) {
    max-width: 100%;
    margin-top: 3rem;
  }
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`;

const CustomSelectWrapper = styled.div`
  width: 150px;
`;

const ChartLabelsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

const ChartLabel = styled.p`
  font-size: 12px;
  color: #718096;
`;
