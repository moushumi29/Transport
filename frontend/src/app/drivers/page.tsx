"use client"

import VehicleCard from '@src/components/common/VehicleCard';
import Header from '@src/components/dashboard/header';
import Sidebar from '@src/components/dashboard/Sidebar';
import React from 'react'

const DriverPage = () => {
  return (
    <div className='h-screen flex flex-col overflow-hidden'>
            <Header />
            <div className='flex flex-1 overflow-hidden'>
                <Sidebar />
                <div className='flex-1 bg-gray-50 p-6 overflow-auto'>
                    <div>
      <h3 className='text-xl mb-4 text-green-600 font-semibold'>Vehicle List</h3>
      <VehicleCard />
    </div>
                </div>
            </div>
        </div>
  
  )
}


export default DriverPage
