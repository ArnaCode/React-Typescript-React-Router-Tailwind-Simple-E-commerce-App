import { ArrowRight, Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";
import Reviews from "../components/Reviews";
import { useCart } from "../context/CartContext";

export default function ProductPage() {
  const { url } = useParams();
  const { addToCart, removeFromCart, getProductQuantity } = useCart();

  const product = products.find((item) => item.url === url)!;
  const quantity = getProductQuantity(product.id);

  return (
    <>
      <section className="flex flex-col gap-4">
        <h2 className="text-3xl">{product.name}</h2>

        <div className="flex gap-x-8 items-center ">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`size-5 ${
                  i < product.rating ? "text-yellow-400" : "text-gray-400"
                }`}
              />
            ))}
          </div>

          <span className="text-xl">
            {product.reviews.length}{" "}
            {product.reviews.length === 1 ? "rating" : "ratings"}
          </span>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <figure>
            <img
              src={product.image}
              alt={product.name}
              className="rounded-sm"
            />
          </figure>

          <div className="flex flex-col gap-4">
            <p className="text-xl">{product.description}</p>

            <p className="text-xl">${product.price}</p>

            <div className="grid gap-4 sm:grid-cols-[200px_1fr] lg:grid-cols-1">
              <div className="flex justify-between border border-[#3B1C32] rounded-sm p-4 lg:w-fit lg:gap-x-8">
                <button
                  className="border border-[#A64D79] rounded-sm px-2 py-1 cursor-pointer disabled:bg-gray-700 disabled:border-transparent disabled:cursor-not-allowed"
                  disabled={quantity === 0}
                  onClick={() => removeFromCart(product.id)}
                >
                  <Minus className="size-5 text-white" />
                </button>

                <span>{quantity}</span>

                <button
                  className="border border-[#A64D79]  rounded-sm px-2 py-1 cursor-pointer"
                  onClick={() => addToCart(product.id)}
                >
                  <Plus className="size-5 text-white" />
                </button>
              </div>

              <div className="flex  flex-col gap-4 sm:flex-row">
                <button
                  onClick={() => addToCart(product.id)}
                  className="flex items-center justify-center gap-x-2 bg-[#6A1E55] px-4 py-2 rounded-sm"
                >
                  <ShoppingCart className="size-5" /> Add to Cart
                </button>

                <Link
                  to="/cart"
                  className="flex items-center justify-center gap-x-2 px-4 py-1 border border-[#A64D79] rounded-sm"
                >
                  Go to Cart <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Reviews reviews={product.reviews} />
      </section>
    </>
  );
}
