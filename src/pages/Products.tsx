import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import { Grid2X2, List } from "lucide-react";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isGridView, setIsGridView] = useState(true);

  const filteredProducts = selectedCategory === "All"
    ? products
    : products.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-gray-600 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={() => setIsGridView(true)}
              className={`rounded-lg p-2 ${
                isGridView ? "bg-primary text-white" : "bg-white text-gray-600"
              }`}
            >
              <Grid2X2 className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsGridView(false)}
              className={`rounded-lg p-2 ${
                !isGridView ? "bg-primary text-white" : "bg-white text-gray-600"
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div
          className={
            isGridView
              ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
              : "space-y-4"
          }
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;