'use client'
import React from "react";
import { CartProvider } from "use-shopping-cart";
const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
const AppCardProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey!}
      currency="BRL"
      shouldPersist
    >
      {children}
    </CartProvider>
  );
};

export default AppCardProvider;
