import { useEffect, useState } from 'react';
import { Table, Menu, Dropdown, Button, Space } from 'antd';
import { EditOutlined, DeleteOutlined, ExportOutlined, FileExcelOutlined, FilePdfOutlined } from '@ant-design/icons';
import { ridersGrid } from '../data/dummy';
import { Header } from '../components';
import { db } from '../config/firebase'
import { getDocs, collection } from 'firebase/firestore';

const NewRides = () => {
  const [loading, setLoading] = useState(true); // New loading state

  const [data, setData] = useState([]);

  const dataCollectionRef = collection(db, 'NewRides');

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Set loading to true before fetching data
        const dataSnap = await getDocs(dataCollectionRef);
        const data = dataSnap.docs.map((doc, index) => ({
          ...doc.data(),
          id: doc.id,
          key: index,
        }));
        setData(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };
    getData();
  }, []);

  const columns = ridersGrid.map((column, index) => ({
    ...column,
    key: index,
  }));

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
        dataSource={data}
        columns={columns}
        pagination={{ pageSize: 10 }}
        bordered
        loading={loading} // Pass the loading state to the Table component
      />
    </div>
  );
};

export default NewRides;
