import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Fresh Pomegranate",
    price: 4.99,
    description: "Sweet and juicy pomegranate, rich in antioxidants.",
    image: "https://images.unsplash.com/photo-1601275868395-b2480c162279",
    category: "Fruits",
  },
  {
    id: 2,
    name: "Organic Guava",
    price: 3.99,
    description: "Fresh organic guava, perfect for smoothies and snacks.",
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46",
    category: "Fruits",
  },
  {
    id: 3,
    name: "Fresh Carrots Bundle",
    price: 2.99,
    description: "Organic carrots, freshly harvested.",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37",
    category: "Vegetables",
  },
  {
    id: 4,
    name: "Organic Spinach",
    price: 3.49,
    description: "Fresh organic spinach leaves.",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb",
    category: "Vegetables",
  },
  {
    id: 5,
    name: "Whole Grain Bread",
    price: 4.49,
    description: "Freshly baked whole grain bread.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    category: "Bakery",
  },
  {
    id: 6,
    name: "Organic Milk",
    price: 5.99,
    description: "Fresh organic whole milk.",
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b",
    category: "Dairy",
  },
  {
    id: 7,
    name: "Free Range Eggs",
    price: 6.99,
    description: "Farm fresh free-range eggs.",
    image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f",
    category: "Dairy",
  },
  {
    id: 8,
    name: "Organic Honey",
    price: 8.99,
    description: "Pure organic honey from local farms.",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38",
    category: "Pantry",
  },
  {
    id: 9,
    name: "Premium Rice",
    price: 12.99,
    description: "Premium quality basmati rice.",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
    category: "Pantry",
  },
  {
    id: 10,
    name: "Organic Tomatoes",
    price: 3.99,
    description: "Fresh organic tomatoes.",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
    category: "Vegetables",
  }
];

export const categories = ["All", "Fruits", "Vegetables", "Dairy", "Bakery", "Pantry"];