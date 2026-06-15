export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="text-5xl font-bold mb-4">
        Yoni Eyewear
      </h1>

      <p className="text-center text-lg max-w-md mb-8">
        Découvrez notre collection de lunettes de soleil et essayez-les en réalité augmentée.
      </p>

      <button className="bg-black text-white px-6 py-3 rounded-xl">
        Découvrir la collection
      </button>
    </main>
  );
}