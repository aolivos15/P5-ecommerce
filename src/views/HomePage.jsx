import { FeaturedProducts } from "../components/FeaturedProducts/FeaturedProducts"
import { Jumbotron } from "../components/Jumbotron/Jumbotron"
import { ProductLines } from "../components/ProductLines/ProductLines"

export const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <ProductLines />
      <FeaturedProducts />
    </>
  )
}
