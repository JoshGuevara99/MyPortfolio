import './Layout.scss'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  return (
    <div className='App'>
      <Sidebar />

      <div className='page'>
        <Outlet />
      </div>
    </div>

  )
}
