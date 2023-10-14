import { Link } from 'react-router-dom';
import './categoryProductCard.css';
import { useContext } from 'react';
import CartContext from '../../context/CartContext/CartContext';

export const CategoryProductCard = ({ title, image, price, name }) => {

  const cartCtx = useContext(CartContext);
  const { formatPrice } = cartCtx;

  return (
    <>
      <div className='col mb-4'>
        <div className='cat-product-card'>
          <Link to={`/productos/${name}`}><img className='img-fluid cat-product-card-img' src={image} alt={title} /></Link>
            <Link to={`/productos/${name}`} className='cat-product-link'><div className='card-body'>
              <h5 className='cat-card-title fs-4 mt-4'>{title}</h5>
              <p className='cat-card-price fs-4'>{formatPrice.format(price)}</p>
            </div></Link>
        </div>
      </div>
    </>
  )
}
