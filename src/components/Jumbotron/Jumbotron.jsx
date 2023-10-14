import './jumbotron.css';

export const Jumbotron = () => {
  return (
    <>
      <div className='text-center bg-image jumbotron-container'>
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white p-4'>
              <h1 className='mb-5 fw-bold'>Ovillos, hilos y accesorios de tejido</h1>
              <h4 className='mb-3'>La oferta más variada de la mejor calidad, para todo tipo de proyectos de tejido.</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
