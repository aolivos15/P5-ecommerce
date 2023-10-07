import { FeaturedProducts } from "../components/FeaturedProducts/FeaturedProducts"
import { Footer } from "../components/Footer/Footer"
import { Jumbotron } from "../components/Jumbotron/Jumbotron"
import { ProductLines } from "../components/ProductLines/ProductLines"

export const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <ProductLines />
      <FeaturedProducts />
      <Footer />
    </>
  )
}
