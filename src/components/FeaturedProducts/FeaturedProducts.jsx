import { FeaturedProductCard } from "../FeaturedProductCard/FeaturedProductCard"
import prod_algodon from "../../assets/img/prod_algodon.webp";
import prod_basica from "../../assets/img/prod_basica.webp"
import prod_super from "../../assets/img/prod_super.webp"

export const FeaturedProducts = () => {
  return (
    <>
      <div className="container-fluid py-5">
        <h2 className="resp-title text-center mb-5 fs-1 fw-bold">Productos destacados</h2>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-evenly">
            <FeaturedProductCard name='Ovillo línea clásica' img={prod_basica} price='$1.990' link='/productos/ovillo-clasica' />
            <FeaturedProductCard name='Ovillo línea súper' img={prod_super} price='$2.390' link='/productos/ovillo-super' />
            <FeaturedProductCard name='Ovillo línea algodón' img={prod_algodon} price='$2.490' link='/productos/ovillo-algodon' />
        </div>
      </div>
    </>
  )
}