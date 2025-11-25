// src/pages/Login.js
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <form onSubmit={handleLogin} className="w-full max-w-md border rounded-lg p-6 space-y-4">
        <h2 className="text-2xl font-bold text-center">Log in</h2>
        {err && <div className="text-red-600 text-sm">{err}</div>}
        <div>
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <input
            className="w-full border rounded p-3"
            type="email"
            placeholder="you@kopmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-1">Password</label>
          <input
            className="w-full border rounded p-3"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            required
          />
        </div>
        <button className="w-full bg-[#C8102E] text-white py-2 rounded hover:opacity-90" type="submit">
          Log in
        </button>
        <p className="text-sm text-center">
          No account? <Link to="/signup" className="text-[#C8102E] font-medium">Sign up</Link>
        </p>
      </form>
    </div>
  );
}