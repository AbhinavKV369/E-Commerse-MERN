import React, { useReducer } from "react";
import ProductImage from "../../assets/Smartphone.webp";
import ProductImage1 from "../../assets/Gadgets.webp";

const product = {
  name: "Samsung Galaxy S23",
  description:
    "The Samsung Galaxy S23 offers a pro-grade camera, Snapdragon processor, and stunning AMOLED display.",
  price: "₹74,999",
  images: [
    { url: ProductImage, alt: "Samsung Galaxy S23 front" },
    { url: ProductImage1, alt: "Samsung Galaxy S23 back" },
  ],
  colors: ["#000000", "#1E40AF", "#DC2626"],
  specs: {
    display: "6.1-inch AMOLED",
    processor: "Snapdragon 8 Gen 2",
    ram: "8GB",
    storage: "128GB / 256GB",
    battery: "3900mAh",
    camera: "50MP + 10MP + 12MP",
  },
};

// Actions for reducer
const ACTIONS = {
  SET_MAIN_IMAGE: "SET_MAIN_IMAGE",
  SET_SELECTED_COLOR: "SET_SELECTED_COLOR",
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

// Reducer for state management
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_MAIN_IMAGE:
      return { ...state, mainImage: action.payload };
    case ACTIONS.SET_SELECTED_COLOR:
      return { ...state, selectedColor: action.payload };
    case ACTIONS.INCREMENT:
      return { ...state, count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { ...state, count: Math.max(1, state.count - 1) };
    default:
      return state;
  }
}

// Initial state
const initialState = {
  mainImage: product.images[0].url,
  selectedColor: null,
  count: 1,
};

const ProductDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="px-6 pt-10 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left: Images */}
        <div className="flex flex-col items-center">
          <img
            src={state.mainImage}
            alt={product.name}
            className="rounded-2xl shadow-xl w-[380px] h-[380px] object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="flex gap-2 mt-6">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img.url}
                alt={img.alt}
                onClick={() =>
                  dispatch({ type: ACTIONS.SET_MAIN_IMAGE, payload: img.url })
                }
                className={`h-12 w-12 rounded-xl border cursor-pointer object-cover transition duration-300 hover:scale-110 ${
                  state.mainImage === img.url
                    ? "ring-2 ring-black border-black"
                    : "shadow-md"
                }`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        {/* Right: Details */}
        <div className="flex flex-col justify-start">
          <h1 className="text-3xl font-extrabold mb-4 text-gray-900">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {product.description}
          </p>
          <p className="text-2xl font-bold text-gray-900 mb-8">
            {product.price}
          </p>

          {/* Colors */}
          <div className="flex items-center gap-3 mb-6">
            {product.colors.map((color, idx) => (
              <span
                key={idx}
                style={{ backgroundColor: color }}
                onClick={() =>
                  dispatch({
                    type: ACTIONS.SET_SELECTED_COLOR,
                    payload: color,
                  })
                }
                className={`w-8 h-8 rounded-full border cursor-pointer transition duration-300 hover:scale-110 ${
                  state.selectedColor === color
                    ? "ring-2 ring-black"
                    : "shadow-sm"
                }`}
              />
            ))}
          </div>

          {/* Selected color */}
          {state.selectedColor && (
            <div className="mb-6">
              <h2 className="font-semibold text-gray-700 text-lg flex items-center">
                Selected color:
                <span
                  className="ml-3 rounded-full h-7 w-7 border-2 shadow-sm"
                  style={{ background: state.selectedColor }}
                />
              </h2>
            </div>
          )}

          {/* Quantity */}
          <h2 className="text-lg font-bold mb-2">Quantity:</h2>
          <div className="flex items-center space-x-3 mb-8">
            <button
              disabled={state.count <= 1}
              onClick={() => dispatch({ type: ACTIONS.DECREMENT })}
              className={`w-10 h-10 flex items-center justify-center font-bold rounded-full shadow transition ${
                state.count <= 1
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}>
              −
            </button>
            <span className="text-xl font-bold text-gray-900">
              {state.count}
            </span>
            <button
              onClick={() => dispatch({ type: ACTIONS.INCREMENT })}
              className="w-10 h-10 flex items-center justify-center font-bold rounded-full shadow bg-gray-200 hover:bg-gray-300 text-gray-800 transition">
              +
            </button>
          </div>

          {/* Actions */}
          <div className="flex space-x-4 mb-8">
            <button className="px-6 py-3 bg-black text-white font-semibold rounded-xl shadow hover:bg-gray-800 transition">
              Add to Cart
            </button>
            <button className="px-6 py-3 bg-gray-700 text-white font-semibold rounded-xl shadow hover:bg-gray-600 transition">
              Buy Now
            </button>
          </div>
        </div>
      </div>
      {/* Specifications */}
      <div className="bg-gray-50 p-5 rounded-xl shadow mt-3">
        <h3 className="font-semibold text-gray-900 mb-3">Specifications</h3>
        <ul className="space-y-2 text-gray-700">
          {Object.entries(product.specs).map(([key, value], idx) => (
            <li key={idx} className="flex justify-between border-b py-1">
              <span className="capitalize">{key}</span>
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductDetails;
