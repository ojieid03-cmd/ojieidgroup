"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type Props = {
  labels: string[];
  data: number[];
};

export default function RevenueChart({
  labels,
  data,
}: Props) {
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: "Pendapatan",
            data,
            borderWidth: 3,
            tension: 0.35,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      }}
    />
  );
}