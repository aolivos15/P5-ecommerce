import { FeaturedProducts } from "../components/FeaturedProducts/FeaturedProducts"
import { Footer } from "../components/Footer/Footer"
import { Jumbotron } from "../components/Jumbotron/Jumbotron"

export const HomePage = () => {
  return (
    <>
      <Jumbotron />
      <FeaturedProducts />
      <Footer />
    </>
  )
}
