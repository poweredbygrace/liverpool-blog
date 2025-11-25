import { Link } from 'react-router-dom';

export default function HeroSection({ user }) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-600 via-red-700 to-red-900 p-8 md:p-12 mb-8 shadow-2xl shadow-red-500/30">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-white rounded-full animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-24 h-24 border-4 border-white rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="relative z-10 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-black mb-4">
          You'll Never Walk Alone
        </h2>
        <p className="text-xl md:text-2xl font-medium text-red-100 mb-6">
          Share your passion. Connect with fellow Reds. Live the Liverpool way.
        </p>
        
        {user ? (
          <Link
            to="/create"
            className="inline-block px-8 py-4 rounded-2xl bg-white text-red-700 font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-white/30"
          >
            ✍️ Share Your Thoughts
          </Link>
        ) : (
          <div className="flex items-center justify-center gap-4">
            <Link
              to="/login"
              className="px-8 py-4 rounded-2xl bg-white text-red-700 font-black text-lg shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Join the Community
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}