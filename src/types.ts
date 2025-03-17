export interface ProductQuery {
  products?: string;
  page?: number;
  limit?: number;
  sort?: string;
  order?: string;
  priceMax?: number;
  playerMin?: number;
  playerMax?: number;
  tags?: string[];
  categories?: string[];
  difficulty?: string;
  duration?: string;
}

export interface Product {
  _id: string;
  language: string;
  name: string;
  description: string;
  price: number;
  playerCount: {
    min: number;
    max: number;
  };
  tags: Tag[];
  categories: Category[];
  difficulty: "easy" | "medium" | "hard";
  duration: "short" | "medium" | "long";
  image: string[];
  createdAt: string;
  updatedAt: string;
}

interface Tag {
  _id: string;
  name: string;
}

interface Category {
  _id: string;
  name: string;
}
