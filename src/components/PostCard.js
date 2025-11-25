// src/components/PostCard.js
export default function PostCard({ post }) {
  const date = post.createdAt?.toDate ? post.createdAt.toDate() : null;

  return (
    <article className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <div className="text-sm text-gray-600 mt-1">
        <span className="font-medium text-[#C8102E]">{post.author}</span>
        {date ? ` • ${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}` : ""}
      </div>
      <p className="mt-3 text-gray-800 line-clamp-3">{post.content}</p>
    </article>
  );
} 