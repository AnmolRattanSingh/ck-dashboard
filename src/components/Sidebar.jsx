import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiMountedKnight } from 'react-icons/gi'
import { MdOutlineCancel } from 'react-icons/md'
import { Tooltip } from 'antd'

import { links } from '../data/dummy'
import { useStateContext } from '../contexts/ContextProvider'

const Sidebar = () => {
  const { activeMenu, setActiveMenu, screenSize } = useStateContext()

  const handleCLoseSidebar = () => {
    if (activeMenu && screenSize <= 900) {
      setActiveMenu(false)
    }
  }

  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2 bg-light-gray';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {
        activeMenu && (<>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={{ handleCLoseSidebar }}
              className="items-center gap-3 ml-2
            mt-4 flex text-xl font-extrabold tracking-tight 
            dark:text-white text-slate-900">
              <GiMountedKnight /> <span>CommunityKnights</span>
            </Link>
            <Tooltip title="Menu" placement="top">
              <button type="button"
                onClick={() => setActiveMenu(
                  (prevActiveMenu) => !prevActiveMenu
                )}
                className="rounded-full p-1 
                hover:bg-light-gray 
                focus:outline-none 
                focus:ring
                focus:ring-black"
              >
                <MdOutlineCancel size={25} />
              </button>
            </Tooltip>
          </div>
          <div className="mt-10">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCLoseSidebar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize">
                      {link.name}
                    </span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
        )}
    </div>
  )
}

export default Sidebar
