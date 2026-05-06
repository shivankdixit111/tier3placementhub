"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy auth (frontend only)
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email }));
      router.push("/dashboard");
    } else {
      alert("Enter credentials");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-indigo-50 to-white">

      <div className="bg-white p-8 rounded-2xl shadow-xl w-96">

        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          🔐 Student Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-purple-600 transition"
        >
          Login
        </button>

      </div>
    </div>
  );
}