"use client";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push("/auth");
      } else {
        setUser(session.user);
      }
    };
    getUser();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-gray-800">
        <div className="text-2xl font-bold">
          Bizi<span className="text-yellow-400">litix</span>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-gray-400 text-sm">{user?.email}</span>
          <button
            onClick={async () => {
              await supabase.auth.signOut();
              router.push("/");
            }}
            className="border border-gray-600 text-white px-4 py-2 rounded-full text-sm hover:border-yellow-400 hover:text-yellow-400 transition"
          >
            Sign Out
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="px-10 py-12">
        
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold mb-2">
            Welcome back 👋
          </h1>
          <p className="text-gray-400">
            Your data is waiting. Let's see what it's hiding today. 🕵️
          </p>
        </div>

        {/* Projects Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Projects</h2>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition">
            + New Project
          </button>
        </div>

        {/* Empty State */}
        <div className="border border-dashed border-gray-700 rounded-2xl p-16 text-center">
          <div className="text-5xl mb-4">📂</div>
          <h3 className="text-xl font-semibold mb-2">No projects yet</h3>
          <p className="text-gray-400 mb-6">
            Your future insights are just one upload away. <br />
            No pressure. We believe in you. Mostly. 😄
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 transition">
            Create Your First Project
          </button>
        </div>

      </div>
    </main>
  );
}