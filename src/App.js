import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from 'antd'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { CK, NewRides, Calendar, Drivers, Riders, Area, Bar, Line, Pie } from './pages'

import { useStateContext } from './contexts/ContextProvider'

import './App.css'

const App = () => {
  const { activeMenu } = useStateContext()
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
            <Tooltip title="Settings" placement='top'>
              <button 
                type="button" 
                className='rounded-full p-1 
                hover:bg-light-gray 
                focus:outline-none 
                focus:ring 
                focus:ring-black'
              >
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
            <div className={
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${
                activeMenu ? 
                "md:ml-12" : 
                "flex-2"
              }`
            }>
              <div className='fixed md:static bg-main-g dark:bg-main-dark
              navbar w-full'>
                <Navbar />
              </div>
            </div>
            <div>
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<CK />} />
                <Route path='/rides' element={<CK />} />

                {/* Schedule */}
                <Route path='/new rides' element={<NewRides />} />
                <Route path='/drivers' element={<Drivers />} />
                <Route path='/riders' element={<Riders />} />

                {/* Apps */}
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/kanban' element={<Calendar />} />

                {/* Charts */}
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/line' element={<Line />} />
                <Route path='/pie' element={<Pie />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App

