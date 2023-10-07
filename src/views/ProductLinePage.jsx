import { useParams } from "react-router-dom"
import { ProductLineContainer } from "../components/ProductLineContainer/ProductLineContainer";

export const ProductLinePage = () => {
  const { title } = useParams();

  return (
    <>
      <ProductLineContainer title={title} />
    </>
  )
}
