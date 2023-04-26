import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { Tooltip } from 'antd'
import avatar from '../data/avatar.jpg'
import { Cart, Chat, Notificaion, UserProfile } from '.'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <Tooltip title={title} placement='Bottom'>
    <button type="button" onClick={customFunc} style={{color}} className="relative text-xl rounded-full p-3 hover:bg-light-gray">
      <span style={{background: dotColor}}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      >
        {icon}
      </span>
    </button>
  </Tooltip>
)

const Navbar = () => {
  const { activeMenu, setActiveMenu, handleClick } = useStateContext()
  return (
    <div className="flex justify-between p-10 md:mx-6 relative">
      <NavButton title="Menu" 
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} 
        color="black" 
        icon={<AiOutlineMenu size={25}/>}
      />
      <div className="flex">
        <NavButton title="Cart" 
          customFunc={() => handleClick('cart')} 
          color="black" 
          icon={<FiShoppingCart size={25}/>}
        />
        <NavButton title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')} 
          color="black" 
          icon={<BsChatLeft size={25}/>}
        />
        <NavButton title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')} 
          color="black" 
          icon={<RiNotification3Line size={25}/>}
        />
        <Tooltip title="User Profile" placement="Bottom">
          <div className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg" 
          onClick={() => handleClick('userProfile')}>
            <img 
              className="rounded-full w-8 h-8"
              src={avatar}
            />
            <p>
              <span className="text-gray-400 text-14">Hi, </span> {' '}
              <span className="text-gray-400 fond-bold ml-1 text-14">Anmol</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" size={25}/>
          </div>
        </Tooltip>
      </div>
    </div>
  )
}

export default Navbar
