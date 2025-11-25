// src/pages/CreatePost.js
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "../firebase";
import Editor from "../components/Editor";
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
      });
      navigate("/");
    } catch (error) {
      setErr(error.message);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold">Create a new post</h2>
        <p className="text-gray-600">Keep it kind. Keep it Kop.</p>
      </header>

      <form onSubmit={handleSubmit} className="space-y-4">
        <Editor title={title} setTitle={setTitle} content={content} setContent={setContent} />
        {err && <div className="text-red-600 text-sm">{err}</div>}
        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 rounded bg-[#C8102E] text-white disabled:opacity-50"
          >
            {saving ? "Posting..." : "Post"}
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded border"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}