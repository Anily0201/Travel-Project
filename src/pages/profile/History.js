import React, { useState } from 'react';
import { Table, Space, Tag, Input, Button } from 'antd';

const { Search } = Input;

const History = () => {
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');

  const dataSource = [
    {
      key: '1',
      action: 'Logged in',
      timestamp: '2022-03-01 10:00:00',
      status: 'success',
      description: 'User successfully logged in',
    },
    {
      key: '2',
      action: 'Updated profile',
      timestamp: '2022-03-02 15:30:00',
      status: 'processing',
      description: 'User updated their profile information',
    },
    {
      key: '3',
      action: 'Made a purchase',
      timestamp: '2022-03-05 09:45:00',
      status: 'error',
      description: 'An error occurred while processing the purchase',
    },
    {
      key: '4',
      action: 'Uploaded a file',
      timestamp: '2022-03-07 14:20:00',
      status: 'success',
      description: 'User uploaded a file successfully',
    },
    {
      key: '5',
      action: 'Changed password',
      timestamp: '2022-03-10 11:05:00',
      status: 'success',
      description: 'User changed their password',
    },
    {
      key: '6',
      action: 'Deleted account',
      timestamp: '2022-03-12 16:45:00',
      status: 'error',
      description: 'An error occurred while deleting the account',
    },
    {
      key: '7',
      action: 'Logged out',
      timestamp: '2022-03-15 09:30:00',
      status: 'success',
      description: 'User successfully logged out',
    },
    {
      key: '8',
      action: 'Performed a search',
      timestamp: '2022-03-18 13:55:00',
      status: 'processing',
      description: 'User performed a search operation',
    },
    {
      key: '9',
      action: 'Added item to cart',
      timestamp: '2022-03-20 08:10:00',
      status: 'success',
      description: 'User added an item to the shopping cart',
    },
    {
      key: '10',
      action: 'Cleared browsing history',
      timestamp: '2022-03-22 17:20:00',
      status: 'success',
      description: 'User cleared their browsing history',
    },
  ];

  const columns = [
    {
      title: 'Action',
      dataIndex: 'action',
      key: 'action',
      render: (text, record) => (
        <span className={record.status === 'success' ? 'success' : record.status === 'processing' ? 'processing' : 'error'}>
          {text}
        </span>
      ),
    },
    {
      title: 'Timestamp',
      dataIndex: 'timestamp',
      key: 'timestamp',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'success' ? 'green' : status === 'processing' ? 'blue' : 'red'}>{status.toUpperCase()}</Tag>
      ),
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
  ];

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Search
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<i class="fas fa-search"></i>}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <i className="fas fa-filter" style={{ color: filtered ? '#1890ff' : undefined }}></i>
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => document.getElementById('search-input').select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Tag color="blue">{text}</Tag>
      ) : (
        text
      ),
  });

  return (
    <div className="history-container">
      <h1 class="history-title text-2xl font-bold mb-4">User Activity History</h1>

      <Table dataSource={dataSource} columns={columns} pagination={false} />
    </div>
  );
};

export default History;
