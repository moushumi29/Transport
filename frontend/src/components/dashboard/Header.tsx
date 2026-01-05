import { ChevronDown, TruckElectric } from 'lucide-react'
import React from 'react'
import { Baloo_2 } from 'next/font/google'

const baloo2 = Baloo_2({
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'], // you can choose weights you want
})

const Header = () => {
    return (
        <div className='flex justify-between px-8 py-4 border-b border-gray-200 items-center shadow-md'>
            <div className={`${baloo2.className} text-green-500 text-3xl flex items-center gap-1 font-semibold`}>
                <TruckElectric size={36} /> CAgent
            </div>
            <div className="flex items-center gap-2">
                {/* Profile Image */}
                <div className="flex items-center gap-2 bg-white p-2 rounded-full shadow-md">
                    <img
                        src="/globe.svg" // replace with your image path or URL
                        alt="User"
                        className="w-8 h-8 rounded-full object-cover"
                    />
                </div>


                {/* User Name */}
                <span className="text-zinc-500 font-semibold">Douglas Steele</span>

                {/* Dropdown Icon */}
                <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
        </div>
    )
}

export default Header;
