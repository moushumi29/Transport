"use client";

import React from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectShowAddBuiltyModal, setShowAddBuiltyModal } from "@src/store/slices/builtySlice";


const AddBuilty = () => {
  const dispatch = useDispatch();
  const showAddBuiltyModal = useSelector(selectShowAddBuiltyModal);

  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300",
        showAddBuiltyModal ? "opacity-100 visible" : "opacity-0 invisible"
      )}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => dispatch(setShowAddBuiltyModal(false))}
      />

      {/* Modal */}
      <div
        className={clsx(
          "relative bg-white rounded-lg shadow-xl w-full max-w-3xl p-6",
          "transform transition-all duration-300 ease-out",
          showAddBuiltyModal
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        )}
      >
       {/* <div className="relative z-10 w-full max-w-5xl bg-white rounded-lg shadow-xl"> */}
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h2 className="text-lg font-semibold text-center">
            Create Builty
          </h2>
        </div>

        {/* Body */}
        <div className="max-h-[75vh] overflow-y-auto px-6 py-4 space-y-6">
          {/* Basic Info */}
          <section>
            <h3 className="font-semibold mb-3">Basic Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="custom-label">Builty No</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Date</label>
                <input type="date" className="input" />
              </div>
              <div>
                <label className="custom-label">Vehicle No</label>
                <input className="input" />
              </div>
            </div>
          </section>

          {/* Route */}
          <section>
            <h3 className="font-semibold mb-3">Route Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="custom-label">From</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">To</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Via / Route</label>
                <input className="input" />
              </div>
            </div>
          </section>

          {/* Party Info */}
          <section>
            <h3 className="font-semibold mb-3">Consignor & Consignee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="custom-label">Consignor Name</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Consignee Name</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Consignor Address</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Consignee Address</label>
                <input className="input" />
              </div>
            </div>
          </section>

          {/* Goods */}
          <section>
            <h3 className="font-semibold mb-3">Goods Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="custom-label">No. of Packages</label>
                <input type="number" className="input" />
              </div>
              <div>
                <label className="custom-label">Item Category</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Actual Weight</label>
                <input type="number" className="input" />
              </div>
              <div>
                <label className="custom-label">Charged Weight</label>
                <input type="number" className="input" />
              </div>
              <div>
                <label className="custom-label">Rate</label>
                <input type="number" className="input" />
              </div>
              <div>
                <label className="custom-label">Amount</label>
                <input type="number" className="input" />
              </div>
            </div>
          </section>

          {/* Charges */}
          <section>
            <h3 className="font-semibold mb-3">Charges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="custom-label">Freight</label>
                <input type="number" className="input" />
              </div>
              <div>
                <label className="custom-label">Other Charges</label>
                <input type="number" className="input" />
              </div>
              <div>
                <label className="custom-label">Truck Advance</label>
                <input type="number" className="input" />
              </div>
              <div>
                <label className="custom-label">Balance</label>
                <input type="number" className="input" />
              </div>
            </div>
          </section>

          {/* Driver & Vehicle */}
          <section>
            <h3 className="font-semibold mb-3">Driver & Vehicle Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="custom-label">Driver Name</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Driver Mobile</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Driving License No</label>
                <input className="input" />
              </div>
              <div>
                <label className="custom-label">Owner Name</label>
                <input className="input" />
              </div>
            </div>
          </section>

        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => dispatch(setShowAddBuiltyModal(false))}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700">
            Save
          </button>
        </div>
        </div>
      </div>
    // </div>
  );
};

export default AddBuilty;
