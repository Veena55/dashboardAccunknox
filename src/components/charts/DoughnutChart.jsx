// DoughnutChart.js
import { ArcElement, Chart, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

Chart.register(ArcElement, Tooltip, Legend)

const centerTextPlugin = {
  id: 'centerText',
  afterDatasetsDraw(chart) {
    const { ctx, data } = chart;
    const { top, bottom, left, right } = chart.chartArea;
    const centerX = (left + right) / 2;
    const centerY = (top + bottom) / 2;
    // console.log(chart, centerX, centerY);

    ctx.save();
    ctx.font = 'bold 20px Arial';
    ctx.fillStyle = 'black';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // You can dynamically calculate or set the text here
    const total = data.datasets[0].data.reduce((acc, value) => acc + value, 0);
    const percentage = ((data.datasets[0].data[0] / total) * 100).toFixed(1) + '%'; // Example: show the percentage of the first segment

    ctx.fillText(percentage, centerX, centerY);
    ctx.restore();
  },
};

const DoughnutChart = ({ attributes }) => {
  // console.log(attributes);

  const data = {
    labels: attributes.map(label => label.name),
    datasets: [
      {
        label: '# of Votes',
        data: attributes.map(data => data.value),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    cutout: '50%', // This controls the size of the center hole
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      }
    },
  };

  return <Doughnut data={data} options={options} plugins={[centerTextPlugin]} />;
};

export default DoughnutChart;
