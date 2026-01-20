"use client"

import VehicleCard from '@src/components/common/VehicleCard';
import React from 'react'

const DriverPage = () => {
  return (
    <div>
      <h3 className='text-xl mb-4 text-green-600 font-semibold'>Vehicle List</h3>
      <VehicleCard />
    </div>
  )
}

DriverPage.layout = 'DefaultLayout';

export default DriverPage
