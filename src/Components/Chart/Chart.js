import "./Chart.css";
import { useExpenses } from "../../Contexts/ExpensesContext";
import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export default function Chart(props) {
  const { monthlyExpenses, monthlyDateArray } = useExpenses();

  const labels = monthlyDateArray.sort();
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        label: "Expense",
        fill: true,
        data: monthlyExpenses.map(item => item.amount).reverse(),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "rgb(255, 99, 132)",
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
