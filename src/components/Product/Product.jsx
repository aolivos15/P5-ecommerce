import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/CartContext/CartContext';
import './product.css';

export const Product = ({ product }) => {

  // Variables to get product properties to display in the "Product details" section
  const [ productProperties, setproductProperties ] = useState([]);
  const [ productColors, setProductColors ] = useState([]);
  const [ productSizes, setProductSizes ] = useState([]);

  // Get all the properties from the product
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
    if (product.colors) {
      setProductColors(product.colors);
    }
    if (product.sizes) {
      setProductSizes(product.sizes);
    }

    setproductProperties(properties);
  }

  useEffect(() => {
    getProductProperties();
  }, [product]);


  // Take cart and addToCart function from cart context
  const cartCtx = useContext(CartContext);
  const { cart, addToCart } = cartCtx;


  return (
    <>
      <div className="row justify-content-evenly my-5 py-5">
        <div className="col-lg-5">
          <img className="product-image mb-5" src={product.image} alt={product.title} />
        </div>
        <div className="col-lg-6 ms-5">
          <h1 className='product-title mb-4'>{product.title}</h1>
          <h2 className="mb-4">${product.price}</h2>
          {
            productColors.map(color => (
              <button
                key={color.code}
                style={{backgroundColor: `${color.code}`, color: `${color.code}`}}
                className='product-color-btn'
                title={color.name}
              >o</button>
            ))
          }
          {
            productSizes.map(size => (
              <button
                key={size.size}
                className='product-size-btn'
              >{size.size}</button>
            ))
          }
          <div className="d-flex justify-content-center mt-4">
            <button
              className='add-to-cart-btn'
              onClick={() => {addToCart(product)}}
              >Agregar al carrito
            </button>
          </div>
        </div>
      </div>

      <div className="row mb-5 pb-5">
        <div className="col">
          <h2 className='mb-4'>Características del producto:</h2>
          <table className="table table-warning table-striped table-hover product-table">
            <tbody>
              {
                productProperties.map(property => (
                  <tr key={property.title}>
                    <td>{property.title}</td>
                    <td>{property.content}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
