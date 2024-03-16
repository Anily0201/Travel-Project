import React from 'react';
import { Input, Button } from 'antd';

const SearchBar = ({ onSearch }) => {
  return (
    <div className="search-bar flex items-center justify-end p-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2">
          <i className="fas fa-search text-gray-500"></i>
          
        </div>
        <Input
          className="pl-10 pr-4 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 border-none focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Search..."
          
          /> 
        
        </div>
        <Button type="primary" className="ml-1 bg-blue-500 hover:bg-blue-700" onClick={onSearch}>
  Search
</Button>
    </div>
  );
};

export default SearchBar;













// import React from 'react';
// import { Input, Button } from 'antd';

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="search-bar flex items-center justify-end p-4">
//       <Input
//         className="mr-2"
//         placeholder="Search..."
//         style={{ width: '200px' }}
//       />
//       <Button type="primary" onClick={onSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;







// SearchBar.js
// import React from 'react';
// import { Input, Button } from 'antd';

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="search-bar flex items-center justify-end p-4">
//       <div className="relative">
//         <Input
//           className="pl-8 pr-4 py-2 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Search..."
//         />
//         <span className="absolute left-3 top-2 text-gray-500">
//           <i className="fas fa-search"></i>
//         </span>
//       </div>
//       <Button type="primary" className="ml-2" onClick={onSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;









// SearchBar.js
// import React from 'react';
// import { Input, Button } from 'antd';

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="search-bar flex items-center justify-end p-4">
//       <div className="relative">
//         <Input
//           className="pl-10 pr-4 py-2 rounded-full bg-gray-100 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Search..."
//         />
//         <div className="absolute inset-y-0 left-0 flex items-center pl-4">
//           <i className="fas fa-search text-gray-500"></i>
//         </div>
//       </div>
//       <Button type="primary" className="ml-2" onClick={onSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;










// SearchBar.js
// import React from 'react';
// import { Input, Button } from 'antd';

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="search-bar flex items-center justify-end p-4">
//       <div className="relative">
//         <Input
//           className="pl-10 pr-4 py-2 rounded-full bg-purple-700 text-white placeholder-gray-3000 border-none focus:outline-none focus:ring-2 focus:ring-purple-500"
//           placeholder="Search..."
//         />
//         <div className="absolute inset-y-0 left-0 flex items-center pl-4">
//           <i className="fas fa-search text-white"></i>
//         </div>
//       </div>
//       <Button type="primary" className="ml-2" onClick={onSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;






// SearchBar.js
// import React from 'react';
// import { Input, Button } from 'antd';

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="flex items-center search-bar-container">
//   <input
//     className="border-2 border-solid border-blue-500 rounded px-2 mr-2 outline-none"
//     type="text"
//     placeholder="Search..."
//   />
//   <button
//     className="bg-blue-500 border-2 border-solid border-blue-500 rounded text-white cursor-pointer"
//     onClick={onSearch}
//   >
//     Search
//   </button>
// </div>
//   );
// };

// export default SearchBar;








// import React from 'react';
// import { Input, Button } from 'antd';

// const SearchBar = ({ onSearch }) => {
//   return (
//     <div className="search-bar flex items-center justify-end p-4">
//       <div className="relative">
//         <Input
//           className="pl-4 pr-10 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white placeholder-gray-300 border-none focus:outline-none focus:ring-2 focus:ring-blue-500"
//           placeholder="Search..."
//         />
//         <div className="absolute inset-y-0 right-0 flex items-center pr-4">
//           <i className="fas fa-search text-white"></i>
//         </div>
//       </div>
//       <Button type="primary" className="ml-2" onClick={onSearch}>
//         Search
//       </Button>
//     </div>
//   );
// };

// export default SearchBar;
