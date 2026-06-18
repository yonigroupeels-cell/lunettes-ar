import Link from "next/link";
import { products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

export default function CollectionPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        Collection
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow-sm"
          >
<img
  src={product.images[0]}
  alt={product.name}
  className="w-full h-80 object-cover"
/>

            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">
                {product.name}
              </h2>

<div className="mt-2 flex items-center justify-center gap-2">

  {product.oldPrice && (
    <span className="text-gray-500 line-through">
      {product.oldPrice.toFixed(2).replace(".", ",")} €
    </span>
  )}

  <span className="text-xl font-bold text-black-600">
    {product.price.toFixed(2).replace(".", ",")} €
  </span>

</div>

<div className="mt-4 flex justify-center gap-3">

  <Link
    href={`/product/${product.id}`}
    className="bg-white border border-black text-black px-4 py-2 rounded-lg"
  >
    Voir le produit
  </Link>

  <AddToCartButton
    product={product}
  />

</div>

            </div>
          </div>
        ))}
      </div>
    </main>
  );
}