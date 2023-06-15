import React from 'react';
import { Table, Menu, Dropdown, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined, ExportOutlined, FileExcelOutlined, FilePdfOutlined } from '@ant-design/icons';
import { ridersData, contextMenuItems, ridersGrid } from '../data/dummy';
import { Header } from '../components';

const NewRides = () => {
  const columns = ridersGrid.map((item, index) => ({
    ...item,
    dataIndex: item.field,
    key: index
  }));

  const rowSelection = {
    onchange: (selectedRowKeys, selectedRows) => {
      console.log(selectedRowKeys, selectedRows);
    }
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Schedule" title="New Rides" />
      <div className="mt-4">
        <Button type="default" icon={<EditOutlined />} className="mr-2">Edit</Button>
        <Button type="default" icon={<DeleteOutlined />} className="mr-2">Delete</Button>
        <Button type="default" icon={<ExportOutlined />} className="mr-2">Export</Button>
        <Button type="default" icon={<FileExcelOutlined />} className="mr-2">Excel</Button>
        <Button type="default" icon={<FilePdfOutlined />} className="mr-2">PDF</Button>
      </div>
      <div className="mb-4"></div>
      <Table
        dataSource={ridersData}
        columns={columns}
        pagination={{ pageSize: 10 }}
        rowSelection={rowSelection}
        bordered
      />
    </div>
  );
};

export default NewRides;
