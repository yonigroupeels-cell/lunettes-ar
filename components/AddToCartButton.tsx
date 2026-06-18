"use client";

import { useState } from "react";
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

  const [showPopup, setShowPopup] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity: 1,
    });

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 2000);
  };

  return (
    <>
      {showPopup && (
        <div
          className="
            fixed
            top-6
            right-6
            z-50
            bg-green-600
            text-white
            px-6
            py-3
            rounded-xl
            shadow-lg
          "
        >
          Produit ajouté au panier ✓
        </div>
      )}

      <button
        onClick={handleAddToCart}
        className="
          bg-black
          text-white
          px-4
          py-2
          rounded-lg
        "
      >
        Commander
      </button>
    </>
  );
}