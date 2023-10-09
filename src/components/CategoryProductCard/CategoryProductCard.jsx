import { Link } from 'react-router-dom';
import './categoryProductCard.css';

export const CategoryProductCard = ({ title, image, price, name }) => {
  return (
    <>
      <div className='col mb-4'>
        <div className='cat-product-card'>
          <Link to={`/productos/${name}`}><img className='img-fluid cat-product-card-img' src={image} alt={title} /></Link>
            <Link to={`/productos/${name}`} className='cat-product-link'><div className='card-body'>
              <h5 className='cat-card-title fs-4 mt-4'>{title}</h5>
              <p className='cat-card-price fs-4'>${price}</p>
            </div></Link>
        </div>
      </div>
    </>
  )
}
