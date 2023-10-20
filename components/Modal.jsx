"use client";

import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/app/redux/slices/cartSlice";

const Modal = ({ cartModal, toggleModal, itemId }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = async () => {
    dispatch(removeFromCart(itemId));
    toggleModal(0);
  };

  return (
    <div>
      {cartModal && (
        <div
          className="fixed top-0 z-50 insert-0 bg-secondary-grey bg-opacity-50 overflow-y-auto h-screen w-screen px-5"
          id="modal"
        >
          <div className="relative top-44 p-5 mx-auto border lg:w-1/3 w-full shadow-lg bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Remove from Cart
              </h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500">
                  Are you sure you want to remove this item from your cart?
                </p>
              </div>
              <div className=" flex gap-3 items-center px-4 py-3">
                <button
                  className="mt-10 text-md text-primary-red hover:text-white hover:bg-primary-red outline outline-1 outline-primary-red py-3 sm:px-7 w-full"
                  onClick={() => toggleModal(0)}
                >
                  CANCEL
                </button>
                <button
                  className="mt-10 text-md bg-primary-red text-white hover:text-primary-red hover:bg-white outline outline-1 outline-primary-red py-3 sm:px-7 w-full"
                  onClick={() => handleRemoveFromCart()}
                >
                  REMOVE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
