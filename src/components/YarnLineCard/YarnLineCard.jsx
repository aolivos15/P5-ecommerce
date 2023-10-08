import { Link } from 'react-router-dom';
import './yarnLineCard.css';

export const YarnLineCard = ( { img, name, link } ) => {
  return (
    <>
      <div className='col d-flex'>
        <div className='product-line-card justify-content-center align-items-center'>
        <Link to={link} className='line-card-title fs-3'><img className='line-card-img' src={img} alt={name} /></Link>
            <div className='card-body'>
              <Link to={link} className='line-card-title fs-3'>{name}</Link>
            </div>
        </div>
      </div>
    </>
  )
}