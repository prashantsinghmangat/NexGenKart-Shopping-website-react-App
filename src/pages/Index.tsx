import { Link } from "react-router-dom";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden bg-pink-100">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">Fresh and Organic</h2>
              <p className="text-gray-600 mb-6">Discover nature's best, delivered to your doorstep</p>
              <Link to="/products">
                <Button>Shop Now</Button>
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1601275868395-b2480c162279"
              alt="Fresh Produce"
              className="absolute right-0 bottom-0 w-1/2 h-full object-cover"
            />
          </div>
          <div className="relative rounded-2xl overflow-hidden bg-blue-100">
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">Daily Fresh</h2>
              <p className="text-gray-600 mb-6">Get fresh groceries delivered daily</p>
              <Link to="/products">
                <Button>Explore</Button>
              </Link>
            </div>
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e"
              alt="Fresh Delivery"
              className="absolute right-0 bottom-0 w-1/2 h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Categories</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {categories.slice(1).map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-lg font-semibold">{category}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Products */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;