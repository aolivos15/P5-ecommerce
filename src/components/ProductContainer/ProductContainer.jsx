import { useEffect, useState } from "react"
import { axiosClient } from "../../config/api";
import { Product } from "../Product/Product";

export const ProductContainer = ({ name }) => {

  const [ product, setProduct ] = useState({});

  const getProductByName = async () => {
    try {
      const response = await axiosClient.get(`/product/${name}`);
      setProduct(response.data);

    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getProductByName();
  }, [])

  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col">
            <Product product={product}/>
          </div>
        </div>
      </div>
    </>
  )
}
