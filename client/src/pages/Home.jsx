import Banner from "../components/Layout/Banner"
import NewArrivals from "../components/Products/NewArrivals"
import ProductCollections from "../components/Products/ProductCollections"
import ProductDetails from "../components/Products/ProductDetails"

const Home = () => {
  return (
    <div>
      <Banner/>
      <ProductCollections/>
      <NewArrivals/>
      <ProductDetails/>
    </div>
  )
}

export default Home