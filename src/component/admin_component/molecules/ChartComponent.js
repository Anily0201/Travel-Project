// Chart.js
import { Line, Bar } from 'react-chartjs-2';
import { motion } from 'framer-motion';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

const ChartComponent = ({ type, data, options }) => {
  const renderChart = () => {
    if (type === 'line') {
      return <Line data={data} options={options} />;
    } else if (type === 'bar') {
      return <Bar data={data} options={options} />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="p-6 bg-gradient-to-r from-blue-50 to-purple-300 text-white rounded-lg shadow-xl"
    >
      {renderChart()}
    </motion.div>
  );
};

export default ChartComponent;
