"use client";

import { useCart } from "@/context/CartContext";

export default function AddToCartButton({
  product,
}: {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
  };
}) {
  const { addToCart } = useCart();

  return (
    <button
      onClick={() =>
        addToCart({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity: 1,
        })
      }
      className="
        border-2
        border-black
        px-6
        py-4
        rounded-2xl
        font-semibold
        hover:bg-black
        hover:text-white
        transition
      "
    >
      AJOUTER AU PANIER
    </button>
  );
}