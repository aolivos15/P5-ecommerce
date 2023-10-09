import { useParams } from "react-router-dom"
import { ProductContainer } from "../components/ProductContainer/ProductContainer";

export const ProductPage = () => {

  const { name } = useParams();

  return (
    <>
      <ProductContainer name={name} />
    </>
  )
}
