import { FeaturedProducts } from "../components/FeaturedProducts/FeaturedProducts"
import { Jumbotron } from "../components/Jumbotron/Jumbotron"
import { YarnLines } from "../components/YarnLines/YarnLines"

export const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <YarnLines />
      <FeaturedProducts />
    </>
  )
}
