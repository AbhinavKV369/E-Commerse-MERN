import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import LaptopImg from "../../assets/Laptop.webp";
import GadgetImg from "../../assets/Gadgets.webp";
import BannerImg from "../../assets/Banner.webp";

const NewArrivals = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const newArrivalsData = [
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      price: "₹1,29,999",
      image: GadgetImg,
    },
    {
      id: 2,
      name: "Apple MacBook Air M2",
      price: "₹1,09,900",
      image: BannerImg,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: "₹29,990",
      image: GadgetImg,
    },
    { id: 4, name: "iPad Pro 12.9 (M2)", price: "₹1,12,900", image: GadgetImg },
    { id: 5, name: "Dell XPS 15 Laptop", price: "₹1,49,990", image: GadgetImg },
    { id: 6, name: "Apple Watch Series 9", price: "₹41,900", image: LaptopImg },
  ];

  // Update scroll buttons visibility
  const updateScroll = () => {
    const container = scrollRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollWidth > container.scrollLeft + container.clientWidth
      );
    }
  };

  // Arrow scroll
  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = scrollRef.current;

    if (container) {
      // Track scroll position
      container.addEventListener("scroll", updateScroll);

      // Mouse wheel horizontal scroll
      const onWheel = (e) => {
        if (e.deltaY === 0) return; // only act on vertical wheel
        e.preventDefault();
        container.scrollBy({
          left: e.deltaY < 0 ? -300 : 300, // negative = scroll left
        });
      };


      container.addEventListener("wheel", onWheel, { passive: false });

      updateScroll();

      // Cleanup
      return () => {
        container.removeEventListener("scroll", updateScroll);
        container.removeEventListener("wheel", onWheel);
      };
    }
  }, []);

  return (
    <section>
      <div className="container mx-auto mb-10 relative">
        <h1 className="text-3xl font-bold mx-5">New arrivals</h1>

        {/* Arrows */}
        <div className="absolute right-0 flex px-4 space-x-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`h-8 w-8 flex items-center justify-center rounded-full ${
              canScrollLeft
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500"
            }`}>
            <FiChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`h-8 w-8 flex items-center justify-center rounded-full ${
              canScrollRight
                ? "bg-black text-white"
                : "bg-gray-300 text-gray-500"
            }`}>
            <FiChevronRight />
          </button>
        </div>

        {/* Scrollable container with mouse wheel */}
        <div
          ref={scrollRef}
          className="mt-10 pb-3 flex space-x-3 overflow-x-auto scrollbar-hide scroll-smooth">
          {newArrivalsData.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="flex flex-shrink-0">
              <div className="w-60 bg-white shadow-lg rounded-xl p-3 flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg"
                  loading="lazy"
                />
                <h2 className="mt-2 font-semibold">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
