import Image from 'next/image'
import React from 'react'
import backgroundImg from '@src/assests/images/builty-cover-img.png';
import { TruckElectric } from 'lucide-react';
import { Baloo_2 } from 'next/font/google'

const baloo2 = Baloo_2({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // you can choose weights you want
})

const LeftImage = () => {
  return (
   <div className="relative h-full w-full text-white">
  {/* Logo */}
  <div
    className={`${baloo2.className} fixed top-6 left-6 z-50 flex items-center gap-1 text-green-500 text-4xl font-semibold`}
  >
    <TruckElectric size={36} />
    CAgent
  </div>

  {/* Background Image */}
  <Image
    src={backgroundImg}
    alt="Background"
    className="w-full h-full object-cover"
  />
</div>

  )
}

export default LeftImage
