import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    if (!title.trim() || !content.trim()) {
      setErr("Please enter both title and content.");
      return;
    }
    try {
      setSaving(true);
      await addDoc(collection(db, "posts"), {
        title: title.trim(),
        content: content.trim(),
        author: auth.currentUser?.email || "Anonymous",
        createdAt: serverTimestamp(),
        reactions: 0,
      });
      navigate("/");
    } catch (error) {
      setErr(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
        <div className="mb-8">
          <h2 className="text-3xl font-black text-gray-900 mb-2">Create Your Post</h2>
          <p className="text-gray-600">Share your Liverpool passion with the community</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g., What a Match Against United!"
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 text-lg font-semibold"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Your Thoughts</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Share your match reactions, player praise, or Anfield memories..."
              rows={8}
              className="w-full px-4 py-4 rounded-2xl border-2 border-gray-200 focus:border-red-500 focus:outline-none transition-colors duration-300 resize-none"
              required
            />
          </div>

          {err && <div className="text-red-600 font-medium">{err}</div>}

          <div className="flex items-center gap-4">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-6 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 text-white font-black text-lg shadow-lg shadow-red-500/30 hover:shadow-red-500/50 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100"
            >
              {saving ? "Publishing..." : "🚀 Publish Post"}
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="px-6 py-4 rounded-2xl border-2 border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-all duration-300"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}