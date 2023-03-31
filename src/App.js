import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from 'antd'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { CK, Orders, Calendar, Employees, Customers, Area, Bar, Line, Pie } from './pages'
import './App.css'

const App = () => {
  const [activeMenu, setActiveMenu] = useState(true)
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <Tooltip title="Settings" placement='top'>
              <button type="button" 
              className='rounded-full p-1 
              hover:bg-light-gray 
              focus:outline-none 
              focus:ring 
              focus:ring-black'
              onClick={() => {setActiveMenu(false)}}>
                <FiSettings size={30} />
              </button>
            </Tooltip>
            {activeMenu ? (
              <div className='w-72 top-2 left-2 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 top-2 left-2 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            )}
            {/* <div className={
              `dark.bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? 
                "md:ml-72" : 
                "flex-2"
              }`
            }>
              <div className='fixed bg-main-g dark:bg-main-dark
              navbar w-full'>
                <Navbar />
              </div>
            </div> */}

            <div>
              <Routes>
                {/* main page */}
                <Route path='/' element={<CK />} />
                <Route path='/orders' element={<Orders />} />

                {/* pages */}
                <Route path='/calendar' element={<Calendar />} />
              </Routes>
            </div>

          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

