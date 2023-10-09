import { useEffect, useState } from 'react';
import './product.css';

export const Product = ({ product }) => {

  const [ productProperties, setproductProperties ] = useState([]);

  const getProductProperties = () => {
    const properties = [];

    if (product.composition) {
      properties.push({ title: "Composición", content: product.composition });
    }
    if (product.ply) {
      properties.push({ title: "Hebras", content: product.ply });
    }
    if (product.grams) {
      properties.push({ title: "Gramos", content: product.grams });
    }
    if (product.meters) {
      properties.push({ title: "Metros", content: product.meters });
    }
    if (product.weight) {
      properties.push({ title: "Grosor", content: product.weight });
    }
    if (product.crochet) {
      properties.push({ title: "Crochet", content: product.crochet });
    }
    if (product.needles) {
      properties.push({ title: "Palillos", content: product.needles });
    }

    setproductProperties(properties);

  }

  useEffect(() => {
    getProductProperties();
  }, [product]);

  return (
    <>
      <div className="row my-5 py-5">
        <div className="col">
          <img className="product-image" src={product.image} alt={product.title} />
        </div>
        <div className="col">
          <h1 className='product-title mb-4'>{product.title}</h1>
          <h2 className="mb-4">${product.price}</h2>
          <table className="table table-warning table-striped table-hover product-table">
            <tbody>
              {
                productProperties.map (property => (
                  <tr key={property.title}>
                      <td>{property.title}</td>
                      <td>{property.content}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className="d-flex justify-content-center">
            <button className='add-to-cart-btn'>Agregar al carrito</button>
          </div>
        </div>
      </div>
    </>
  )
}
