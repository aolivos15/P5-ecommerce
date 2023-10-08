import { useParams } from "react-router-dom"
import { CategoryContainer } from "../components/CategoryContainer/CategoryContainer";

export const CategoryPage = () => {
  const { title } = useParams();

  return (
    <>
      <CategoryContainer title={title} />
    </>
  )
}
