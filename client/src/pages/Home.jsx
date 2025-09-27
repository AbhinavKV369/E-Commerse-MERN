import Testimonials from "../components/Common/Testimonials"
import Banner from "../components/Layout/Banner"
import NewArrivals from "../components/Products/NewArrivals"
import ProductCollections from "../components/Products/ProductCollections"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Samsung Galaxy S24 Ultra",
      price: "₹1,29,999",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      name: "Apple MacBook Air M2",
      price: "₹1,09,900",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: "₹29,990",
      image:
        "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 4,
      name: "iPad Pro 12.9 (M2)",
      price: "₹1,12,900",
      image:
        "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 5,
      name: "Dell XPS 15 Laptop",
      price: "₹1,49,990",
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&auto=format&fit=crop&q=80",
    },
    {
      id: 6,
      name: "Apple Watch Series 9",
      price: "₹41,900",
      image:
        "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&auto=format&fit=crop&q=80",
    },
  ];
  return (
    <div>
      <Banner />
      <ProductCollections />
      <NewArrivals />

      {/* Best seller */}
      <h1 className="text-4xl font-bold pb-5 text-center text-gray-0">
        Best Seller
      </h1>
      <ProductDetails />

      {/* Trending products */}
      <h1 className="text-3xl mt-6 bg-gray-50 text-gray-900 text-center pt-5 font-bold shadow-2xl">
        Trending Products
      </h1>
      <ProductGrid  products={products} />
      <Testimonials/>
  
    </div>
  );
}

export default Home