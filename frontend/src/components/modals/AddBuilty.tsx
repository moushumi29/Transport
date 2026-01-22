"use client";

import React from "react";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { selectBuiltyInfo, selectShowAddBuiltyModal } from "@src/store/slices/builtySlice";
import { useBuiltyHandler } from "@src/mixins/builty";


const AddBuilty = () => {
  const dispatch = useDispatch();
  const showAddBuiltyModal = useSelector(selectShowAddBuiltyModal);
  const builtyInfo = useSelector(selectBuiltyInfo);
  const { closeAddBuiltyModal, changeFormData, calculateBalance, createBuilty } = useBuiltyHandler();

  console.log("builtyInfo", builtyInfo);

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
        onClick={closeAddBuiltyModal}
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
        <div className=" px-6 py-4">
          <h2 className="text-xl font-semibold text-center">
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
                <input className="input" name="builtyNo" value={builtyInfo.builtyNo} onChange={(e) => changeFormData("builtyNo", e.target.value)}/>
              </div>
              <div>
                <label className="custom-label">Date</label>
                <input type="date" className="input" name="date" value={builtyInfo.date} onChange={(e) => changeFormData("date", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">Vehicle No</label>
                <input className="input" name="vehicleNo" value={builtyInfo.vehicleNo} onChange={(e) => changeFormData("vehicleNo", e.target.value)} />
              </div>
            </div>
          </section>

          {/* Route */}
          <section>
            <h3 className="font-semibold mb-3">Route Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="custom-label">From</label>
                <input className="input" name="routeFrom" value={builtyInfo.route.from} onChange={(e) => changeFormData("route.from", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">To</label>
                <input className="input" name="routeTo" value={builtyInfo.route.to} onChange={(e) => changeFormData("route.to", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">Via / Route</label>
                <input className="input" name="routeVia" value={builtyInfo.route.via} onChange={(e) => changeFormData("route.via", e.target.value)} />
              </div>
            </div>
          </section>

          {/* Party Info */}
          <section>
            <h3 className="font-semibold mb-3">Consignor & Consignee</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="custom-label">Consignor Name</label>
                <input className="input" name="consignorName" value={builtyInfo.consignor.name} onChange={(e) => changeFormData("consignor.name", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">Consignee Name</label>
                <input className="input" name="consigneeName" value={builtyInfo.consignee.name} onChange={(e) => changeFormData("consignee.name", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">Consignor Phone </label>
                <input className="input" name="consignorPhone" value={builtyInfo.consignor.mobile} onChange={(e) => changeFormData("consignor.mobile", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">Consignee Phone</label>
                <input className="input" name="consigneePhone" value={builtyInfo.consignee.mobile} onChange={(e) => changeFormData("consignee.mobile", e.target.value)} />
              </div>
            </div>
          </section>

          {/* Goods */}
          <section>
            <h3 className="font-semibold mb-3">Goods Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="custom-label">No. of Packages</label>
                <input type="number" className="input" name="noOfPackages" value={builtyInfo.goods.noOfPackages} onChange={(e) => changeFormData("goods.noOfPackages", Number(e.target.value))} />
              </div>
              <div>
                <label className="custom-label">Item Category</label>
                <input className="input" name="itemCategory" value={builtyInfo.goods.category} onChange={(e) => changeFormData("goods.category", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">Weight</label>
                <input type="number" className="input" name="weight" value={builtyInfo.goods.weight} onChange={(e) => changeFormData("goods.weight", Number(e.target.value))} />
              </div>
           
              <div>
                <label className="custom-label">Rate</label>
                <input type="number" className="input" name="rate" value={builtyInfo.goods.rate} onChange={(e) => changeFormData("goods.rate", Number(e.target.value))} />
              </div>
            </div>
          </section>

          {/* Charges */}
          <section>
            <h3 className="font-semibold mb-3">Charges</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="custom-label">Freight</label>
                <input type="number" className="input" name="freight" value={builtyInfo.charges.freight} onChange={(e) => changeFormData("charges.freight", Number(e.target.value))} />
              </div>
              <div>
                <label className="custom-label">Other Charges</label>
                <input type="number" className="input" name="otherCharges" value={builtyInfo.charges.otherCharges} onChange={(e) => changeFormData("charges.otherCharges", Number(e.target.value))} />
              </div>
              <div>
                <label className="custom-label">Truck Advance</label>
                <input type="number" className="input" name="truckAdvance" value={builtyInfo.charges.advance} onChange={(e) => changeFormData("charges.advance", Number(e.target.value))} />
              </div>
              <div>
                <label className="custom-label">Balance</label>
                <input type="number" className="input" name="balance" value={calculateBalance()} readOnly />
              </div>
            </div>
          </section>

          {/* Driver & Vehicle */}
          <section>
            <h3 className="font-semibold mb-3">Driver & Vehicle Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="custom-label">Driver Name</label>
                <input className="input" name="driverName" value={builtyInfo.driver.name} onChange={(e) => changeFormData("driver.name", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">Driver Mobile</label>
                <input className="input" name="driverMobile" value={builtyInfo.driver.mobile} onChange={(e) => changeFormData("driver.mobile", e.target.value)} />
              </div>
              <div>
                <label className="custom-label">Driving License No</label>
                <input className="input" name="licenseNo" value={builtyInfo.driver.licenseNo} onChange={(e) => changeFormData("driver.licenseNo", e.target.value)}/>
              </div>
              <div>
                <label className="custom-label">Owner Name</label>
                <input className="input" name="ownerName" value={builtyInfo.owner.name} onChange={(e) => changeFormData("owner.name", e.target.value)} />
              </div>
               <div>
                <label className="custom-label">Owner Mobile</label>
                <input className="input" name="ownerMobile" value={builtyInfo.owner.mobile} onChange={(e) => changeFormData("owner.mobile", e.target.value)} />
              </div>
               <div>
                <label className="custom-label">Owner Address</label>
                <input className="input" name="ownerAddress" value={builtyInfo.owner.address} onChange={(e) => changeFormData("owner.address", e.target.value)} />
              </div>
            </div>
          </section>

        </div>

        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={closeAddBuiltyModal}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>

          <button type="button" className="px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700" onClick={createBuilty}>
            Save
          </button>
        </div>
        </div>
      </div>
    // </div>
  );
};

export default AddBuilty;
