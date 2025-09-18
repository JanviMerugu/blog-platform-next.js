// pages/blogs/index.tsx
import Link from "next/link";

export async function getStaticProps() {
  // Normally fetch from API or database
  const blogs = [
    { id: 1, title: "Vacation Rental Safety", excerpt: "Stay safe while traveling." },
    { id: 2, title: "Positive Tenant Relationships", excerpt: "Happy tenants, fewer vacancies." },
  ];

  return {
    props: { blogs },
  };
}

export default function Blogs({ blogs }: { blogs: any[] }) {
  return (
    <div style={{ padding: "20px", color: "white", background: "black" }}>
      <h1>Static Blogs (getStaticProps)</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
            <p>{blog.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
