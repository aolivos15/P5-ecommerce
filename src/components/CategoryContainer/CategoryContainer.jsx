import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CategoryProductCard } from "../CategoryProductCard/CategoryProductCard";

export const CategoryContainer = ( { title } ) => {

  const navigate = useNavigate();

  // To store the full title of the product line
  const [ categoryTitle, setCategoryTitle ] = useState('');

  // Get page title from params and convert to full page title
  const convertToFullTitle = () => {
    switch (title) {
      case 'ovillos':
        setCategoryTitle('Ovillos');
        return categoryTitle;
      case 'hilos':
        setCategoryTitle('Hilos');
        return categoryTitle;
      case 'accesorios':
        setCategoryTitle('Accesorios');
        return categoryTitle;
      default:
        navigate(`/notfound`);
    }
  }

  useEffect(() => {
    convertToFullTitle();
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5">{categoryTitle}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-evenly">
          {/* Traer de la db todos los ejemplos de productLines */}
            <CategoryProductCard title={title} img="" price="" />
        </div>
      </div>
    </>
  )
}
