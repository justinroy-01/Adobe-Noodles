export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  features: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  rating: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface FlavorGeneration {
  name: string;
  description: string;
  image: string;
}