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
          "relative bg-white rounded-lg shadow-xl w-full max-w-xl p-6",
          "transform transition-all duration-300 ease-out",
          showAddBuiltyModal
            ? "translate-y-0 opacity-100"
            : "-translate-y-10 opacity-0"
        )}
      >
        <h3 className="text-xl font-semibold text-center mb-4">
          Create Builty
        </h3>

        <p className="text-gray-600 text-sm text-center">
          Modal content goes here
        </p>

        <div className="mt-6 flex justify-end gap-3">
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
  );
};

export default AddBuilty;
