import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { Tooltip } from 'antd'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { CK, NewRides, Calendar, Drivers, Riders, Area, Bar, Line, Pie, UserAuth, SignUp } from './pages'

import { useStateContext } from './contexts/ContextProvider'

import './App.css'
import { auth } from './config/firebase'

const App = () => {
  const { activeMenu, userProfile } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        {auth.currentUser ? (
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
            </div>
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
              `dark:bg-main-bg bg-main-bg min-h-screen w-full ${activeMenu ?
                "md:ml-72" :
                "flex-2"
              }`
            }>
              <div className='fixed md:static bg-main-bg dark:bg-main-dark
              navbar w-full'>
                <Navbar />
              </div>
              <div>
                <Routes>
                  {/* Dashboard */}
                  <Route exact path='/' element={<CK />} />
                  <Route exact path='/rides' element={<CK />} />
                  {/* Schedule */}
                  <Route exact path='/new rides' element={<NewRides />} />
                  <Route exact path='/drivers' element={<Drivers />} />
                  <Route exact path='/riders' element={<Riders />} />

                  {/* Apps */}
                  <Route exact path='/calendar' element={<Calendar />} />
                  <Route exact path='/kanban' element={<Calendar />} />

                  {/* Charts */}
                  <Route exact path='/area' element={<Area />} />
                  <Route exact path='/bar' element={<Bar />} />
                  <Route exact path='/line' element={<Line />} />
                  <Route exact path='/pie' element={<Pie />} />
                </Routes>
              </div>
            </div>
          </div>
        ) : (
          <>
          <Routes>
            <Route exact path='/signup' element={<SignUp />} />
            <Route exact path='/userauth' element={<UserAuth />} />
          </Routes>
          <UserAuth />
          </>
        )}
      </BrowserRouter>
    </div>
  )
}

export default App

