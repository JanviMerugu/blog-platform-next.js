// src/pages/api/posts/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import { blogs } from "@/app/data/blogs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const blog = blogs.find((b) => b.id === parseInt(id as string));

  if (blog) {
    res.status(200).json(blog);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
}
