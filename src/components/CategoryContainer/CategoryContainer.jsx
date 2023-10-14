import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { CategoryProductCard } from "../CategoryProductCard/CategoryProductCard";
import { axiosClient } from "../../config/api";

export const CategoryContainer = ( { category } ) => {

  const navigate = useNavigate();

  // To store the full title of the product line
  const [ categoryTitle, setCategoryTitle ] = useState('');
  // To store all the products from the category
  const [ products, setProducts ] = useState([]);

  // Get page title from params and convert to full page title
  const convertToFullTitle = () => {
    switch (category) {
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

  const getAllProductsFromCategory = async () => {
    try {
      const response = await axiosClient.get(`/products/${category}`);
      setProducts(response.data);

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    convertToFullTitle();
    getAllProductsFromCategory();
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="resp-title text-center my-5 fw-bold">{categoryTitle}</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 justify-content-evenly mb-5">
          {
            products.map(product => (
              <CategoryProductCard key={product._id}
                title={product.title}
                image={product.image}
                price={product.price}
                name={product.name} />
            ))
          }
        </div>
      </div>
    </>
  )
}
