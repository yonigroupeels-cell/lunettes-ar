"use client";
import CheckoutButton from "@/components/CheckoutButton";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <main className="max-w-6xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-10">
        Mon panier
      </h1>

      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <>
          <div className="space-y-6">

            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white p-6 rounded-2xl shadow-sm flex gap-6 items-center"
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  width={120}
                  height={120}
                  className="rounded-xl object-cover"
                />

                <div className="flex-1">

                  <h2 className="font-semibold text-xl">
                    {item.name}
                  </h2>

                  <p className="mt-2">
                    {item.price.toLocaleString("fr-FR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })} €
                  </p>

                  <div className="flex items-center gap-4 mt-4">

                    <button
                      onClick={() =>
                        decreaseQuantity(item.id)
                      }
                      className="border px-3 py-1 rounded"
                    >
                      -
                    </button>

                    <span>
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(item.id)
                      }
                      className="border px-3 py-1 rounded"
                    >
                      +
                    </button>

                  </div>

                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                  className="text-red-500"
                >
                  Supprimer
                </button>
              </div>
            ))}

          </div>

          <div className="mt-10 bg-white p-8 rounded-2xl shadow-sm">

            <h2 className="text-2xl font-bold">
              Total
            </h2>

            <p className="text-3xl font-bold mt-4">
              {total.toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} €
            </p>

<CheckoutButton />

          </div>
        </>
      )}
    </main>
  );
}