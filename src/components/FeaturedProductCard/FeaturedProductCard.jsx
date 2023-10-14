import { useNavigate } from 'react-router-dom';
import './featuredProductCard.css';

export const FeaturedProductCard = ( { img, name, price, link } ) => {

  const navigate = useNavigate();

  return (
    <>
      <div className='col mb-5'>
        <div className='product-card'>
          <img className='img-fluid product-card-img' src={img} alt={name} />
            <div className='card-body'>
              <h5 className='card-title fs-2 mt-4'>{name}</h5>
              <p className='card-text fs-3'>{price}</p>
              <div className="d-flex justify-content-center">
                <button className='card-btn' onClick={() => { navigate(link) }}>Ver colores</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}