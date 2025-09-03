import Testimonials from "../components/Common/Testimonials"
import Banner from "../components/Layout/Banner"
import NewArrivals from "../components/Products/NewArrivals"
import ProductCollections from "../components/Products/ProductCollections"
import ProductDetails from "../components/Products/ProductDetails"
import ProductGrid from "../components/Products/ProductGrid"

const Home = () => {
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
      <ProductGrid />
      <Testimonials/>
  
    </div>
  );
}

export default Home