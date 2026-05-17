export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold mb-4 tracking-tight">
          Bizi<span className="text-yellow-400">litix</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8">
          Because data should not be boring.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
            Upload Your Data
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition">
            Explore Datasets
          </button>
        </div>
      </div>
    </main>
  );
}