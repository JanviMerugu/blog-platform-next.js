// src/app/posts/[id]/page.tsx
import Link from "next/link";
import { blogs } from "@/app/data/blogs";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === parseInt(params.id));
  return {
    title: blog ? blog.title : "Blog Not Found",
    description: blog ? blog.excerpt : "Blog details page",
  };
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return <p className="text-white p-5">Blog not found.</p>;
  }

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="card bg-dark text-light border-info p-4"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        {/* Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="img-fluid mb-3 mx-auto d-block"
          style={{
            maxHeight: "250px",
            width: "70%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />

        {/* Title & Date */}
        <h2 className="fw-bold text-center">{blog.title}</h2>
        <p className="text-info text-center mb-4">{blog.date}</p>

        {/* Content */}
        <div className="px-2 mb-4">
          <p
            style={{
              lineHeight: "1.8rem",
              fontSize: "1.05rem",
              color: "#ccc",
            }}
          >
            {blog.content}
          </p>
        </div>

        {/* Back Button */}
        <div className="text-center">
          <Link
            href="/"
            className="btn btn-info text-dark fw-bold px-4"
            style={{
              borderRadius: "6px",
              boxShadow: "0 0 10px rgba(0, 255, 255, 0.3)",
            }}
          >
            ⬅ Back to Blogs
          </Link>
        </div>
      </div>
    </div>
  );
}
