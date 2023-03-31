import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { GiMountedKnight } from 'react-icons/gi'
import { MdOutlineCancel } from 'react-icons/md'
import { Tooltip } from 'antd'

// import { links } from '../data/dummy'

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {
        activeMenu && (<>
          <div className="flex justify-between items-center">
            <Link to="/" onClick={() => {}}
            className="items-center gap-3 ml-2
            mt-4 flex text-xl font-extrabold tracking-tight 
            dark:text-white text-slate-900">
              <GiMountedKnight /> <span>CommunityKnights</span>
            </Link>
            <Tooltip title="Menu" placement="top">
              <button type="button"
                onClick={() => { setActiveMenu(false) }}
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
        </>

        )
      }
    </div>
  )
}

export default Sidebar
