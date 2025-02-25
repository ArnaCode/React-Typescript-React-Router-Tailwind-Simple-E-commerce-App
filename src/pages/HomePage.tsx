import { ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";

export default function HomePage() {
  // Consume the Context
  const { addToCart } = useCart();

  return (
    <>
      <section className="flex flex-col gap-8">
        <h1 className="text-4xl font-bold"> Gaming Products</h1>

        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-y-6 border-l border-[#A64D79] pl-4"
            >
              <Link to={`/${product.url}`}>
                <figure className="h-96">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover"
                  />
                </figure>
              </Link>

              <div className="space-y-2">
                <h3 className="text-xl text-[#A64D79]">{product.name}</h3>

                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < product.rating ? "text-yellow-400" : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>

                <p className="font-bold">{product.price}</p>
              </div>

              <button
                onClick={() => addToCart(product.id)}
                className="flex items-center justify-center gap-x-4 bg-[#A64D79] px-4 py-2 rounded-sm text-lg"
              >
                <ShoppingCart className="size-4" /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
