export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800">
        <div className="text-2xl font-bold">
          Bizi<span className="text-yellow-400">litix</span>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-400 hover:text-white transition px-4 py-2">
            Log In
          </button>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32">
        <div className="text-sm text-yellow-400 font-semibold mb-4 tracking-widest uppercase">
          Your AI Analyst. On Autopilot.
        </div>
        <h1 className="text-6xl font-bold mb-6 leading-tight max-w-3xl">
          Data analysis that does not make you want to cry 😭
        </h1>
        <p className="text-gray-400 text-xl mb-10 max-w-xl">
          Upload your data. Tell us what you want — or do not. 
          Bizilitix figures it out, cracks a joke or two, 
          and hands you a boardroom-ready report. 
        </p>
        <div className="flex gap-4">
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition text-lg">
            Upload Your Data
          </button>
          <button className="border border-gray-600 text-white px-8 py-3 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition text-lg">
            Explore Datasets
          </button>
        </div>
      </section>

      {/* Fun Stats Bar */}
      <section className="border-t border-gray-800 py-10 px-10">
        <div className="flex justify-center gap-20 text-center">
          <div>
            <div className="text-4xl font-bold text-yellow-400">0</div>
            <div className="text-gray-400 mt-1">Boring Reports Generated</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400">∞</div>
            <div className="text-gray-400 mt-1">Insights Waiting in Your Data</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-yellow-400">1</div>
            <div className="text-gray-400 mt-1">Platform That Gets It</div>
          </div>
        </div>
      </section>

    </main>
  );
}