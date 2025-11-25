// src/pages/Home.js
import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import PostCard from "../components/PostCard";
import { Link } from "react-router-dom";

export default function Home({ user }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsub = onSnapshot(q, (snap) => {
      setPosts(snap.docs.map((d) => ({ id: d.id, ...d.data() })));
    });
    return () => unsub();
  }, []);

  return (
    <div className="space-y-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Liverpool FC Fan Feed</h1>
        <p className="text-gray-600">Share match reactions, player praise, and Anfield moments.</p>
        {user ? (
          <div className="mt-4">
            <Link to="/create" className="px-4 py-2 rounded bg-[#C8102E] text-white">Write a post</Link>
          </div>
        ) : (
          <p className="mt-3 text-sm">
            <Link to="/login" className="text-[#C8102E] font-medium">Log in</Link> to create a post.
          </p>
        )}
      </header>

      <section className="grid gap-4">
        {posts.length === 0 ? (
          <div className="text-center text-gray-600">No posts yet. Be the first to say “You’ll Never Walk Alone”.</div>
        ) : (
          posts.map((p) => <PostCard key={p.id} post={p} />)
        )}
      </section>
    </div>
  );
}