import { YarnLineCard } from "../YarnLineCard/YarnLineCard"
import clasica from "../../assets/img/yarn_lines/clasica.png";
import super_line from "../../assets/img/yarn_lines/super.png";
import bebe from "../../assets/img/yarn_lines/bebe.png";
import algodon from "../../assets/img/yarn_lines/algodon.png";
import lana from "../../assets/img/yarn_lines/lana.png";
import chispas from "../../assets/img/yarn_lines/chispas.png";

export const YarnLines = () => {
  return (
    <>
      <div className="container-fluid py-5 bg-third">
        <h2 className="resp-title text-center">Conoce nuestras líneas de ovillos</h2>
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-evenly mb-4">
          <YarnLineCard name='Clásica' img={clasica} link='/categoria/ovillos/clasica' />
          <YarnLineCard name='Súper' img={super_line} link='' />
          <YarnLineCard name='Bebé' img={bebe} link='' />
          <YarnLineCard name='Algodón' img={algodon} link='' />
          <YarnLineCard name='Lana' img={lana} link='' />
          <YarnLineCard name='Chispas' img={chispas} link='' />
        </div>
      </div>
    </>
  )
}
