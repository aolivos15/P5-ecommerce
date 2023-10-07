import { ProductLineCard } from "../ProductLineCard/ProductLineCard"
import basica from "../../assets/img/product_lines/basica.png";
import super_line from "../../assets/img/product_lines/super.png";
import bebe from "../../assets/img/product_lines/bebe.png";
import algodon from "../../assets/img/product_lines/algodon.png";
import lana from "../../assets/img/product_lines/lana.png";
import arcoiris from "../../assets/img/product_lines/arcoiris.png";

export const ProductLines = () => {
  return (
    <>
      <div className="container-fluid py-5 bg-third">
        <h2 className="resp-title text-center">Conoce nuestras líneas</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-evenly mb-4">
          <ProductLineCard name='Básica' img={basica} link='' />
          <ProductLineCard name='Súper' img={super_line} link='' />
          <ProductLineCard name='Bebé' img={bebe} link='' />
          <ProductLineCard name='Algodón' img={algodon} link='' />
          <ProductLineCard name='Lana' img={lana} link='' />
          <ProductLineCard name='Arcoiris' img={arcoiris} link='' />
        </div>
      </div>
    </>
  )
}
