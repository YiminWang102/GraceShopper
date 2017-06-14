import React from 'react';
import PaymentForm from '../stripe/PaymentForm';

export default function Checkout (props) {
  return (
    <div>
      <h4>Total Price: {props.totalPrice} </h4>
      <PaymentForm/>
    </div>
  );
};
