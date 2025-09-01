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
      <h1 className="text-4xl font-bold pb-10 text-center text-gray-800">
        Best Seller
      </h1>
      <ProductDetails />

      {/* Trending products */}
      <h1 className="text-3xl text-gray-900 text-center pt-6 font-bold">Trending Products</h1>
      <ProductGrid/>


    </div>
  );
}

export default Home