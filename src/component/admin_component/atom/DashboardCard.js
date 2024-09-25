// DashboardCard.js
import React from "react";

const DashboardCard = ({ title, value, icon, bgColor }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ${bgColor}`}
    >
      <div className="flex items-center justify-between mb-6">
        {/* Icon */}
        <div className="text-white text-4xl">{icon}</div>
      </div>
      
      {/* Title and Value */}
      <div>
        <div className="text-white text-xl font-bold">{title}</div>
        <div className="text-white text-4xl font-semibold mt-2">{value}</div>
      </div>
    </div>
  );
};

export default DashboardCard;
