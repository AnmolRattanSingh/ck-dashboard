import React from 'react';
import { AiOutlineCalendar, AiOutlineShoppingCart, AiOutlineAreaChart, AiOutlineBarChart, AiOutlineStock } from 'react-icons/ai';
import { FiShoppingBag, FiEdit, FiPieChart} from 'react-icons/fi';
import { BsKanban, BsBarChart} from 'react-icons/bs';
import { BiColorFill } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { RiContactsLine, RiStockLine } from 'react-icons/ri';
import { GiLouvrePyramid } from 'react-icons/gi';
import { AiFillCar } from 'react-icons/ai';
import { GrUserNew } from 'react-icons/gr';

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
