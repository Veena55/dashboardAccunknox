import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the required components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = ({ attributes }) => {
  console.log(attributes);

  const data = {
    labels: attributes.map(label => label.name),
    datasets: [
      {
        label: 'Critical',
        data: [9, 2], // Replace with your data
        backgroundColor: 'rgba(255, 99, 132, 0.8)', // Red color
      },
      {
        label: 'High',
        data: [150, 2], // Replace with your data
        backgroundColor: 'rgba(255, 159, 64, 0.8)', // Orange color
      },
      {
        label: 'Medium',
        data: [500, 0], // Example data, replace as needed
        backgroundColor: 'rgba(255, 206, 86, 0.8)', // Yellow color
      },
      {
        label: 'Low',
        data: [800, 0], // Example data, replace as needed
        backgroundColor: 'rgba(75, 192, 192, 0.8)', // Green color
      },
      {
        label: 'None',
        data: [11, 0], // Example data, replace as needed
        backgroundColor: 'rgba(201, 203, 207, 0.8)', // Gray color
      },
    ],
  };

  const options = {
    indexAxis: 'y', // This makes the bar chart horizontal
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Image Risk Assessment and Security Issues',
      },
    },
    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
      },
      y: {
        stacked: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;
