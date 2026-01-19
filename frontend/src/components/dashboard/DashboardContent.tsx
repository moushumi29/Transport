import React from 'react';
import Image from 'next/image';
import builtyImg from '@src/assests/images/builty-img.png';
import VehicleCard from '../common/VehicleCard';


const DashboardContent = () => {
    return (
        <>
        <div className='flex p-4 '>
            <div className='w-1/3'>
                <Image
                    src={builtyImg}
                    alt="Builty"
                    width={320}
                    height={180}
                    className="rounded-lg object-contain"
                />
            </div>
            <div className='w-2/3 mt-4'>
                <h3 className='text-2xl font-semibold mb-4 text-gray-600'>Hi, Douglas! Welcome to CAgent</h3>
                <p className='text-gray-500 w-4/5 mt-2'>Easily create new bilties, follow your shipments, and manage your transport details without any hassle. Everything you need is right at your fingertips.</p>
                <div className='flex gap-4 items-center mt-6'>
                    <button className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer shadow-sm'>Create Builty</button>
                    {/* <button className='bg-transparent text-green-600 font-semibold border-[2px] border-green-600 px-4 py-2 rounded-lg hover:bg-green-100 transition cursor-pointer'>Add a vehicle</button> */}
                </div>
            </div>
   
        </div>
                 <div>
               <VehicleCard />
            </div>
            </>
    )
}

export default DashboardContent
