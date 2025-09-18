// src/pages/api/posts/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { blogs } from "@/app/data/blogs";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(blogs);
  }
  res.status(405).json({ message: "Method Not Allowed" });
}
