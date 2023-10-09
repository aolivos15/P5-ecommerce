import { useParams } from "react-router-dom"
import { CategoryContainer } from "../components/CategoryContainer/CategoryContainer";

export const CategoryPage = () => {
  const { category } = useParams();

  return (
    <>
      <CategoryContainer category={category} />
    </>
  )
}
