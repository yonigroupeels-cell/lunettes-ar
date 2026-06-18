import Link from "next/link";
import { products } from "@/data/products";

export default function CollectionPage() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">
        Collection
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

            <div className="p-4">
              <h2 className="text-xl font-semibold">
                {product.name}
              </h2>

<div className="mt-2 flex items-center gap-2">

  {product.oldPrice && (
    <span className="text-gray-500 line-through">
      {product.oldPrice.toFixed(2).replace(".", ",")} €
    </span>
  )}

  <span className="text-xl font-bold text-black-600">
    {product.price.toFixed(2).replace(".", ",")} €
  </span>

</div>

              <Link
                href={`/product/${product.id}`}
                className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg"
              >
                Voir
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}