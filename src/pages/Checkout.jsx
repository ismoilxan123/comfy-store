import React from "react";

const Checkout = () => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-medium tracking-wider capitalize mb-4">
          Place Your Order
        </h2>
        <hr className="border-black border-2" />
      </div>
      <div className="lg:flex justify-between gap-4 ">
        <div className="w-full">
          <h1 className="font-medium text-xl capitalize mb-4">
            Shipping information
          </h1>
          <label className="form-control w-full mb-8 ">
            <div className="label">
              <span className="label-text">First Name</span>
            </div>
            <input type="text" className="input input-bordered w-full " />
          </label>
          <label className="form-control w-full mb-8 ">
            <div className="label">
              <span className="label-text">Address</span>
            </div>
            <input type="text" className="input input-bordered w-full " />
          </label>
          <div className="uppercase w-full btn btn-secondary">
            place your order
          </div>
        </div>
        <div className="p-8 bg-[#121212] rounded-2xl  w-full">
          <div>
            <div className="flex justify-between mb-1">
              <h3>Subtotal</h3>
              <h3>$201</h3>
            </div>
            <hr className="border-black border-2 mb-1" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <h3>Shipping</h3>
              <h3>$100</h3>
            </div>
            <hr className="border-black border-2 mb-1" />
          </div>
          <div>
            <div className="flex justify-between mb-1">
              <h3>Tax</h3>
              <h3>$50</h3>
            </div>
            <hr className="border-black border-2 mb-1" />
          </div>
          <div>
            <div className="flex justify-between ">
              <h3>Order</h3>
              <h3>$</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
