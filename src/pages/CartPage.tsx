import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";

export default function CartPage() {
  const {
    cart,
    cartProducts,
    removeFromCart,
    addToCart,
    deleteFromCart,
    cartTotal,
  } = useCart();

  return (
    <section className="space-y-12">
      <h2 className="text-4xl font-bold">Shopping Cart</h2>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center gap-y-4">
          <h2>Your cart is empty.</h2>
          <Link
            to="/"
            className="flex items-center justify-center gap-x-4 bg-[#A64D79] px-4 py-2 rounded-sm text-lg"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="space-y-8">
            {cartProducts.map((cartProduct) => (
              <div
                key={cartProduct.id}
                className="flex gap-4 justify-between border-b border-[#A64D79]  pb-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                  <Link to={`/${cartProduct.url}`}>
                    <figure className="size-24 md:size-48">
                      <img
                        src={cartProduct.image}
                        alt={cartProduct.name}
                        className="rounded-sm size-full object-cover"
                      />
                    </figure>
                  </Link>

                  <div>
                    <p className="font-bold text-[#A64D79]">
                      {cartProduct.name}
                    </p>
                    <p>${cartProduct.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  <div className="flex justify-between flex-col-reverse items-center gap-4 border border-[#3B1C32] rounded-sm p-2 lg:w-fit lg:gap-x-8 sm:flex-row">
                    <button
                      className="border border-[#A64D79] rounded-sm px-2 py-1 cursor-pointer disabled:bg-gray-700 disabled:border-transparent"
                      onClick={() => removeFromCart(cartProduct.id)}
                    >
                      <Minus className="size-5 text-white" />
                    </button>

                    <span>{cartProduct.quantity}</span>

                    <button
                      className="border border-[#A64D79]  rounded-sm px-2 py-1 cursor-pointer"
                      onClick={() => addToCart(cartProduct.id)}
                    >
                      <Plus className="size-5 text-white" />
                    </button>
                  </div>

                  <button onClick={() => deleteFromCart(cartProduct.id)}>
                    <Trash2 className="size-5 text-red-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="text-2xl text-[#A64D79]">
              Total:{" "}
              <span className="text-white font-bold">
                ${cartTotal.toFixed(2)}
              </span>
            </p>
          </div>
        </>
      )}
    </section>
  );
}
