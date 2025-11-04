import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    document.title = "Cart Page";
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const handleRemove = (toyId) => {
    const updatedCart = cart.filter((toy) => toy.toyId !== toyId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };


  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex center gap-4 mx-auto">
        <FaShoppingCart size={28} color="blue" className="cursor-pointer" />
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Your Cart </h1>
      </div>

      {cart.length === 0 ? (
        <p className="text-gray-700">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((toy) => (
            <div
              key={toy.toyId}
              className="bg-gray-200 p-4 rounded-lg flex items-start gap-4 justify-between"
            >
              <div className="flex gap-4">
                <img
                  src={toy.pictureURL}
                  alt={toy.toyName}
                  className="h-24 w-24 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-lg">{toy.toyName}</h3>
                  <p className="text-gray-700">{toy.description}</p>
                  <p className="font-bold mt-1">${toy.price}</p>
                </div>
              </div>
              <button
                onClick={() => handleRemove(toy.toyId)}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
