import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Card } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import 'chart.js/auto'; // Required for Chart.js 3.x and above

const SaleByCategory = () => {
  // Mock data for the chart
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: "Women's",
        data: [12, 19, 3, 5, 2, 3, 7],
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: "Men's",
        data: [10, 14, 5, 2, 20, 10, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card >
        <h2 className="text-lg font-semibold mb-4 text-center">
            Sale By Users
        </h2>
     
      <Bar data={data} options={options} />
    </Card>
  );
};

export default SaleByCategory;