import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart, FiCreditCard } from 'react-icons/fi';
import { BsKanban, BsBarChart, BsCurrencyDollar, BsShield } from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { GrUserNew } from 'react-icons/gr';
import { Tag } from 'antd';
import { Tooltip } from 'antd';

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

export const links = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'rides',
        icon: <AiFillCar />,
      },
    ],
  },

  {
    title: 'Schedule',
    links: [
      {
        name: 'new rides',
        icon: <GrUserNew />,
      },
      {
        name: 'drivers',
        icon: <IoMdContacts />,
      },
      {
        name: 'riders',
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: 'Apps',
    links: [
      {
        name: 'calendar',
        icon: <AiOutlineCalendar />,
      },
    ],
  },
  {
    title: 'Charts',
    links: [
      {
        name: 'line',
        icon: <AiOutlineStock />,
      },
      {
        name: 'area',
        icon: <AiOutlineAreaChart />,
      },

      {
        name: 'bar',
        icon: <AiOutlineBarChart />,
      },
      {
        name: 'pie',
        icon: <FiPieChart />,
      },
    ],
  },
];

export const colorMaps = {
  pending: 'volcano',
  completed: 'green',
};

export const ridersGrid = [
  {
    title: 'Name',
    dataIndex: 'Name',
    width: 120,
  },
  {
    title: 'Ride Route',
    dataIndex: 'RouteLocs',
    width: 120,
    render: (RouteLocs) => (
      <Tooltip placement="topLeft" title={RouteLocs}>
        {RouteLocs}
      </Tooltip>
    ),
  },
  {
    title: 'Accommodations',
    dataIndex: 'accommodations',
    width: 120,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    width: 120,
    render: (_, { tags }) => {
      // set color from colorMaps and map each key value pair to a Tag
      return Object.entries(tags).map(([key, value]) => (
        <Tag color={colorMaps[value]} key={key}>
          {value}
        </Tag>
      ));
    }
  },
  {
    dataIndex: 'edit',
    width: 10,
  }
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];
