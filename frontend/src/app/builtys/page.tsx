"use client";
import BuiltyCard from '@src/components/builtys/BuiltyCard';
import React from 'react'

const BuiltyPage = () => {
  return (
    <>
      <h3 className='text-xl mb-4 text-green-600 font-semibold'>Builty List</h3>
      <BuiltyCard />
    </>
  )
}

BuiltyPage.layout = 'DefaultLayout';

export default BuiltyPage
