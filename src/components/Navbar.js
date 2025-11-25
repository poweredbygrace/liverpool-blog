// src/components/Navbar.js
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ user, onLogout }) {
  const { pathname } = useLocation();

  return (
    <header className="border-b">
      <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#C8102E]" />
          <span className="font-bold text-lg">YNWA</span>
        </Link>

        <nav className="flex items-center gap-3">
          <Link
            to="/"
            className={`px-3 py-1 rounded ${pathname === "/" ? "bg-[#C8102E] text-white" : "hover:bg-gray-100"}`}
          >
            Home
          </Link>
          {user ? (
            <>
              <Link
                to="/create"
                className={`px-3 py-1 rounded ${
                  pathname === "/create" ? "bg-[#C8102E] text-white" : "hover:bg-gray-100"
                }`}
              >
                Create
              </Link>
              <span className="text-sm text-gray-600">Signed in as {user.email}</span>
              <button
                onClick={onLogout}
                className="px-3 py-1 rounded bg-gray-900 text-white hover:opacity-90"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 rounded hover:bg-gray-100">Login</Link>
              <Link to="/signup" className="px-3 py-1 rounded hover:bg-gray-100">Signup</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}