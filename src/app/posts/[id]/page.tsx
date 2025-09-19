// src/app/posts/[id]/page.tsx
import Link from "next/link";
import Image from "next/image";
import { blogs, type Blog } from "@/app/data/blogs";

// ✅ Dynamic Metadata
export async function generateMetadata({ params }: { params: any }) {
  const blog = blogs.find((b) => b.id === parseInt(params.id));
  return {
    title: blog ? blog.title : "Blog Not Found",
    description: blog ? blog.excerpt : "Blog details page",
  };
}

// ✅ Blog Detail Page
export default function BlogDetail({ params }: { params: any }) {
  const blog: Blog | undefined = blogs.find((b) => b.id === parseInt(params.id));

  if (!blog) {
    return <p className="text-white p-5">Blog not found.</p>;
  }

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div
        className="card bg-dark text-light border-info p-4"
        style={{ maxWidth: "900px", width: "100%" }}
      >
        <Image
          src={blog.image}
          alt={blog.title}
          className="img-fluid mb-3 mx-auto d-block"
          width={800}
          height={250}
          style={{
            maxHeight: "250px",
            width: "70%",
            objectFit: "cover",
            borderRadius: "8px",
          }}
        />
        <h2 className="fw-bold text-center">{blog.title}</h2>
        <p className="text-info text-center mb-4">{blog.date}</p>
        <div className="px-2 mb-4">
          <p style={{ lineHeight: "1.8rem", fontSize: "1.05rem", color: "#ccc" }}>
            {blog.content}
          </p>
        </div>
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
