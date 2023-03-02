import React from "react";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;

let cart = ["Watch", "Glasses"];
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
function createOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (!validCart()) {
      const err = new Error("Invalid Cart!");
      reject(err);
    }
    const orderId = "12345";
    if (orderId) {
      resolve(orderId);
    }
  });
}
function proceedToPayment(paymentInfo) {
  return new Promise((resolve, reject) => {
    reject("Payment Failed - " + paymentInfo);
  });
}
function validCart() {
  return true;
}
