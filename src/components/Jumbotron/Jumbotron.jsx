import { Link } from 'react-router-dom';
import jumbotron_img from '../../assets/img/jumbotron_img.jpg';
import './jumbotron.css';

export const Jumbotron = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-7">
              <img className="img-fluid rounded-custom" src={jumbotron_img} alt="Ovillos de lana y gancho de crochet sobre un paño calipso tejido a crochet" />
          </div>
          <div className="col-lg-5 p-4">
            <h1 className='resp-title mb-4'>Ovillos, hilos y accesorios de tejido</h1>
            <p className='resp-p mb-4'>La oferta más variada de la mejor calidad, para todo tipo de proyectos de tejido.</p>
            <Link to="/catalogo" className='jumbotron-link'><button className="jumbotron-btn">Revisa nuestro catálogo</button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
