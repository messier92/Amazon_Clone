import React from 'react'
import Header from '../../container/Header/Header.js';
import Payment from '../../container/Payment/Payment.js';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51LNf2AInLwluiTeL57lTAOQNPTwgWXWn6PVKJdmX6X8PbpOZDhLTPhIBDZzkv6ddbrMM0Bu8jCjOb3uJtz7U4Rjo001sp7MRnf');

function PaymentPage() {
  return (
    <>
        <Header/>
        <Elements stripe={promise}>
        <Payment/>
        </Elements>
    </>
  )
}

export default PaymentPage;