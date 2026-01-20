"use client";

import React from "react";
import clsx from "clsx";

const BuiltyCard = () => {
  // 🔹 Static data
  const builty = {
    builtyNo: "BLT-001",
    vehicleNo: "BR01AB1234",
    from: "Patna",
    to: "Delhi",
    consignor: "ABC Traders",
    consignee: "XYZ Enterprises",
    weight: 1200,
    freight: 30000,
    balance: 20000,
    status: "Pending",
  };

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5 w-full max-w-sm">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Builty #{builty.builtyNo}
          </h3>
          <p className="text-sm text-gray-500">
            Vehicle • {builty.vehicleNo}
          </p>
        </div>

        <span
          className={clsx(
            "text-xs px-3 py-1 rounded-full font-medium",
            builty.status === "Pending"
              ? "bg-orange-100 text-orange-600"
              : "bg-green-100 text-green-600"
          )}
        >
          {builty.status}
        </span>
      </div>

      {/* Route */}
      <p className="text-sm text-gray-700 mb-3">
        <span className="font-medium">Route:</span>{" "}
        {builty.from} → {builty.to}
      </p>

      {/* Parties */}
      <div className="flex gap-2 flex-wrap mb-4">
        <span className="px-3 py-2 text-xs rounded-full bg-gray-100 text-gray-700">
          Consignor: {builty.consignor}
        </span>
        <span className="px-3 py-2 text-xs rounded-full bg-gray-100 text-gray-700">
          Consignee: {builty.consignee}
        </span>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 text-center mb-5">
        <div>
          <p className="text-xs text-gray-500">Weight</p>
          <p className="font-semibold">{builty.weight} kg</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Freight</p>
          <p className="font-semibold">₹{builty.freight}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Balance</p>
          <p
            className={clsx(
              "font-semibold",
              builty.balance > 0 ? "text-red-600" : "text-green-600"
            )}
          >
            ₹{builty.balance}
          </p>
        </div>
      </div>

      {/* Action */}
      <div className="grid grid-cols-2 gap-3"> 
         <button className="py-2.5 rounded-full bg-transparent border border-green-600 border-[2px] text-green-600 font-semibold hover:bg-green-50 cursor-pointer transition">
        Mark as Delivered
      </button>
        <button className="py-2.5 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 cursor-pointer transition">
        View Builty
      </button>
      </div>
     
    </div>
  );
};

export default BuiltyCard;
