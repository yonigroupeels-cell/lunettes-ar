import Link from "next/link";
import { products } from "@/data/products";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

<section className="relative">

  <img
    src="/hero.jpg"
    alt="Hero"
    className="w-full h-auto"
  />

  <div className="absolute inset-0 bg-black/20" />

  <div className="absolute inset-0 flex items-center justify-center">
    <div className="text-center px-6 text-white">

      <p className="uppercase tracking-[0.3em] text-sm mb-4">
        Premium Sunglasses
      </p>

      <h1 className="text-6xl md:text-8xl font-bold">
        MissKCY 
      </h1>

      <h2 className="text-2xl md:text-3xl mt-4">
        EYEWEAR
      </h2>

      <p className="mt-8 max-w-xl mx-auto">
        Découvrez notre collection de lunettes de soleil et
        essayez-les directement en réalité augmentée depuis votre téléphone.
      </p>

      <Link
        href="/collection"
        className="inline-block mt-10 px-8 py-4 bg-black text-white rounded-full"
      >
        Découvrir la collection
      </Link>

    </div>
  </div>

</section>

      {/* COLLECTION */}

<section className="py-24 px-6 max-w-7xl mx-auto">

  <h2 className="text-4xl font-bold text-center mb-12">
    Nos Produits Phares
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

    {products.filter((product) => product.featured).map((product) => (
      <div
        key={product.id}
        className="border rounded-2xl overflow-hidden"
      >
<img
  src={product.images[0]}
  alt={product.name}
  className="w-full h-80 object-cover"
/>

        <div className="p-6">

          <h3 className="text-xl font-semibold">
            {product.name}
          </h3>

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
            Voir le produit
          </Link>

        </div>
      </div>
    ))}

  </div>

  <div className="flex justify-center mt-12">
  <Link
    href="/collection"
    className="px-10 py-4 border-2 border-black text-black font-semibold tracking-wider hover:bg-black hover:text-white transition"
  >
    VOIR TOUTE LA COLLECTION
  </Link>
</div>

</section>

      {/* AR */}

      <section className="bg-black text-white py-24 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold">
            Essayage en Réalité Augmentée
          </h2>

          <p className="mt-6 text-gray-300">
            Visualisez instantanément vos lunettes avant achat grâce
            à notre technologie de try-on AR.
          </p>

        </div>

      </section>

      

      {/* FOOTER */}

      <footer className="py-10 text-center text-sm text-gray-500">
        © 2026 Misskcy Eyewear
      </footer>

    </main>
  );
}