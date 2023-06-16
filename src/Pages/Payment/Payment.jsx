import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckOutForm from "./CheckOutForm";
import { Elements } from "@stripe/react-stripe-js";
import KeenSlider from "../KeenSlider/KeenSlider";
import { Helmet } from "react-helmet-async";

// TODO: PRovide Publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_GateWay_PK);
const Payment = () => {
  return (
    <div>
      <Helmet>
        <title>LOTUSGROVE || DASHBOARD - PAYMENT</title>
      </Helmet>
      <KeenSlider keenTitle="PAYMENT" />

      <div className="mt-6">
        <Elements stripe={stripePromise}>
          <CheckOutForm></CheckOutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
