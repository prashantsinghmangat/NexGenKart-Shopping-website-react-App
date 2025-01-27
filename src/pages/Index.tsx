import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";

const Index = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-primary py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Welcome to ShopHub
          </h1>
          <p className="mb-8 text-lg">Discover amazing products at great prices</p>
          <Link
            to="/products"
            className="rounded-full bg-accent px-8 py-3 font-semibold text-gray-800 transition-colors hover:bg-opacity-90"
          >
            Shop Now
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Shop by Category</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.slice(1).map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="rounded-lg bg-white p-6 text-center shadow-md transition-all hover:shadow-lg"
            >
              <h3 className="text-lg font-semibold">{category}</h3>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;