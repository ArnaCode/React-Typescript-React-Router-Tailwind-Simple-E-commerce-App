import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const productCount = cart.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <header className="bg-[#3B1C32]/50 p-6 sticky top-0 z-50 backdrop-blur-md">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            <Link to="/" className="text-2xl">
              Home
            </Link>
          </li>

          <li>
            <Link to="/cart" className="flex gap-x-2">
              <ShoppingCart className="size-10" />
              {productCount > 0 && (
                <span className="bg-[#A64D79] text-white text-lg rounded-full w-8 h-8 flex items-center justify-center">
                  {productCount}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
