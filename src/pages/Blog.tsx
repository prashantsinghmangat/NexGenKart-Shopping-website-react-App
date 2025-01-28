import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "Fresh Groceries: A Guide to Healthy Shopping",
    excerpt: "Learn how to select the freshest produce and make healthier choices...",
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e"
  },
  {
    id: 2,
    title: "Organic vs. Conventional: Making the Right Choice",
    excerpt: "Understanding the differences between organic and conventional produce...",
    date: "2024-02-18",
    image: "https://images.unsplash.com/photo-1601275868395-b2480c162279"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-primary mb-8">Our Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link 
              key={post.id}
              to={`/blog/${post.id}`}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;