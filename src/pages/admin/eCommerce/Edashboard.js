import Item from 'antd/es/list/Item'
import React from 'react'
// import EdashboardData from '../../../component/admin_component/data/Data'
import DashboardCard from '../../../component/admin_component/atom/DashboardCard'
import { EdashboardData, chartData, tableData, columns } from '../../../component/admin_component/data/Data'
import ChartComponent from '../../../component/admin_component/molecules/ChartComponent';
import TableComponent from '../../../component/admin_component/molecules/TableComponent';
import NotificationDropdown from '../../../component/admin_component/notificationAdmin/NotificationDropdown';
import MessageDropdown from '../../../component/admin_component/messageAdmin/MessageDropdown';
import SaleByCategory from '../../../component/admin_component/molecules/SaleByCategory';
import RecentOrderCom from '../../../component/admin_component/molecules/RecentOrderCom';
import PieChart from '../../../component/admin_component/molecules/PieChart';

const Edashboard = () => {
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Over Time',
      },
    },
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {EdashboardData.map((item, index) => (
          <DashboardCard
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
            bgColor={item.bgColor}
          />
        ))}
      </div>
      <div className="p-6 space-y-6 bg-gray-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart Section */}
          <ChartComponent type="line" data={chartData} options={chartOptions} />
          <ChartComponent type="bar" data={chartData} options={chartOptions} />
        </div>

        <div className="mt-6">
          {/* Table Section */}
          <TableComponent columns={columns} dataSource={tableData} />
        </div>
      </div>


      {/* <div className="absolute  flex items-center space-x-4">
        <NotificationDropdown />
        <MessageDropdown />
      </div> */}

<div className="grid grid-cols-1 lg:grid-cols-10 gap-6 p-6 bg-gray-100 min-h-screen">
  {/* SaleByCategory component with 30% width */}
  <div className="lg:col-span-3">

    <SaleByCategory />
    <div class="w-full h-1 bg-green-500 m-2"></div>
    <div className="lg:col-span-3 ">
    <PieChart />
  </div>
  </div>

  {/* RecentOrderCom component with 70% width */}
  <div className="lg:col-span-7">
    <RecentOrderCom />
  </div>

  {/* PieChart component placed in the bottom-left corner */}
  
</div>

    </>
  )
}

export default Edashboard
