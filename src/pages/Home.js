import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import ModernPostCard from "../components/ModernPostCard";
import HeroSection from "../components/HeroSection";

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
      <HeroSection user={user} />
      <div className="space-y-6">
        {posts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-600 text-lg">No posts yet. Be the first to say "You'll Never Walk Alone".</p>
          </div>
        ) : (
          posts.map((p) => <ModernPostCard key={p.id} post={p} />)
        )}
      </div>
    </div>
  );
}