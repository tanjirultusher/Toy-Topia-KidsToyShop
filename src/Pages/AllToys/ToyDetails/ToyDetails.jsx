import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ToyDetails = () => {
  const { toyId } = useParams();
  const [toy, setToy] = useState(null);

  useEffect(() => {
    document.title = "Toys Details";
    fetch("/ToysData.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedToy = data.find((item) => item.toyId === parseInt(toyId));
        setToy(selectedToy);
      })
      .catch((error) => console.log(error));
  }, [toyId]);

  if (!toy)
    return <p className="text-center mt-10 text-lg">Loading toy details...</p>;

  return (
    <div className="w-full flex justify-center bg-gray-50 py-12">
      <div className="w-[900px] flex flex-col md:flex-row items-center gap-10 bg-white p-8 rounded-2xl shadow-md">
        
        <div className="md:w-1/2 w-full flex justify-center">
          <img
            src={toy.pictureURL}
            alt={toy.toyName}
            className="rounded-xl w-full h-[400px] object-cover shadow-lg"
          />
        </div>

        <div className="md:w-1/2 w-full">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {toy.toyName}
          </h2>
          <p className="text-lg text-blue-600 font-medium mb-4">
            {toy.subCategory}
          </p>
          <p className="text-gray-700 mb-2 leading-relaxed">
            {toy.description}
          </p>

          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Seller Name:</strong> {toy.sellerName}
            </p>
            <p>
              <strong>Seller Email:</strong> {toy.sellerEmail}
            </p>
            <p>
              <strong>Available Quantity:</strong> {toy.availableQuantity}
            </p>
            <p>
              <strong>Price:</strong> ${toy.price}
            </p>
            <p>
              <strong>Rating:</strong> ⭐ {toy.rating}
            </p>
            <button
              className="mt-5 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold"
              onClick={() => window.history.back()}
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
