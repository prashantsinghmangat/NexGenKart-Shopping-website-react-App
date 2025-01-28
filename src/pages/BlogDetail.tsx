import { useParams } from "react-router-dom";

const blogPosts = {
  1: {
    title: "Fresh Groceries: A Guide to Healthy Shopping",
    content: `Shopping for fresh groceries is an art that requires knowledge and attention to detail. 
    In this guide, we'll explore how to select the freshest produce, understand seasonal availability, 
    and make healthier choices for your family.`,
    date: "2024-02-20",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e"
  },
  2: {
    title: "Organic vs. Conventional: Making the Right Choice",
    content: `Understanding the differences between organic and conventional produce is crucial for 
    making informed shopping decisions. We'll discuss the benefits and considerations of each option, 
    helping you make the best choice for your needs and budget.`,
    date: "2024-02-18",
    image: "https://images.unsplash.com/photo-1601275868395-b2480c162279"
  }
};

const BlogDetail = () => {
  const { id } = useParams();
  const post = blogPosts[Number(id)];

  if (!post) {
    return <div className="container mx-auto px-4 py-12">Post not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-64 object-cover rounded-xl mb-8"
          />
          <h1 className="text-4xl font-bold text-primary mb-4">{post.title}</h1>
          <p className="text-gray-500 mb-8">{post.date}</p>
          <div className="prose prose-lg max-w-none">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;