"use client";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    setMessage("");

    if (isLogin) {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) setMessage(error.message);
      else setMessage("Welcome back! Redirecting... 🚀");
    } else {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) setMessage(error.message);
      else setMessage("Account created! Check your email to confirm. 🎉");
    }
    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      {/* Logo */}
      <div className="text-3xl font-bold mb-8">
        Bizi<span className="text-yellow-400">litix</span>
      </div>

      {/* Card */}
      <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 w-full max-w-md">
        
        {/* Toggle */}
        <div className="flex mb-6 bg-gray-800 rounded-full p-1">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              isLogin ? "bg-yellow-400 text-black" : "text-gray-400"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-full text-sm font-semibold transition ${
              !isLogin ? "bg-yellow-400 text-black" : "text-gray-400"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Heading */}
        <h1 className="text-2xl font-bold mb-2">
          {isLogin ? "Welcome back 👋" : "Join the fun 🎉"}
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          {isLogin
            ? "Your data missed you. Probably."
            : "Create an account. Your data won't analyze itself."}
        </p>

        {/* Inputs */}
        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 mb-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 mb-6 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
        />

        {/* Button */}
        <button
          onClick={handleAuth}
          disabled={loading}
          className="w-full bg-yellow-400 text-black font-bold py-3 rounded-xl hover:bg-yellow-300 transition disabled:opacity-50"
        >
          {loading ? "Hang on..." : isLogin ? "Log In" : "Create Account"}
        </button>

        {/* Message */}
        {message && (
          <p className="text-center text-sm mt-4 text-yellow-400">{message}</p>
        )}
      </div>
    </main>
  );
}