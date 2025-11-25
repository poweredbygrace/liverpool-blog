import { Home, PenSquare, LogIn, LogOut, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function ModernNavbar({ user, onLogout }) {
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg shadow-red-500/30 group-hover:shadow-red-500/50 transition-all duration-300">
                <span className="text-white font-black text-xl">LFC</span>
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-pulse" />
            </div>
            <div>
              <h1 className="font-black text-2xl bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent">
                YNWA
              </h1>
              <p className="text-xs text-gray-500 font-medium">Fan Community</p>
            </div>
          </Link>

          {/* Nav Items */}
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                pathname === "/" 
                  ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              <Home size={18} />
              <span className="hidden sm:inline">Feed</span>
            </Link>

            {user ? (
              <>
                <Link
                  to="/create"
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    pathname === "/create"
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <PenSquare size={18} />
                  <span className="hidden sm:inline">Create</span>
                </Link>
                
                <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl">
                  <User size={16} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-700">{user.email}</span>
                </div>

                <button
                  onClick={onLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-all duration-300"
                >
                  <LogOut size={18} />
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-gray-600 hover:bg-gray-100 transition-all duration-300"
                >
                  <LogIn size={18} />
                  <span className="hidden sm:inline">Login</span>
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 rounded-xl font-medium bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}