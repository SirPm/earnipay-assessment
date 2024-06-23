import React, { useEffect, useMemo, useRef } from "react";
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

const RGB_VALUE = "52, 168, 83";
export const AccountYieldChart = () => {
  ChartJS.register(
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend,
    CategoryScale,
    Filler
  );

  const data: ChartData<"line", number[], string> = useMemo(
    () => ({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
      datasets: [
        {
          label: "Yield",
          data: [300, 1000, 900, 1200, 1300, 1100, 1000],
          borderColor: `rgba(${RGB_VALUE}, 1)`,
          backgroundColor: `rgba(${RGB_VALUE}, 0.5)`,
          fill: true,
          tension: 0.6,
          pointRadius: 0,
          pointHoverRadius: 0,
        },
      ],
    }),
    []
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
  }, []);

  return (
    <Wrapper>
      <Line ref={chartRef} data={data} options={options} height={100} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  max-width: 35%;
  margin-left: 20%;
`;
