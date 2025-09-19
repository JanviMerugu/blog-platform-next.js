// src/app/data/blogs.ts

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export const blogs: Blog[] = [
  {
    id: 1,
    title: "Vacation Rental Safety: How to Ensure a Secure Stay",
    excerpt: "Explore top safety tips to ensure your vacation rental is secure and worry-free.",
    content:
      "Vacation rentals can be safe and comfortable if you take the right precautions. Always verify hosts on trusted platforms, check reviews carefully, and ask about neighborhood safety. Inspect locks, security systems, and emergency exits before booking. Share your itinerary with friends or family for added safety. A few extra steps can make your stay worry-free.",
    date: "Tue Sept 19 2023",
    image: "/blogs/blog1.png",
  },
  {
    id: 2,
    title: "How to Build a Positive Relationship with Tenants",
    excerpt: "Happy tenants mean fewer vacancies. Learn how to build rapport and trust.",
    content:
      "Building strong tenant relationships requires open communication and respect. Respond promptly to maintenance requests and ensure transparency in agreements. A positive landlord-tenant relationship encourages long-term stays, reduces conflicts, and creates a healthier living environment for everyone involved.",
    date: "Mon Sept 18 2023",
    image: "/blogs/blog2.png",
  },
  {
    id: 3,
    title: "Ideal Colour Palette for Everyday Interiors",
    excerpt: "From warm neutrals to fresh greens, here’s what interior designers recommend.",
    content:
      "Choosing the right color palette sets the mood of your home. Warm neutrals like beige and cream provide a calm base, while greens and blues bring freshness. Accent walls with bolder shades can add vibrancy without overwhelming the space. The goal is to balance style with comfort in everyday interiors.",
    date: "Sun Sept 17 2023",
    image: "/blogs/blog3.png",
  },
  {
    id: 4,
    title: "Unlocking Doors: Internship Opportunities at To-Let",
    excerpt: "Take a look into our internships that offer real-world housing market experience.",
    content:
      "Internships at To-Let Globe are designed to give students real-world exposure to the property rental industry. From digital marketing to client servicing, interns are mentored by professionals while contributing to impactful projects. It’s a great way to gain hands-on experience and explore career opportunities in real estate.",
    date: "Sat Sept 16 2023",
    image: "/blogs/blog4.png",
  },
  {
    id: 5,
    title: "Life at To-Let Globe: Our Culture, Stories & Smiles",
    excerpt: "Get a sneak peek into life behind the scenes with the To-Let Globe team.",
    content:
      "At To-Let Globe, we believe a strong culture drives innovation. Our team celebrates small wins, birthdays, and milestones together. We combine professionalism with a friendly environment where everyone’s voice is heard. Life here is a blend of hard work, learning, and shared success stories.",
    date: "Fri Sept 15 2023",
    image: "/blogs/blog5.png",
  },
  {
    id: 6,
    title: "Big Moves: Brands We’ve Partnered With This Year",
    excerpt: "See the companies that joined hands with us to change the rental space.",
    content:
      "2024 has been a year of exciting partnerships at To-Let Globe. From furniture rental companies to fintech startups, we’ve collaborated with brands that share our vision of making renting smarter and easier. These partnerships are built on trust, innovation, and a shared commitment to serving our users better.",
    date: "Thu Sept 14 2023",
    image: "/blogs/blog6.png",
  },
];
