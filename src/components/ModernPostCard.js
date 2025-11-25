import { useState } from 'react';
import { Clock, TrendingUp } from 'lucide-react';

export default function ModernPostCard({ post }) {
  const [isLiked, setIsLiked] = useState(false);
  
  const timeAgo = (timestamp) => {
    if (!timestamp) return 'Just now';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const hours = Math.floor((Date.now() - date) / (1000 * 60 * 60));
    if (hours < 1) return 'Just now';
    if (hours === 1) return '1 hour ago';
    if (hours < 24) return `${hours} hours ago`;
    return `${Math.floor(hours / 24)} days ago`;
  };

  return (
    <article className="group relative bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-red-200">
      {/* Gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-red-500 to-yellow-400 rounded-t-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-sm">
              {post.author ? post.author[0].toUpperCase() : 'A'}
            </span>
          </div>
          <div>
            <p className="font-bold text-gray-900">{post.author || 'Anonymous'}</p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Clock size={12} />
              <span>{timeAgo(post.createdAt)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-red-50 text-red-600">
          <TrendingUp size={14} />
          <span className="text-sm font-bold">{post.reactions || 0}</span>
        </div>
      </div>

      <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
        {post.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-4">
        {post.content}
      </p>

      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
            isLiked
              ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/30'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className={isLiked ? 'scale-110' : ''}>❤️</span>
          <span className="text-sm">Like</span>
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-xl font-medium bg-gray-100 text-gray-600 hover:bg-gray-200 transition-all duration-300">
          <span>💬</span>
          <span className="text-sm">Comment</span>
        </button>
      </div>
    </article>
  );
}