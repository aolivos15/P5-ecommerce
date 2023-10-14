import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext/UserContext";
import './logInForm.css';

export const LogInForm = () => {

  const navigate = useNavigate();
  const userCtx = useContext(UserContext);
  const { logInUser, authStatus, verifyToken } = userCtx;

  const [ data, setData ] = useState({
    email: '',
    password: ''
  });

  // When the user is filling the form
  const onChangeData = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    });
  }

  // When the user submits the form
  const onSubmitData = (event) => {
    event.preventDefault();
    logInUser(data);
  }

  // When a valid token exists, redirect to home page
  useEffect (() => {
    verifyToken();
    if(authStatus) {
      navigate('/');
    }
  }, [authStatus]);

  return (
    <>
      <div className="container my-5">
        <div className="row">

          <h2 className="text-center mb-4">Iniciar sesión</h2>

          <div className="col d-flex justify-content-center align-items-center">

            <div className="login-form-container">
              <form className="mb-5 justify-content-center" onSubmit={(e) => { onSubmitData(e) }}>

                <div>
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="nombre@ejemplo.com"
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div>
                  <label htmlFor="password" className="form-label">Contraseña</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    className="form-control"
                    onChange={(e)=>{onChangeData(e)}}
                    required />
                </div>

                <div className="container d-flex justify-content-center mt-4">
                  <div className="row w-100">
                    <button className="custom-btn fs-5" type="submit">Ingresar</button>
                    <p className="text-center fs-5 mt-3">¿No tienes una cuenta? <Link to='/signup'>¡Regístrate aquí!</Link></p>
                  </div>
                </div>

              </form>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
