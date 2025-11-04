import React, { useEffect, useState } from "react";
import { FaStar, FaBoxes, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router";

const PopularToys = () => {
  const [toys, setToys] = useState([]);
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetch("/ToysData.json")
      .then((res) => res.json())
      .then((data) => setToys(data))
      .catch((error) => console.error("Error loading toys data:", error));
  }, []);

  const handleAddToCart = (toy) => {
    setCart((prevCart) => {
      const isAlreadyInCart = prevCart.find((item) => item.toyId === toy.toyId);
      if (isAlreadyInCart) return prevCart;

      const newCart = [...prevCart, toy];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return newCart;
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Popular Toys
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {toys.slice(0, 8).map((toy) => (
          <div
            key={toy.toyId}
            className="bg-white shadow-md rounded-2xl p-4 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={toy.pictureURL}
              alt={toy.toyName}
              className="w-full h-48 object-contain mb-4 rounded-lg"
            />
            <div className="flex justify-between">
              <h3 className="text-gray-800 text-base font-bold mb-1 line-clamp-1">
                {toy.toyName}
              </h3>
              <div className="flex items-center gap-1  px-2 py-1 rounded-full font-bold">
                <FaStar className="text-yellow-500" />
                <span>{toy.rating}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold">
                <FaBoxes className="text-gray-600" /> In Stock:{" "}
                {toy.availableQuantity}
              </div>
              <div className="flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-1 rounded-full font-bold">
                <p className="text-gray-800 font-semibold m-2 flex items-center gap-1">
                  <FaDollarSign className="text-green-600" /> Price: $
                  {toy.price}
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <Link to={`/toys/${toy.toyId}`}>
                <div className="flex justify-center m-2">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition">
                    View Details
                  </button>
                </div>
              </Link>
              <div className="flex justify-center m-2">
                <button
                  onClick={() => handleAddToCart(toy)}
                  className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularToys;
