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
    name: "Smart Watch Pro",
    price: 399.99,
    description: "Advanced smartwatch with health tracking features.",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12",
    category: "Electronics",
  },
  {
    id: 3,
    name: "Cotton Casual T-Shirt",
    price: 24.99,
    description: "Comfortable cotton t-shirt for everyday wear.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    category: "Clothing",
  },
  {
    id: 4,
    name: "Denim Jeans",
    price: 59.99,
    description: "Classic fit denim jeans with premium quality.",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d",
    category: "Clothing",
  },
  {
    id: 5,
    name: "Best-Selling Novel",
    price: 19.99,
    description: "Award-winning fiction novel, hardcover edition.",
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
    category: "Books",
  },
  {
    id: 6,
    name: "Self-Help Book",
    price: 24.99,
    description: "Popular self-improvement book with practical tips.",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    category: "Books",
  },
  {
    id: 7,
    name: "Garden Tool Set",
    price: 49.99,
    description: "Complete set of essential gardening tools.",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b",
    category: "Home & Garden",
  },
  {
    id: 8,
    name: "Indoor Plant Pot",
    price: 29.99,
    description: "Decorative ceramic pot for indoor plants.",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411",
    category: "Home & Garden",
  },
];

export const categories = ["All", "Electronics", "Clothing", "Books", "Home & Garden"];