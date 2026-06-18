"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  const totalItems = cart.reduce(
    (acc, item) => acc + item.quantity,
    0
  );

  return (
    <nav className="py-6 bg-white relative">
      
      <div className="flex justify-center">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Yoni Eyewear"
            width={250}
            height={80}
            priority
            className="h-12 w-auto"
          />
        </Link>
      </div>

      <div className="absolute right-8 top-1/2 -translate-y-1/2">
        <Link href="/cart" className="font-semibold">
          🛒 {totalItems}
        </Link>
      </div>

    </nav>
  );
}