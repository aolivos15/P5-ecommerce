import './featuredProductCard.css';

export const FeaturedProductCard = ( { img, name, price } ) => {
  return (
    <>
      <div className='col'>
        <div className='card product-card'>
          <img className='card-img' src={img} alt={name} />
            <div className='card-body'>
              <h5 className='card-title fs-2'>{name}</h5>
              <p className='card-text fs-3'>{price}</p>
              <div className="d-flex justify-content-center">
                <button className='card-btn'>Ver colores</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}