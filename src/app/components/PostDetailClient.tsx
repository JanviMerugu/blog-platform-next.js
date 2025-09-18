"use client"; // ✅ this makes it a Client Component

import { useState } from "react";

export default function PostDetailClient({ blog }: { blog: any }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className="text-center mt-4">
      <button
        onClick={() => setLiked(!liked)}
        className="btn btn-outline-info"
      >
        {liked ? "❤️ Liked" : "♡ Like"}
      </button>
    </div>
  );
}
