import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

export async function POST(req: Request) {
  const { cart } = await req.json();

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],

    line_items: cart.map((item: any) => ({
      price_data: {
        currency: "eur",

        product_data: {
          name: item.name,
        },

        unit_amount: Math.round(item.price * 100),
      },

      quantity: item.quantity,
    })),

    mode: "payment",

    success_url: `${req.headers.get(
      "origin"
    )}/success`,

    cancel_url: `${req.headers.get(
      "origin"
    )}/cart`,
  });

  return NextResponse.json({
    url: session.url,
  });
}