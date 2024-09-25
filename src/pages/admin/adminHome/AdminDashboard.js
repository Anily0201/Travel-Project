// import React from 'react'
// import Sidebar from '../../component/admin_component/Sidebar'

// const AdminPage = () => {
//   return (
//     <div className="flex items-center justify-center h-screen text-black bg-gradient-to-r from-[#c7e775] via-[#85dde7]  to-[#f3c6f1] font-inter">
//       <div className="grid w-[97%] h-[97%] bg-glass  grid-cols-[11rem_auto_20rem] overflow-hidden">
//         <div>
//           <Sidebar />
//         </div>
//         <div>

//           AdminPage
//         </div>
//         <div>
//           Dashboard
//         </div>
//         <div>
//           destination
//         </div>
//         <div>
//           Blogs
//         </div>
//       </div>
//     </div>

//   )
// }

// export default AdminPage




import React from 'react';
import Sidebar from '../../../component/admin_component/Sidebar'
import Edashboard from '../eCommerce/Edashboard';


const AdminDashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

    
      <div className="flex-grow p-6 text-black bg-gradient-to-r from-[#c7e775] via-[#85dde7]  to-[#f3c6f1] font-inter">
        <h1 className="text-2xl font-bold">Welcome to Admin Dashboard</h1>
        <Edashboard/>
      </div>
    </div>
  );
};

export default AdminDashboard;




