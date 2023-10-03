import stripe from "@/services/stripe";
import { ProductsType } from "@/types/products";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { Product } from "use-shopping-cart/core";
import { validateCartItems } from "use-shopping-cart/utilities";

//add try catch

export async function POST(req: NextRequest) {
  const cartDetails = await req.json();

  const baseURL = req.headers.get("origen");

  const stripeInventory = await stripe.products.list({
    expand: ["data.default_price"],
  });

  const products = stripeInventory.data.map((p: Stripe.Product): Product => {
    return {
      price: (p.default_price as Stripe.Price)?.unit_amount || 0,
      images: p.images[0],
      name: p.name,
      id: p.id.toString(),
      currency: (p.default_price as Stripe.Price)?.currency ?? "BRL",
    };
  });

  const line_items = validateCartItems(products, cartDetails);



  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    payment_method_types: ["card"],
    line_items: line_items,
    success_url: `http://localhost:3000/success`,
    cancel_url: `http://localhost:3000/`,
  });



  return NextResponse.json(session, { status: 200 });
}
