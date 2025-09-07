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
      image: "/assets/Gadgets.png",
    },
    {
      id: 2,
      name: "Apple MacBook Air M2",
      price: "₹99,999",
      image: "/assets/Laptop.png",
    },
    {
      id: 3,
      name: "Sony WH-1000XM5 Headphones",
      price: "₹29,999",
      image: "/assets/Headphones.png",
    },
    {
      id: 4,
      name: "Apple Watch Series 9",
      price: "₹45,999",
      image: "/assets/Watch.png",
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