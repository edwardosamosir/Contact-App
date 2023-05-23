import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function Layout() {

  return (
    <>
      <div className='flex flex-row'>
        <div className='w-1/12'>
          <Sidebar />
        </div>
        <div className='w-8/12 mt-10'>
          <Outlet />
        </div>
      </div>
    </>
  )
}
