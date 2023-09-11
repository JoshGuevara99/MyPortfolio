import './Layout.scss'
import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  console.log("one layout")
  return (
    <div className='App'>
      <Sidebar />

      <div className='page'>
        <span className='tags-top-tags'>&lt;body&gt;</span>
        <Outlet />
        <span className='tags bottom-tags'>
        &lt;body&gt;
        <br/>
        <span className = 'bottom-tag-html'>&lt;body&gt;</span>
        </span>

      </div>
    </div>

  )
}
