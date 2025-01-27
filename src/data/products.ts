import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Ergonomic Office Chair",
    price: 199.99,
    description: "Comfortable office chair with lumbar support.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Furniture",
  },
  {
    id: 3,
    name: "Smart Watch Pro",
    price: 399.99,
    description: "Advanced smartwatch with health tracking features.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
    category: "Electronics",
  },
];

export const categories = ["All", "Electronics", "Furniture", "Clothing", "Books"];