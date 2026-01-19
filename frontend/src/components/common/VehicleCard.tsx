import React, { useState } from 'react'
import Image from "next/image";
import { Fuel, Calendar, FileText, Truck } from "lucide-react";
import defaultVehicleImg from "@src/assests/images/truck-1.svg"
import AddBuilty from '../modals/AddBuilty';
import { setShowAddBuiltyModal } from '@src/store/slices/builtySlice';
import { useDispatch } from 'react-redux';

interface VehicleCardProps {
  image: string;
  name: string;
  type: string;
  fuel: string;
  year: string;
  tax: string;
  price: string;
  badge?: {
    label: string;
    type: "good" | "top" | "avg";
  };
}

const badgeStyles = {
  good: "bg-green-100 text-green-600",
  top: "bg-emerald-100 text-emerald-600",
  avg: "bg-orange-100 text-orange-600",
};

const VehicleCard = ({
  image,
  name,
  type,
  fuel,
  year,
  tax,
  price,
  badge,
}: VehicleCardProps) => {

  const dispatch = useDispatch();
  return (
    <>
       <div className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-md  shadow-sm hover:border-green-500 hover:shadow-md transition">
      {/* Left */}
      <div className="flex items-center gap-6">
        <Image
          src={image ? image : defaultVehicleImg}
          alt={name || "Vehicle Image"}
          width={160}
          height={80}
          className="object-contain"
        />

        <div>
          <h3 className="font-semibold text-gray-800 mb-4">{name ? name : 'Vehicle Name'}</h3>

          <div className="flex items-center gap-3 text-sm text-gray-500 mt-1">
            <span className="flex items-center gap-2 text-gray-600">
              <span className="bg-green-100 text-green-600 rounded-full p-1 flex items-center justify-center">
                <Truck size={18} />
              </span>
              {type || "Truck"}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <span className="bg-green-100 text-green-600 rounded-full p-1 flex items-center justify-center">
                <Fuel size={18} />
              </span>
              {fuel || "Diesel"}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <span className="bg-green-100 text-green-600 rounded-full p-1 flex items-center justify-center">
                <Calendar size={18} />
              </span>
              {year || "2020"}
            </span>
            <span className="flex items-center gap-2 text-gray-600">
              <span className="bg-green-100 text-green-600 rounded-full p-1 flex items-center justify-center">
                <FileText size={18} />
              </span>
              {tax || "Tax Paid"}
            </span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="text-right">
        <button className='bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition cursor-pointer shadow-sm'
       onClick={() => dispatch(setShowAddBuiltyModal(false))}>Create Builty</button>

        {/* {badge && (
          <span
            className={`text-xs px-2 py-1 rounded-full font-medium ${badgeStyles[badge.type]}`}
          >
            {badge.label}
          </span>
        )} */}
        <div className="text-green-600 font-semibold mt-4">{price || "Hello"} </div>
      </div>
    
    </div>
      <AddBuilty />
    </>
 
  );
};

export default VehicleCard;

