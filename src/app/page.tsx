"use client";

import useSWR from "swr";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import type { Blog } from "@/app/data/blogs";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BlogList() {
  const { data: blogs, error } = useSWR<Blog[]>("/api/posts", fetcher);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  if (error) return <p className="text-danger">❌ Failed to load blogs</p>;
  if (!blogs) return <p className="text-info">⏳ Loading...</p>;

  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const displayedBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="container py-5 text-white">
      <h2 className="text-center mb-2">Rental Tips & Blog</h2>
      <p className="text-center mb-4">Helpful articles for landlords and tenants</p>

      {/* Blog Grid */}
      <div className="row">
        {displayedBlogs.map((blog) => (
          <div className="col-md-4 mb-4" key={blog.id}>
            <div className="card bg-dark text-light border-info h-100">
              <Image
                src={blog.image}
                className="card-img-top"
                alt={blog.title}
                width={400}
                height={200}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <p className="text-info mb-1">{blog.date}</p>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.excerpt}</p>
                <Link href={`/posts/${blog.id}`} className="text-info fw-bold">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-info mx-2"
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="align-self-center text-info">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="btn btn-outline-info mx-2"
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
