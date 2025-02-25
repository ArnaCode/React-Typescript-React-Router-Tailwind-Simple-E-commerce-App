export interface CartItem {
  productId: number;
  quantity: number;
}

export interface Product {
  id: number;
  url: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: Review[];
}

interface CartProduct extends Product {
  quantity: number;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ReviewsProps {
  reviews: Review[];
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  deleteFromCart: (productId: number) => void;
  getProductQuantity: (productId: number) => number;
  cartTotal: number;
  cartProducts: CartProduct[];
}
