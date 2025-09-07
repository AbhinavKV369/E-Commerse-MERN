import React from "react";
import { Link } from "react-router-dom";

const ProductGrid = ({products}) => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
              {/* Image */}
              <div className="overflow-hidden">
                <Link to={`product/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
                  />
                </Link>
              </div>

              {/* Info */}
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex-grow">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-700 font-medium">{product.price}</p>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex space-x-3">
                  <button className="flex-1 px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg shadow hover:bg-gray-700 transition">
                    Add to Cart
                  </button>
                  <button className="flex-1 px-4 py-2 border border-gray-400 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-100 transition">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
