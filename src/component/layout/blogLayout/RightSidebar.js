import React from 'react';

const RightSidebar = () => {
  return (
    <div className="lg:w-80 w-60 bg-white p-6 shadow-lg flex flex-col space-y-6">
      
      {/* Friend Suggestions */}
      <div className="space-y-3">
        <h4 className="font-bold text-lg">Friend Suggestions</h4>
        <div className="space-y-2">
          {/* Example friend suggestion items */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src="https://via.placeholder.com/40" alt="User" className="rounded-full" />
              <span>John Doe</span>
            </div>
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm hover:bg-blue-600">
              Add
            </button>
          </div>
          {/* Repeat friend suggestions */}
        </div>
      </div>

      {/* Chats */}
      <div className="space-y-3">
        <h4 className="font-bold text-lg">Chats</h4>
        <div className="space-y-2">
          {/* Example chat items */}
          <div className="flex items-center space-x-3">
            <img src="https://via.placeholder.com/40" alt="Chat" className="rounded-full" />
            <div>
              <span className="font-semibold">Jane Doe</span>
              <p className="text-xs text-gray-500">Hey, how are you?</p>
            </div>
          </div>
          {/* Repeat chat items */}
        </div>
      </div>

      {/* Notifications */}
      <div className="space-y-3">
        <h4 className="font-bold text-lg">Notifications</h4>
        <div className="space-y-2">
          {/* Example notification items */}
          <div className="text-sm text-gray-600">
            <p><strong>Mark</strong> commented on your post.</p>
          </div>
          {/* Repeat notification items */}
        </div>
      </div>

      {/* Trending Topics */}
      <div className="space-y-3">
        <h4 className="font-bold text-lg">Trending Topics</h4>
        <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
          <li>#ReactJS</li>
          <li>#TailwindCSS</li>
          <li>#WebDevelopment</li>
        </ul>
      </div>

      {/* Recent Activities */}
      <div className="space-y-3">
        <h4 className="font-bold text-lg">Recent Activities</h4>
        <ul className="text-sm text-gray-600 space-y-2">
          <li>You liked a post by <strong>Mary</strong>.</li>
          <li>You commented on <strong>David's</strong> photo.</li>
        </ul>
      </div>
    </div>
  );
};

export default RightSidebar;
