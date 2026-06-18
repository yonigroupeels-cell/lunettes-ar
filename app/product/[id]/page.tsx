import AddToCartButton from "@/components/AddToCartButton";
import ProductGallery from "@/components/ProductGallery";
import Link from "next/link";
import { products } from "@/data/products";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="max-w-7xl mx-auto p-8">
        Produit introuvable
      </main>
    );
  }

  return (
    <main className="max-w-7xl mx-auto p-8">

      {/* FICHE PRODUIT */}

      <div className="grid lg:grid-cols-[60%_40%] gap-16 items-start">

        {/* COLONNE IMAGE */}

        <div>

<ProductGallery
  images={product.images}
  name={product.name}
/>

        </div>

        {/* COLONNE INFOS */}

        <div>

<div className="mb-4 text-yellow-500 text-lg">
  ★★★★★ <span className="text-gray-500 text-sm">(128 avis)</span>
</div>


          <h1 className="text-5xl font-bold leading-tight">
            {product.name}
          </h1>

          <div className="flex items-center gap-3 mt-6">

            {product.oldPrice && (
              <span className="text-gray-500 line-through text-xl">
                {product.oldPrice.toLocaleString("fr-FR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })} €
              </span>
            )}

            <span className="text-3xl font-bold">
              {product.price.toLocaleString("fr-FR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })} €
            </span>

          </div>

          <div className="mt-6 space-y-2 text-sm">

  <p>✓ Livraison offerte</p>

  <p>✓ Retour sous 30 jours</p>

  <p>✓ Paiement sécurisé</p>

  <p>✓ Essayage AR inclus</p>

</div>

         <div className="mt-8 bg-white p-6 rounded-2xl shadow-sm">

  <h3 className="font-semibold mb-3">
    Description
  </h3>

  <p className="text-gray-600 leading-relaxed">
    {product.description}
  </p>

</div>

          <div className="flex flex-col gap-4 mt-10">

            <Link
              href={`/viewer?model=${encodeURIComponent(product.model)}`}
              className="
bg-black
text-white
px-6
py-4
rounded-2xl
text-center
font-semibold
hover:opacity-90
transition
"
            >
              ESSAYER EN AR
            </Link>

<AddToCartButton product={product} />

          </div>

        </div>

      </div>

      {/* VOUS AIMEREZ AUSSI */}

      <section className="mt-24 bg-white rounded-3xl p-10 shadow-sm">

        <h2 className="text-4xl font-bold text-center mb-12">
          Vous aimerez aussi
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {products
            .filter((p) => p.id !== product.id)
            .slice(0, 8)
            .map((p) => (

              <Link
                key={p.id}
                href={`/product/${p.id}`}
                className="block"
              >

                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-full h-72 object-cover rounded-xl"
                />

                <h3 className="mt-3 font-medium">
                  {p.name}
                </h3>

                <p className="mt-1">

                  {p.oldPrice && (
                    <span className="line-through text-gray-500 mr-2">
                      {p.oldPrice.toLocaleString("fr-FR", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })} €
                    </span>
                  )}

                  <span className="font-semibold">
                    {p.price.toLocaleString("fr-FR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })} €
                  </span>

                </p>

              </Link>

            ))}

        </div>

        <div className="flex justify-center mt-12">

          <Link
            href="/collection"
            className="px-10 py-4 border-2 border-black font-semibold tracking-wider hover:bg-black hover:text-white transition"
          >
            VOIR TOUTE LA COLLECTION
          </Link>

        </div>

      </section>

    </main>
  );
}