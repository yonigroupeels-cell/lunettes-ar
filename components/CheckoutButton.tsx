"use client";

import { useCart } from "@/context/CartContext";

export default function CheckoutButton() {
  const { cart } = useCart();

  const handleCheckout = async () => {
    const response = await fetch(
      "/api/checkout",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json",
        },

        body: JSON.stringify({
          cart,
        }),
      }
    );

    const data = await response.json();

    window.location.href = data.url;
  };

  return (
    <button
      onClick={handleCheckout}
      className="
        mt-6
        w-full
        bg-black
        text-white
        py-4
        rounded-2xl
        font-semibold
      "
    >
      COMMANDER
    </button>
  );
}