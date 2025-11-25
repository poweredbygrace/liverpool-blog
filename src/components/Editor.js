// src/components/Editor.js
export default function Editor({ title, setTitle, content, setContent }) {
  return (
    <div className="space-y-4">
      <input
        className="w-full border rounded p-3 text-lg"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className="w-full border rounded p-3 h-40"
        placeholder="Share your thoughts about Liverpool..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
    </div>
  );
}