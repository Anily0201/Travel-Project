// TableComponent.js
import { Table } from 'antd';
import { motion } from 'framer-motion';
import './style/TableComponent.css'; 

const TableComponent = ({ columns, dataSource }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-2xl"
    >
      <Table 
        columns={columns} 
        dataSource={dataSource} 
        pagination={{
          pageSize: 6, // Number of rows per page
          showSizeChanger: false, // Optional: to hide the page size changer
          className: 'custom-pagination', // Custom class for pagination styling
        }}
        bordered
        rowClassName={() => 
          'bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 '
        }
      />
    </motion.div>
  );
};

export default TableComponent;
